import { Component, Element, Prop, h, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'biggive-cookie-banner',
  styleUrl: 'biggive-cookie-banner.scss',
  shadow: true,
})
export class BiggiveCookieBanner {
  @Prop() blogUriPrefix!: string;
  @Element() el: HTMLBiggiveCookieBannerElement;

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
   */
  @Event({
    eventName: 'cookieBannerSavePreferencesSelected',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  cookieBannerSavePreferencesSelected: EventEmitter<{ analyticsAndTesting: Boolean; thirdParty: boolean }>;

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

  private handleAcceptAllClick = () => {
    // We just emit the event - it will be up to the application, e.g. wp or frontend to listen for the event, record the acceptence, and make
    // and make this component disappear.

    this.cookieBannerAcceptAllSelected.emit();
  };

  render() {
    return (
      <div class="cooke-consent-container">
        <biggive-popup id="cookie-preferences-popup">
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
                <input type="radio" name="a-and-t" id="a-and-t-off" checked={true} />
                <label htmlFor="a-and-t-off">Off</label>

                <input type="radio" name="a-and-t" id="a-and-t-on" />
                <label htmlFor="a-and-t-on">On</label>
              </div>

              <div class="radio-group">
                <h5>Third-party Cookies </h5>
                <p>
                  These cookies are used to track activity, which can help to provide a better experience and improve functionality across various applications. For example, our
                  donation experience survey.
                </p>
                <input type="radio" name="third-party" id="third-party-off" checked={true} />
                <label htmlFor="third-party-off">Off</label>

                <input type="radio" name="third-party" id="third-party-on" />
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
          </div>
        </biggive-popup>

        <h2>Our website uses cookies</h2>

        <p>
          We use some essential cookies to make our website work. We'd also like to share data with our analytics platform and use analytics cookies to understand how you use the
          website and make improvements.
        </p>

        <p>
          <a href={this.blogUriPrefix + '/privacy'}>Find out more in our Privacy Statement</a>
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
