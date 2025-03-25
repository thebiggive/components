import { Component, Element, getAssetPath, h, Prop } from "@stencil/core";
import { makeURL } from "../../util/helper-methods";

@Component({
  tag: 'philco-footer',
  styleUrl: 'philco-footer.scss',
  shadow: true,
})
export class PhilcoFooter {
  @Element() host: HTMLPhilcoFooterElement;

  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 5;

  /**
   * URL prefixes vary by environment, and components library is not best placed to know what they are, so we
   * take them as props
   */
  @Prop() donateUrlPrefix: string = 'http://';
  @Prop() blogUrlPrefix: string | undefined = 'http://';
  @Prop() experienceUrlPrefix: string | undefined = 'http://';
  @Prop() smallCharityWeekEnabled = false;

  private year: string = new Date().getFullYear().toString();

  render() {
    const HeadingTag = `h${this.headingLevel}`;

    return (
      <footer class="footer">
        <div class="row row-top">
          <nav class="nav nav-primary" aria-labelledby="footer-primary-heading">
            <HeadingTag class="heading" id="footer-primary-heading">
              <div slot="nav-primary-title">CONTACT</div>
            </HeadingTag>
            <ul slot="nav-primary">
              <li>PhilCo@biggive.org</li>
            </ul>
          </nav>

          <nav class="nav nav-secondary" aria-labelledby="footer-secondary-heading-heading">
            <HeadingTag class="heading" id="footer-secondary-heading">
              <div slot="nav-secondary-title">PHILCO SITE</div>
            </HeadingTag>
            <ul slot="nav-secondary">
              <li>
                <a href={makeURL('Blog', this.blogUrlPrefix, 'case-studies')}>Home</a>
              </li>
              <li>
                <a href={makeURL('Blog', this.blogUrlPrefix, 'blog')}>Why become a Philco</a>
              </li>
              <li>
                <a href={makeURL('Blog', this.blogUrlPrefix, 'reports-insights')}>Sign Up</a>
              </li>
            </ul>
          </nav>

          <nav class="nav nav-tertiary" aria-labelledby="footer-tertiary-heading">
            <HeadingTag class="heading" id="footer-tertiary-heading">
              <div slot="nav-tertiary-title">GUIDE</div>
            </HeadingTag>
            <ul slot="nav-tertiary">
              <li>
                <a href={makeURL('Blog', this.blogUrlPrefix, 'support')}>Download the guide</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="row row-bottom">
          <div class="postscript-wrap">
            <img class="fr-logo" src={getAssetPath('/assets/images/fundraising-regulator.png')}
                 alt="Registered with FUNDRAISING REGULATOR" />

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
          <p>&copy; 2007 – {this.year} The Big Give Trust (1136547) | Company number 07273065 | Dragon Court, 27-29
            Macklin Street, London WC2B 5LX, United Kingdom</p>
        </div>
      </footer>
    );
  }
}
