import { newSpecPage } from '@stencil/core/testing';
import { BiggiveMainMenu } from '../biggive-main-menu';

describe('biggive-main-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveMainMenu],
      html: `<biggive-main-menu
                 donate-url-prefix="https://donate-here.biggive.org"
                 blog-url-prefix="https://read-the-blog-here.biggive.org"
                 experience-url-prefix="https://have-an-experience-here.biggive.org"
                 is-logged-in="false"
         ></biggive-main-menu>`,
    });

    expect(page.root).toEqualHtml(`
     <biggive-main-menu
     blog-url-prefix="https://read-the-blog-here.biggive.org"
     class="fixed"
     donate-url-prefix="https://donate-here.biggive.org"
     experience-url-prefix="https://have-an-experience-here.biggive.org"
     is-logged-in="false"
     >

      <mock:shadow-root>
        <div class="row row-top">
          <div class="social-icon-wrap">
            <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Facebook" url="https://www.facebook.com/BigGive.org"></biggive-social-icon>
            <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Twitter" url="https://twitter.com/BigGive"></biggive-social-icon>
            <biggive-social-icon background-colour="tertiary" icon-colour="black" service="LinkedIn" url="https://uk.linkedin.com/company/big-give"></biggive-social-icon>
            <biggive-social-icon background-colour="tertiary" icon-colour="black" service="YouTube" url="https://www.youtube.com/channel/UC9_wH1aaTuZurJ-F9R8GDcA"></biggive-social-icon>
            <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Instagram" url="https://www.instagram.com/biggiveorg"></biggive-social-icon>
          </div>
          <div class="nav-secondary">
            <ul>
              <li>
                <a href="https://have-an-experience-here.biggive.org/charities/s/login">
                  Charity Login
                </a>
              </li>
              <li>
                <a href="https://read-the-blog-here.biggive.org/support">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <nav aria-label="Main Menu" role="navigation">
          <div class="navbar">
            <div class="logo">
              <a aria-label="Home" href="https://donate-here.biggive.org/">
                <svg version="1.1" viewBox="0 0 140.9 30" x="0px" y="0px">
                  <path d="M51.9,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3C53.6,0,55,1.4,55,3S53.6,6.1,51.9,6.1z M49.3,23.8h5V7.7h-5V23.8z M68.5,7.7v1 c-0.8-0.7-2.3-1.4-4.1-1.4c-4.5,0-8.2,3.2-8.2,7.9c0,4.7,3.7,7.9,8.2,7.9c1.8,0,3.4-0.5,4.1-1.4v0.9c0,2.1-1.9,3.1-4.4,3.1 c-2.2,0-4-0.5-5.8-1.4V29c2.1,0.7,4.4,1,6,1c5,0,9.2-2,9.2-7.3v-15L68.5,7.7L68.5,7.7z M68.5,17.2c-0.7,1-1.9,1.4-3.2,1.4 c-2.1,0-3.8-1.2-3.8-3.4c0-2.2,1.7-3.4,3.8-3.4c1.3,0,2.5,0.6,3.2,1.5V17.2z M88.1,24.2c4,0,6.4-0.7,8.5-2V10h-11v4.7h5.8v4.1 c-0.8,0.2-1.8,0.4-3.2,0.4c-4.9,0-7.3-3.2-7.3-6.8c0-3.7,2.8-6.8,8-6.8c2.2,0,4.3,0.6,5.8,1.4V1.7c-1.5-0.6-3.4-1.1-6.1-1.1 c-7.6,0-13,5.3-13,11.8C75.5,19.1,80.4,24.2,88.1,24.2z M101.4,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3c1.8,0,3.2,1.4,3.2,3 S103.1,6.1,101.4,6.1z M98.8,23.8h5V7.7h-5V23.8z M115.1,15l-4.3-7.2H105l10.1,16.4l10.1-16.4h-5.8L115.1,15z M129.3,16.9h11.6 c0.1-7-4.2-9.5-8.4-9.5c-4.5,0-8.5,2.6-8.6,8.4c0,5.6,4.1,8.4,9.1,8.4c2.2,0,4.4-0.3,6.4-1.3v-4.4c-2.5,1.4-4.1,1.4-5.6,1.4 C131.7,19.8,129.5,19.2,129.3,16.9z M132.5,11.1c1.5,0,2.8,0.7,3,2.7h-6.2C129.6,11.9,131,11.1,132.5,11.1z M43.5,11.4 c1.2-1,1.8-2.4,1.8-4c0-3.1-3-6.3-7.3-6.3h-8v22.8h10.4c4.1,0,7.2-3,7.2-6.8C47.5,14.8,46.5,12.3,43.5,11.4z M35.2,5.7h2.4 C39,5.7,40,6.8,40,8c0,1.2-1,2.2-2.5,2.2h-2.4V5.7z M39.9,19.2h-4.7v-4.6h4.7c1.4,0,2.5,1,2.5,2.3C42.4,18.1,41.3,19.2,39.9,19.2z"></path>
                  <path d="M13.5,1l13.5,23H0L13.5,1z"></path>
                </svg>
              </a>
            </div>
            <biggive-misc-icon background-colour="white" class="bx bx-menu" icon="MenuOpen" icon-colour="black"></biggive-misc-icon>
            <div class="nav-links">
              <div class="sidebar-logo">
                <a aria-label="Home" href="https://donate-here.biggive.org/">
                  <svg id="mobileLogo" version="1.1" viewBox="0 0 140.9 30" x="0px" y="0px">
                    <path d="M51.9,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3C53.6,0,55,1.4,55,3S53.6,6.1,51.9,6.1z M49.3,23.8h5V7.7h-5V23.8z M68.5,7.7v1 c-0.8-0.7-2.3-1.4-4.1-1.4c-4.5,0-8.2,3.2-8.2,7.9c0,4.7,3.7,7.9,8.2,7.9c1.8,0,3.4-0.5,4.1-1.4v0.9c0,2.1-1.9,3.1-4.4,3.1 c-2.2,0-4-0.5-5.8-1.4V29c2.1,0.7,4.4,1,6,1c5,0,9.2-2,9.2-7.3v-15L68.5,7.7L68.5,7.7z M68.5,17.2c-0.7,1-1.9,1.4-3.2,1.4 c-2.1,0-3.8-1.2-3.8-3.4c0-2.2,1.7-3.4,3.8-3.4c1.3,0,2.5,0.6,3.2,1.5V17.2z M88.1,24.2c4,0,6.4-0.7,8.5-2V10h-11v4.7h5.8v4.1 c-0.8,0.2-1.8,0.4-3.2,0.4c-4.9,0-7.3-3.2-7.3-6.8c0-3.7,2.8-6.8,8-6.8c2.2,0,4.3,0.6,5.8,1.4V1.7c-1.5-0.6-3.4-1.1-6.1-1.1 c-7.6,0-13,5.3-13,11.8C75.5,19.1,80.4,24.2,88.1,24.2z M101.4,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3c1.8,0,3.2,1.4,3.2,3 S103.1,6.1,101.4,6.1z M98.8,23.8h5V7.7h-5V23.8z M115.1,15l-4.3-7.2H105l10.1,16.4l10.1-16.4h-5.8L115.1,15z M129.3,16.9h11.6 c0.1-7-4.2-9.5-8.4-9.5c-4.5,0-8.5,2.6-8.6,8.4c0,5.6,4.1,8.4,9.1,8.4c2.2,0,4.4-0.3,6.4-1.3v-4.4c-2.5,1.4-4.1,1.4-5.6,1.4 C131.7,19.8,129.5,19.2,129.3,16.9z M132.5,11.1c1.5,0,2.8,0.7,3,2.7h-6.2C129.6,11.9,131,11.1,132.5,11.1z M43.5,11.4 c1.2-1,1.8-2.4,1.8-4c0-3.1-3-6.3-7.3-6.3h-8v22.8h10.4c4.1,0,7.2-3,7.2-6.8C47.5,14.8,46.5,12.3,43.5,11.4z M35.2,5.7h2.4 C39,5.7,40,6.8,40,8c0,1.2-1,2.2-2.5,2.2h-2.4V5.7z M39.9,19.2h-4.7v-4.6h4.7c1.4,0,2.5,1,2.5,2.3C42.4,18.1,41.3,19.2,39.9,19.2z"></path>
                    <path d="M13.5,1l13.5,23H0L13.5,1z"></path>
                  </svg>
                </a>
                <biggive-misc-icon background-colour="transparent" class="bx bx-x" icon="MenuClose" icon-colour="black"></biggive-misc-icon>
              </div>
              <div id="nav-primary">
                <ul class="links" slot="nav-primary">
                  <li>
                    <a href="https://donate-here.biggive.org/explore">
                      Explore Campaigns
                    </a>
                  </li>
                  <li>
                    <a href="https://read-the-blog-here.biggive.org/charities">
                      For Charities
                    </a>
                  </li>
                  <li>
                    <a href="https://read-the-blog-here.biggive.org/funders">
                      For Funders
                    </a>
                  </li>
                  <li>
                    <a>
                      Match Funding
                      <biggive-misc-icon background-colour="white" class="arrow bx bxs-chevron-down sub-menu-arrow" icon="CaretRight" icon-colour="black"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/match-funding-explained">
                          Match Funding Explained
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/impact">
                          Match Funding Impact
                        </a>
                      </li>
                      <li class="more">
                        <a>
                          Match Funding Opportunities
                          <biggive-misc-icon background-colour="white" class="arrow bx bxs-chevron-down sub-sub-menu-arrow" icon="CaretRight" icon-colour="black"></biggive-misc-icon>
                        </a>
                        <ul class="sub-sub-menu">
                          <li>
                            <a class="icon-christmas" href="https://read-the-blog-here.biggive.org/christmas-challenge">
                              Christmas Challenge
                            </a>
                          </li>
                          <li>
                            <a class="icon-children" href="https://read-the-blog-here.biggive.org/champions-for-children">
                              Champions for Children
                            </a>
                          </li>
                          <li>
                            <a class="icon-green-match" href="https://read-the-blog-here.biggive.org/green-match-fund">
                              Green Match Fund
                            </a>
                          </li>
                          <li>
                            <a class="icon-women-girls" href="https://read-the-blog-here.biggive.org/women-girls-match-fund">
                              Women &amp; Girls Match Fund
                            </a>
                          </li>
                          <li>
                            <a class="icon-mental-health" href="https://read-the-blog-here.biggive.org/kind2mind/">
                              Kind²Mind
                            </a>
                          </li>
                          <li>
                            <a class="icon-arts-impact" href="https://read-the-blog-here.biggive.org/artsforimpact/">
                              Arts for Impact
                            </a>
                          </li>
                          <li>
                            <a class="icon-anchor-match" href="https://read-the-blog-here.biggive.org/anchor-match-fund/">
                              Anchor Match Fund
                            </a>
                          </li>
                          <li>
                            <a class="icon-emergency" href="https://read-the-blog-here.biggive.org/emergency-campaigns/">
                              Emergency Match Fund
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/run-your-own-campaign/)">
                          Run your match funding campaign
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      About Us
                      <biggive-misc-icon background-colour="white" class="arrow bx bxs-chevron-down sub-menu-arrow" icon="CaretRight" icon-colour="black"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/our-people">
                          Our People
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/our-story">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/donation-funds">
                          Donate by Bank Transfer
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/our-fees">
                          Our Fees
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/faqs">
                          FAQs
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a>
                      Resources
                      <biggive-misc-icon background-colour="white" class="arrow bx bxs-chevron-down sub-menu-arrow" icon="CaretRight" icon-colour="black"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/case-studies">
                          Case Studies
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/blog">
                          Blog
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/reports-insights">
                          Reports &amp; Insights
                        </a>
                      </li>
                      <li>
                        <a href="https://read-the-blog-here.biggive.org/press">
                          Press
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div class="mobile-only">
                  <ul>
                    <li>
                      <a href="https://have-an-experience-here.biggive.org/charities/s/login">
                        Charity Login
                      </a>
                    </li>
                    <li>
                      <a href="https://read-the-blog-here.biggive.org/support">
                        Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="mobile-only mobile-social-icon-wrap">
                <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Facebook" url="https://www.facebook.com/BigGive.org"></biggive-social-icon>
                <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Twitter" url="https://twitter.com/BigGive"></biggive-social-icon>
                <biggive-social-icon background-colour="tertiary" icon-colour="black" service="LinkedIn" url="https://uk.linkedin.com/company/big-give"></biggive-social-icon>
                <biggive-social-icon background-colour="tertiary" icon-colour="black" service="YouTube" url="https://www.youtube.com/channel/UC9_wH1aaTuZurJ-F9R8GDcA"></biggive-social-icon>
                <biggive-social-icon background-colour="tertiary" icon-colour="black" service="Instagram" url="https://www.instagram.com/biggiveorg"></biggive-social-icon>
              </div>
            </div>
          </div>
        </nav>
      </mock:shadow-root>
    </biggive-main-menu>
    `);
  });
});
