import { Component, Element, getAssetPath, h, Prop } from '@stencil/core';
import { makeURL } from '../../util/helper-methods';

@Component({
  tag: 'philco-footer',
  styleUrl: 'philco-footer.scss',
  shadow: true,
})
export class PhilcoFooter {
  @Element() host: HTMLPhilcoFooterElement;

  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 5;

  @Prop() philcoUrlPrefix: string = 'https://philco.org.uk/';

  private year: string = new Date().getFullYear().toString();

  render() {
    const HeadingTag = `h${this.headingLevel}`;

    return (
      <footer class="footer">
        <div class="row row-logo">
          <div class="logo">
            <img src={getAssetPath('/assets/images/philco/Philcologo-black.png')} alt="PhilCo" />
          </div>
        </div>

        <div class="row row-top">
          <nav class="nav nav-primary" aria-labelledby="footer-primary-heading">
            <HeadingTag class="heading" id="footer-primary-heading">
              <div slot="nav-primary-title">Contact</div>
            </HeadingTag>
            <ul slot="nav-primary">
              <li>PhilCo@biggive.org</li>
            </ul>
          </nav>

          <nav class="nav nav-secondary" aria-labelledby="footer-secondary-heading-heading">
            <HeadingTag class="heading" id="footer-secondary-heading">
              <div slot="nav-secondary-title">Philco Site</div>
            </HeadingTag>
            <ul slot="nav-secondary">
              <li>
                <a href={makeURL('Philco', this.philcoUrlPrefix, '/')}>Home</a>
              </li>
              <li>
                <a href={makeURL('Philco', this.philcoUrlPrefix, 'why-become-a-philco')}>Why become a Philco</a>
              </li>
              <li>
                <a href={makeURL('Philco', this.philcoUrlPrefix, 'sign-up')}>Sign Up</a>
              </li>
            </ul>
          </nav>

          <nav class="nav nav-tertiary" aria-labelledby="footer-tertiary-heading">
            <HeadingTag class="heading" id="footer-tertiary-heading">
              <div slot="nav-tertiary-title">Guide</div>
            </HeadingTag>
            <ul slot="nav-tertiary">
              <li>
                <a href={makeURL('Philco', this.philcoUrlPrefix, 'download-the-guide')}>Download the guide</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="row row-bottom">
          <div class="postscript-wrap">
            <nav class="nav nav-postscript" aria-label="Legal">
              <ul slot="nav-postscript">
                <li>
                  <a href={makeURL('Philco', this.philcoUrlPrefix, 'terms-and-conditions')}>Terms and Conditions</a>
                </li>
                <li>
                  <a href={makeURL('Philco', this.philcoUrlPrefix, 'privacy')}>Privacy Statement</a>
                </li>
                <li>
                  <a href={makeURL('Philco', this.philcoUrlPrefix, 'privacy#cookies')}>Cookies Statement</a>
                </li>
              </ul>
            </nav>
          </div>
          <p>&copy; 2007 – {this.year} The Big Give Trust (1136547) | Company number 07273065 | Dragon Court, 27-29 Macklin Street, London WC2B 5LX, United Kingdom</p>
        </div>
      </footer>
    );
  }
}
