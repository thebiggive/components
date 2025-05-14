import { newSpecPage } from '@stencil/core/testing';
import { BiggiveFooter } from '../biggive-footer';

describe('biggive-footer', () => {
  it('renders', async () => {
    const year: string = new Date().getFullYear().toString();
    const page = await newSpecPage({
      components: [BiggiveFooter],
      html: `<biggive-footer></biggive-footer>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-footer>
        <mock:shadow-root>
        <div class="footer">
        <div class="row row-logo">
          <div class="logo">
            <img alt="Big Give" src="/assets/images/biggive-triangle-green.svg">
          </div>
        </div>

        <div class="row row-top">

          <nav class="nav nav-primary" aria-labelledby="footer-primary-heading">
            <h5 class="heading" id="footer-primary-heading"><slot name="nav-primary-title"></slot></h5>
          </nav>

          <nav class="nav nav-secondary" aria-labelledby="footer-secondary-heading">
            <h5 class="heading" id="footer-secondary-heading"><slot name="nav-secondary-title"></slot></h5>
          </nav>

          <nav class="nav nav-tertiary" aria-labelledby="footer-tertiary-heading">
            <h5 class="heading" id="footer-tertiary-heading"><slot name="nav-tertiary-title"></slot></h5>
          </nav>


          <div class="button-wrap">
            <biggive-button colour-scheme="white" url="https://biggive.org/charities" label="For charities"></biggive-button>
            <biggive-button colour-scheme="white" url="https://biggive.org/funders" label="For funders"></biggive-button>
          </div>
        </div>

        <div class="row row-bottom">
          <div class="postscript-wrap">
            <img class="fr-logo" src="/assets/images/fundraising-regulator.png" alt="Registered with FUNDRAISING REGULATOR">
            <nav class="nav nav-postscript" aria-label="Legal"></nav>
          </div>
          <div class="social-icon-wrap">
            <slot name="social-icons"></slot>
          </div>
          <p>&copy; 2007 – ${year} The Big Give Trust (1136547) | Company number 07273065  | Dragon Court, 27-29 Macklin Street, London WC2B 5LX, United Kingdom</p>
        </div>

      </div>
        </mock:shadow-root>
      </biggive-footer>
    `);
  });
});
