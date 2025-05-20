import { Component, Element, getAssetPath, h, Prop } from '@stencil/core';
import { makeURL } from '../../util/helper-methods';

/**
 * Should be contained in a `<footer/>` or similar so that the page has appropriate
 * landmarks.
 */
@Component({
  tag: 'biggive-footer',
  styleUrl: 'biggive-footer.scss',
  shadow: true,
})
export class BiggiveFooter {
  @Element() host: HTMLBiggiveFooterElement;

  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 5;

  /**
   * URL prefixes vary by environment, and components library is not best placed to know what they are, so we
   * take them as props
   */
  @Prop() donateUrlPrefix: string;
  @Prop() blogUrlPrefix: string | undefined;
  @Prop() experienceUrlPrefix: string | undefined;
  @Prop() smallCharityWeekEnabled = false;

  private year: string = new Date().getFullYear().toString();

  /**
   * Conditionally render footer menu:
   * hard-coded (preset) when set to true, dynamic (slot-based) when set to false
   */
  @Prop() usePresetFooter = false;

  private logoRow = (
    <div class="row row-logo">
      <div class="logo">
        <img src={getAssetPath('/assets/images/biggive-triangle-green.svg')} alt="Big Give" />
      </div>
    </div>
  );

  private appendMenu(menuName: string) {
    var node = this.host.querySelector(`[slot="${menuName}"]`);
    if (node !== null) {
      this.host!.shadowRoot!.querySelector(`.${menuName}`)!.appendChild(node);
    }
  }

  componentDidRender() {
    if (!this.usePresetFooter) {
      this.appendMenu('nav-primary');
      this.appendMenu('nav-secondary');
      this.appendMenu('nav-tertiary');
      this.appendMenu('nav-postscript');
    }
  }

