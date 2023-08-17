import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-cookie-banner',
  styleUrl: 'biggive-cookie-banner.scss',
  shadow: true,
})
export class BiggiveCookieBanner {
  @Prop() blogUriPrefix!: string;
  @Element() el: HTMLBiggiveCookieBannerElement;

  private handleChoosePrefencesClick = () => {
    this.el.shadowRoot.getElementById('cookie-preferences-popup').openFromOutside();
  };

  render() {
    return (
      <div class="cooke-consent-container">

        <biggive-popup id="cookie-preferences-popup">

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
            button-id="save-details-button"
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
            button-id="save-details-button"
          ></biggive-button>
        </div>
      </div>
    );
  }
}
