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
   * Event data contains an array of the type of cookie purposes the user consents to. Currently,
   * it is only possible to consent to marketing cookies, so it will simply be ['marketing'] or [] but
   * in future other types may be possible.
   */
  @Event({
    eventName: 'cookieBannerSavePreferencesSelected',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  cookieBannerSavePreferencesSelected: EventEmitter<Array<'marketing'>>;

  private handleChoosePrefencesClick = () => {
    const elementById = this.el.shadowRoot?.getElementById('cookie-preferences-popup') as HTMLBiggivePopupElement;
    elementById.openFromOutside();
  };

  private handleSavePreferencesClick = () => {
    const elementById = this.el.shadowRoot?.getElementById('cookie-preferences-popup') as HTMLBiggivePopupElement;
    elementById.closeFromOutside();

    const marketingRadio = this.el.shadowRoot?.getElementById('marketing-on') as HTMLInputElement;
    const marketingCookiesAccepted = marketingRadio.checked;

    this.cookieBannerSavePreferencesSelected.emit(marketingCookiesAccepted ? ['marketing'] : []);

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
          <h4 class="space-above-0 space-below-3 text-colour-primary">Manage your cookie preferences</h4>
          <form>
            <h5>Essential (always required)</h5>
            <input type="radio" name="necassary" id="necassary-off" disabled={true} />
            <label htmlFor="necassary-on">Off</label>

            <input type="radio" name="necassary" id="necassary-on" disabled={true} checked={true} />
            <label htmlFor="necassary-on">On</label>

            <h5>Marketing</h5>
            <input type="radio" name="marketing" id="marketing-off" checked={true} />
            <label htmlFor="marketing-off">Off</label>

            <input type="radio" name="marketing" id="marketing-on" />
            <label htmlFor="marketing-on">On</label>

            <hr />

            <biggive-button
              space-below="0"
              space-above="2"
              colour-scheme="secondary"
              is-past-campaign="false"
              is-future-campaign="false"
              label="Save preferences"
              open-in-new-tab="false"
              full-width="false"
              size="small"
              rounded={false}
              centered={false}
              button-id="save-preferences-button"
              onClick={this.handleSavePreferencesClick}
            ></biggive-button>
          </form>
        </biggive-popup>

        <h2>Our website uses cookies</h2>

        <p>
          We use some essential cookies to make our website work. We'd also like to share data with our analytics platform and use analytics cookies to understand how you use the
          website and make improvements.
        </p>

        <p>
          <a href={this.blogUriPrefix + '/privacy'}>Find out more in our Privacy Policy</a>
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