  render() {
    const HeadingTag = `h${this.headingLevel}`;
    const slotBasedFooter = () => {
      return (
        <div class="footer">
          {this.logoRow}
          <div class="row row-top">
            <nav class="nav nav-primary" aria-labelledby="footer-primary-heading">
              <HeadingTag class="heading" id="footer-primary-heading">
                <slot name="nav-primary-title"></slot>
              </HeadingTag>
            </nav>

            <nav class="nav nav-secondary" aria-labelledby="footer-secondary-heading">
              <HeadingTag class="heading" id="footer-secondary-heading">
                <slot name="nav-secondary-title"></slot>
              </HeadingTag>
            </nav>

            <nav class="nav nav-tertiary" aria-labelledby="footer-tertiary-heading">
              <HeadingTag class="heading" id="footer-tertiary-heading">
                <slot name="nav-tertiary-title"></slot>
              </HeadingTag>
            </nav>

            <div class="button-wrap">
              <biggive-button colour-scheme="white" url="https://biggive.org/charities" label="For charities"></biggive-button>
              <biggive-button colour-scheme="white" url="https://biggive.org/funders" label="For funders"></biggive-button>
            </div>
          </div>

          <div class="row row-bottom">
            <div class="postscript-wrap">
              <a href="https://www.fundraisingregulator.org.uk/validate?registrant=The+Big+Give+Trust " class="fr-digital-badge">
                <img
                  src="https://www.fundraisingregulator.org.uk/fr-badge/a9b06226-3edc-4460-b57f-aeedc3c1dea4/en/white"
                  width="200"
                  alt="Fundraising Regulator badge with validation link"
                  loading="lazy"
                />
              </a>
              <nav class="nav nav-postscript" aria-label="Legal"></nav>
            </div>

            <div class="social-icon-wrap">
              <slot name="social-icons"></slot>
            </div>
            <p>&copy; 2007 – {this.year} The Big Give Trust (1136547) | Company number 07273065 | Dragon Court, 27-29 Macklin Street, London WC2B 5LX, United Kingdom</p>
          </div>
        </div>
      );
    };

    const presetFooter = () => {
      return (
        <div class="footer">
          {this.logoRow}
          <div class="row row-top">
            <nav class="nav nav-primary" aria-labelledby="footer-primary-heading">
              <HeadingTag class="heading" id="footer-primary-heading">
                <div slot="nav-primary-title">Match Funding Opportunities</div>
              </HeadingTag>
              <ul slot="nav-primary">
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'christmas-challenge')} class="icon-christmas">
                    Christmas Challenge
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'green-match-fund')} class="icon-green">
                    Green Match Fund
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'champions-for-children')} class="icon-children">
                    Champions for Children
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'women-girls-match-fund')} class="icon-women-girls">
                    Women and Girls Match Fund
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'kind2mind/')} class="icon-mental-health">
                    Kind²Mind
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'artsforimpact')} class="icon-arts">
                    Arts for Impact
                  </a>
                </li>
                {this.smallCharityWeekEnabled && (
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'small-charity-week')} class="icon-small-charity">
                      Small Charity Week
                    </a>
                  </li>
                )}
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'emergency-campaigns/')} class="icon-emergency">
                    Emergency Match Fund
                  </a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'run-your-own-campaign/)')}>Run your own campaign</a>
                </li>
              </ul>
            </nav>

            <nav class="nav nav-secondary" aria-labelledby="footer-secondary-heading">
              <HeadingTag class="heading" id="footer-secondary-heading">
                <div slot="nav-secondary-title">Resources</div>
              </HeadingTag>
              <ul slot="nav-secondary">
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'case-studies')}>Case Studies</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'blog')}>Blog</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'reports-insights')}>Reports &amp; Insights</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'press')}>Press</a>
                </li>
              </ul>
            </nav>

            <nav class="nav nav-tertiary" aria-labelledby="footer-tertiary-heading">
              <HeadingTag class="heading" id="footer-tertiary-heading">
                <div slot="nav-tertiary-title">About</div>
              </HeadingTag>
              <ul slot="nav-tertiary">
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'support')}>Support</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'our-story')}>Our Story</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'our-people')}>Our People</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'donation-funds')}>Donate by Bank Transfer</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'our-fees')}>Our Fees</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'careers')}>Careers</a>
                </li>
                <li>
                  <a href={makeURL('Blog', this.blogUrlPrefix, 'faqs')}>FAQs</a>
                </li>
              </ul>
            </nav>

            <div class="button-wrap">
              <biggive-button colour-scheme="white" url={makeURL('Blog', this.blogUrlPrefix, 'charities')} label="For charities"></biggive-button>
              <biggive-button colour-scheme="white" url={makeURL('Blog', this.blogUrlPrefix, 'funders')} label="For funders"></biggive-button>
            </div>
          </div>

          <div class="row row-bottom">
            <div class="postscript-wrap">
              <a href="https://www.fundraisingregulator.org.uk/validate?registrant=The+Big+Give+Trust " class="fr-digital-badge">
                <img
                  src="https://www.fundraisingregulator.org.uk/fr-badge/a9b06226-3edc-4460-b57f-aeedc3c1dea4/en/white"
                  width="200"
                  alt="Fundraising Regulator badge with validation link"
                  loading="lazy"
                />
              </a>
              <nav class="nav nav-postscript" aria-label="Legal">
                <ul slot="nav-postscript">
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'terms-and-conditions')}>Terms and Conditions</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'privacy')}>Privacy Statement</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'privacy#cookies')}>Cookies Statement</a>
                  </li>
                  <li>
                    <a href={makeURL('Donate', this.donateUrlPrefix, 'cookie-preferences')}>Cookies Preference Centre</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div class="social-icon-wrap">
              <div slot="social-icons">
                <biggive-social-icon
                  service="Facebook"
                  url="https://www.facebook.com/BigGive.org"
                  background-colour="tertiary"
                  icon-colour="black"
                  wide={true}
                ></biggive-social-icon>
                <biggive-social-icon service="Twitter" url="https://x.com/BigGive" background-colour="tertiary" icon-colour="black" wide={true}></biggive-social-icon>
                <biggive-social-icon
                  service="LinkedIn"
                  url="https://uk.linkedin.com/company/big-give"
                  background-colour="tertiary"
                  icon-colour="black"
                  wide={true}
                ></biggive-social-icon>
                <biggive-social-icon
                  service="YouTube"
                  url="https://www.youtube.com/channel/UC9_wH1aaTuZurJ-F9R8GDcA"
                  background-colour="tertiary"
                  icon-colour="black"
                  wide={true}
                ></biggive-social-icon>
                <biggive-social-icon service="Instagram" url="https://www.instagram.com/biggiveorg" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
              </div>
            </div>
            <p>&copy; 2007 – {this.year} The Big Give Trust (1136547) | Company number 07273065 | Dragon Court, 27-29 Macklin Street, London WC2B 5LX, United Kingdom</p>
          </div>
        </div>
      );
    };

    return this.usePresetFooter ? presetFooter() : slotBasedFooter();
  }
}
