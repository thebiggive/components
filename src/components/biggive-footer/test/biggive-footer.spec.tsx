import { newSpecPage } from '@stencil/core/testing';
import { BiggiveFooter } from '../biggive-footer';

describe('biggive-footer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveFooter],
      html: `<biggive-footer></biggive-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-footer>
        <mock:shadow-root>
        <footer class="footer">
        <div class="row row-top">

          <nav class="nav nav-primary">
            <h5><slot name="nav-primary-title"></slot></h5>
            <ul></ul>
          </nav>

          <nav class="nav nav-secondary">
            <h5><slot name="nav-secondary-title"></slot></h5>
            <ul></ul>
          </nav>

          <nav class="nav nav-tertiary">
            <h5><slot name="nav-tertiary-title"></slot></h5>
            <ul></ul>
          </nav>


          <div class="button-wrap">
            <biggive-button colour-scheme="white" url="#" label="Donor login"></biggive-button>
            <biggive-button colour-scheme="white" url="#" label="For charities"></biggive-button>
            <biggive-button colour-scheme="white" url="#" label="For funders"></biggive-button>
          </div>
        </div>

        <div class="row row-bottom">
          <div class="social-icon-wrap">
            <biggive-social-icon service="Facebook" url="https://www.facebook.com"></biggive-social-icon>
            <biggive-social-icon service="Twitter" url="https://www.twitter.com"></biggive-social-icon>
            <biggive-social-icon service="LinkedIn" url="https://www.linkedin.com"></biggive-social-icon>
            <biggive-social-icon service="YouTube" url="https://www.youtube.com"></biggive-social-icon>
            <biggive-social-icon service="Instagram" url="https://www.instagram.com"></biggive-social-icon>
          </div>
          <p>&copy; 2007 – 2022 The Big Give Trust (1136547) | Company number 07273065  | Dragon Court, 27-29 Macklin Street, London WC2B 5LX, United Kingdom</p>
        </div>

      </footer>
        </mock:shadow-root>
      </biggive-footer>
    `);
  });
});