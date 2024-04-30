import { Component, Element, Prop, h, Event, EventEmitter, Watch } from '@stencil/core';

@Component({
  tag: 'biggive-cookie-banner',
  styleUrl: 'biggive-cookie-banner.scss',
  shadow: true,
})
export class BiggiveCookieBanner {
  /**
   * If true the Preferences modal will be auto-opened - for use when the user has requested to edit their cookie
   * preferences
   */
  @Prop() autoOpenPreferences: boolean = false;
  @Prop() blogUriPrefix!: string;

  /**
   * This type is similar to CookiePreferences from donate-frontend/src/app/cookiePreference.service.ts
   * but afaik there isn't a nice way to share a type.
   *
   * When updating please also update the copy in the type of cookieBannerSavePreferencesSelected - using a named type
   * there caused build problems.
   *
   * When updating please also update the type of cookieBannerSavePreferencesSelected - I didn't find a way
   * to avoid the duplication.
   */
  @Prop() previouslyAgreedCookiePreferences:
    | {
        analyticsAndTesting: boolean;
        thirdParty: boolean;
      }
    | undefined = undefined;
  @Element() el: HTMLBiggiveCookieBannerElement;

  @Event({
    eventName: 'preferenceModalClosed',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  preferenceModalClosed: EventEmitter<void>;

  /**
   * Indicates that the user accepts cookies for any purpose, without discrimination.
   */
  @Event({
    eventName: 'cookieBannerAcceptAllSelected',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  cookieBannerAcceptAllSelected: EventEmitter<void>;

  /**
   * Indicates that the user has made a selection of cookies purpose to accept.
   *
   * Event data is an object with boolean properties to say whether the user accepts or refuses each category of optional cookie.
   *
   * When updating this type please also update the type of previouslyAgreedCookiePreferences.
   */
  @Event({
    eventName: 'cookieBannerSavePreferencesSelected',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  cookieBannerSavePreferencesSelected: EventEmitter<{
    analyticsAndTesting: boolean;
    thirdParty: boolean;
  }>;

  componentDidLoad() {
    this.autoOpenPreferencesIfRequested();
  }

  @Watch('autoOpenPreferences')
  private autoOpenPreferencesIfRequested() {
    if (this.autoOpenPreferences) {
      this.handleChoosePrefencesClick();
    }
  }

  private handleChoosePrefencesClick = () => {
    const elementById = this.el.shadowRoot?.getElementById('cookie-preferences-popup') as HTMLBiggivePopupElement;
    elementById.openFromOutside();
  };

  private handleAcceptSelectedCookies = () => {
    const elementById = this.el.shadowRoot?.getElementById('cookie-preferences-popup') as HTMLBiggivePopupElement;
    elementById.closeFromOutside();

    const analyticsAndTestingRadio = this.el.shadowRoot?.getElementById('a-and-t-on') as HTMLInputElement;
    const thirdPartyRadio = this.el.shadowRoot?.getElementById('third-party-on') as HTMLInputElement;

    this.cookieBannerSavePreferencesSelected.emit({ analyticsAndTesting: analyticsAndTestingRadio.checked, thirdParty: thirdPartyRadio.checked });

    elementById.closeFromOutside();
  };

  /**
   * Emits the same event as if the user had gone into preferences and said no to every option.
   */
  private handleRejectAllClicked = () => {
    this.cookieBannerSavePreferencesSelected.emit({ analyticsAndTesting: false, thirdParty: false });

    const elementById = this.el.shadowRoot?.getElementById('cookie-preferences-popup') as HTMLBiggivePopupElement;
    elementById.closeFromOutside();
  };

  private handleAcceptAllClick = () => {
    // We just emit the event - it will be up to the application, e.g. wp or frontend to listen for the event, record the acceptence, and make
    // and make this component disappear.

    this.cookieBannerAcceptAllSelected.emit();
  };

  render() {
    // Using Partial type to give more flexibility for updates - if the list of preferences available here grows
    // then the app may only pass a partial set of them in for a time. Any preference not passed will be treated as
    // declined.
    const cookiesCurrentlyAllowed: Partial<typeof this.previouslyAgreedCookiePreferences> = this.previouslyAgreedCookiePreferences || {};

    return (
      <div class="cooke-consent-container">
        <biggive-popup id="cookie-preferences-popup" modalClosedCallback={this.preferenceModalClosed.emit}>
          <div class="content">
            <h4 class="space-above-0 space-below-3 text-colour-primary">Manage your cookie preferences</h4>
            <form>
              <div class="radio-group">
                <h5>Essential Cookies</h5>
                <p>These cookies are necessary to ensure our website functions correctly and include required cookies from third parties.</p>
                <input type="radio" name="necassary" id="necassary-off" disabled={true} />
                <label htmlFor="necassary-on">Off</label>

                <input type="radio" name="necassary" id="necassary-on" disabled={true} checked={true} />
                <label htmlFor="necassary-on">On</label>
              </div>

              <div class="radio-group">
                <h5>Analytics & Testing Cookies</h5>
                <p>
                  We use analytics cookies to track activity on our website. For example, the pages you’ve visited, the content you’ve engaged with and the search terms you’ve
                  used. This allows us to personalise and improve our content.
                </p>

                <p>
                  We use testing cookies to collect data on how you interact with website features. These insights allow us to update our website and build features that enhance
                  your user experience.
                </p>
                <input type="radio" name="a-and-t" id="a-and-t-off" checked={!cookiesCurrentlyAllowed.analyticsAndTesting} />
                <label htmlFor="a-and-t-off">Off</label>

                <input type="radio" name="a-and-t" id="a-and-t-on" checked={!!cookiesCurrentlyAllowed.analyticsAndTesting} />
                <label htmlFor="a-and-t-on">On</label>
              </div>

              <div class="radio-group">
                <h5>Third-party Cookies </h5>
                <p>
                  These cookies are used to track activity, which can help to provide a better experience and improve functionality across various applications. For example, our
                  donation experience survey.
                </p>
                <input type="radio" name="third-party" id="third-party-off" checked={!cookiesCurrentlyAllowed.thirdParty} />
                <label htmlFor="third-party-off">Off</label>

                <input type="radio" name="third-party" id="third-party-on" checked={!!cookiesCurrentlyAllowed.thirdParty} />
                <label htmlFor="third-party-on">On</label>
              </div>

              <biggive-button
                space-below="0"
                space-above="2"
                colour-scheme="secondary"
                is-past-campaign="false"
                is-future-campaign="false"
                label="Accept Selected Cookies"
                open-in-new-tab="false"
                full-width="false"
                size="small"
                rounded={false}
                centered={false}
                button-id="accept-selected-button"
                onClick={this.handleAcceptSelectedCookies}
              ></biggive-button>
            </form>

            <p>You can change the above settings for this browser at any time by clicking the privacy settings link in the footer of the page.</p>
          </div>
        </biggive-popup>

        <h2>Our website uses cookies</h2>

        <p>
          We use some essential cookies to make our website work. We'd also like to share data with our analytics platform and use analytics cookies to understand how you use the
          website and make improvements.
        </p>

        <p>
          <a href={this.blogUriPrefix + '/privacy#cookies'} target="_blank">
            Find out more in our Cookies Statement
          </a>
        </p>

        <div class="button-group">
          <biggive-button
            onClick={this.handleAcceptAllClick}
            space-below="0"
            colour-scheme="secondary"
            is-past-campaign="false"
            is-future-campaign="false"
            label="Accept All"
            open-in-new-tab="false"
            full-width="true"
            size="medium"
            rounded={false}
            centered={false}
            button-id="accept-all-button"
          ></biggive-button>

          <biggive-button
            onClick={this.handleRejectAllClicked}
            space-below="0"
            colour-scheme="grey-light"
            is-past-campaign="false"
            is-future-campaign="false"
            label="Essential Cookies Only"
            open-in-new-tab="false"
            full-width="true"
            size="medium"
            rounded={false}
            centered={false}
            button-id="choose-preferences-button"
          ></biggive-button>

          <biggive-button
            onClick={this.handleChoosePrefencesClick}
            space-below="0"
            colour-scheme="grey-light"
            is-past-campaign="false"
            is-future-campaign="false"
            label="Choose Preferences"
            open-in-new-tab="false"
            full-width="true"
            size="medium"
            rounded={false}
            centered={false}
            button-id="choose-preferences-button"
          ></biggive-button>
        </div>
      </div>
    );
  }
}
