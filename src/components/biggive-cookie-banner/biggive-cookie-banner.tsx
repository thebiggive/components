import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-cookie-banner',
  styleUrl: 'biggive-cookie-banner.scss',
  shadow: true,
})
export class BiggiveCookieBanner {
  @Prop() blogUriPrefix: string;

  render() {
    return (
      <div class="cooke-consent-container">
        <h2>Our website uses cookies</h2>

        <p>We use cookies to make our website work. To help us make our marketing and website better, we'd like your consent to use cookies on behalf of third parties too.</p>

        <p>
          <a href={this.blogUriPrefix + '/privacy'}>Find out more in our Privacy Policy</a>
        </p>

        <div class="button-group">
          <biggive-button
            space-below="0"
            colour-scheme="secondary"
            is-past-campaign="false"
            is-future-campaign="false"
            label="Accept All Cookies"
            open-in-new-tab="false"
            full-width="true"
            size="medium"
            rounded={false}
            centered={false}
            button-id="save-details-button"
          ></biggive-button>

          <biggive-button
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
