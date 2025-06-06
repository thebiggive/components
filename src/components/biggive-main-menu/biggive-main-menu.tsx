import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';
import { makeURL } from '../../util/helper-methods';

@Component({
  tag: 'biggive-main-menu',
  styleUrl: 'biggive-main-menu.scss',
  shadow: true,
})
export class BiggiveMainMenu {
  @Element() host: HTMLBiggiveMainMenuElement;

  // URL prefixes vary by environment, and components library is not best placed to know what they are, so we
  // take them as props. But somehow on first render the prop passed in doesn't seem to be used, so the defaults
  // below are the values currently used in our prod site. They should be replaced by other values in other
  // environments.
  @Prop() blogUrlPrefix: string = 'https://biggive.org';

  @Prop() donateUrlPrefix: string = 'https://donate.biggive.org';

  @Prop() experienceUrlPrefix: string = 'https://community.biggive.org';

  @Prop() smallCharityWeekEnabled = false;

  /**
   * We don't want to make the ?noredirect version proliferate too much so err on not
   * including this. We also don't really want every single page to have to get highlight cards
   * to set this property. So for now, typically only meta-campaign bothers to get the correct value
   * to set this true if appropriate. That's the page which is the destination of the redirect so is
   * arguably the only place where it's essential that the menu lets you go to the 'normal' home page.
   */
  @Prop() someCampaignHasHomePageRedirect = false;

  /**
   * Whether the current user is logged in (i.e. is assumed to have a valid JWT). They get links to some
   * extra content if they are.
   */
  @Prop() isLoggedIn = false;

  @Event({
    eventName: 'logoutClicked',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  logoutClicked: EventEmitter<void>;

  @Method()
  async closeMobileMenuFromOutside() {
    const mobileMenu = this.host.shadowRoot!.querySelector<HTMLElement>('.nav-links');
    mobileMenu!.style.left = '-100%';
  }

  private openMobileMenu = () => {
    const mobileMenu = this.host.shadowRoot!.querySelector<HTMLElement>('.nav-links');
    mobileMenu!.style.left = '0';
  };

  private logOut = () => {
    this.logoutClicked.emit();
  };

  private closeMobileMenu = () => {
    const mobileMenu = this.host.shadowRoot!.querySelector<HTMLElement>('.nav-links');
    mobileMenu!.style.left = '-100%';
  };

  private noNav(event: Event) {
    event.preventDefault();
  }

  componentDidLoad() {
    this.host.classList.add('fixed');

    const subMenuElements = this.host.shadowRoot!.querySelectorAll<HTMLElement>('.sub-menu');
    if (subMenuElements.length === 0) {
      throw new Error('Missing subMenuElements');
    }

    /**
     * Closes all the sub-menus except the one exception.
     */
    const closeAllSubMenus = ({ except }: { except: HTMLAnchorElement }) => {
      subMenuElements.forEach(subMenuElement => {
        const link = subMenuElement.parentElement?.querySelector('a');

        if (link === except) {
          return;
        }

        link?.classList.remove('transform-90');
        subMenuElement.classList.remove('display-sub-menu');
      });
    };

    subMenuElements.forEach(subMenuElement => {
      // the subMenuLink is a sibling element to the actual sub-menu
      const subMenuLink = subMenuElement.parentElement?.querySelector('a');

      subMenuLink!.onclick = () => {
        const subMenuArrow = subMenuLink!.querySelector('.sub-menu-arrow');
        closeAllSubMenus({ except: subMenuLink! });
        subMenuArrow!.classList.toggle('transform-90');
        subMenuElement.classList.toggle('display-sub-menu');
      };
    });

    const subSubMenuElements = this.host.shadowRoot!.querySelectorAll<HTMLElement>('.sub-sub-menu');

    if (subSubMenuElements.length === 0) {
      throw new Error('Missing subSubMenuElements');
    }

    subSubMenuElements.forEach(subSubMenuElement => {
      // the subSubMenuLink is a sibling element to the actual sub-sub-menu
      const subSubMenuLink = subSubMenuElement!.parentElement!.querySelector('a');

      subSubMenuLink!.onclick = () => {
        const subMenuArrow = subSubMenuLink!.querySelector('.sub-sub-menu-arrow');
        subMenuArrow!.classList.toggle('transform-90');
        subSubMenuElement.classList.toggle('display-sub-menu');
      };
    });
  }

  private getSecondaryNavLinks(layout: 'desktop' | 'mobile') {
    const chevronIconColour = layout === 'desktop' ? 'white' : 'black';
    const chevronBackgroundColour = layout === 'desktop' ? 'blue' : 'white';
    return (
      <ul>
        {!this.isLoggedIn && (
          <li>
            <a href={makeURL('Donate', this.donateUrlPrefix, 'login')}>Donor Login</a>
          </li>
        )}
        {this.isLoggedIn && (
          <li>
            <a onClick={this.noNav}>
              My Account
              <biggive-misc-icon
                class="bx bxs-chevron-down sub-menu-arrow arrow"
                background-colour={chevronBackgroundColour}
                icon-colour={chevronIconColour}
                icon="CaretRight"
              ></biggive-misc-icon>
            </a>
            <ul class="sub-menu sub-menu-main" id="my-account-sub-menu">
              <li>
                <a href={makeURL('Donate', this.donateUrlPrefix, 'my-account')}>Your details</a>
              </li>
              <li>
                <a href="javascript:void(0)" onClick={this.logOut}>
                  Log out
                </a>
              </li>
            </ul>
          </li>
        )}
        <li>
          <a href={makeURL('Experience', this.experienceUrlPrefix, 'charities/s/login')}>Charity Login</a>
        </li>
        <li>
          <a href={makeURL('Blog', this.blogUrlPrefix, 'support')}>Support</a>
        </li>
      </ul>
    );
  }

  render() {
    const homePageLink = this.someCampaignHasHomePageRedirect ? '/?noredirect' : '/';

    // calling same function twice because using same JSX node twice is not allowed
    // see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes
    const secondaryNavLinksForDesktop = this.getSecondaryNavLinks('desktop');
    const secondaryNavLinksForMobile = this.getSecondaryNavLinks('mobile');

    return (
      <Host>
        <div class="row row-top">
          <div class="social-icon-wrap">
            <biggive-social-icon service="Facebook" url="https://www.facebook.com/BigGive.org" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
            <biggive-social-icon service="Twitter" url="https://x.com/BigGive" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
            <biggive-social-icon service="LinkedIn" url="https://uk.linkedin.com/company/big-give" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
            <biggive-social-icon
              service="YouTube"
              url="https://www.youtube.com/channel/UC9_wH1aaTuZurJ-F9R8GDcA"
              background-colour="tertiary"
              icon-colour="black"
            ></biggive-social-icon>
            <biggive-social-icon service="Instagram" url="https://www.instagram.com/biggiveorg" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
          </div>
          <div class="nav-secondary">{secondaryNavLinksForDesktop}</div>
        </div>
        <nav role="navigation" aria-label="Main Menu">
          <div class="navbar">
            <div class="logo">
              <a href={this.donateUrlPrefix + homePageLink} aria-label="Home">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 140.9 30">
                  <path d="M51.9,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3C53.6,0,55,1.4,55,3S53.6,6.1,51.9,6.1z M49.3,23.8h5V7.7h-5V23.8z M68.5,7.7v1 c-0.8-0.7-2.3-1.4-4.1-1.4c-4.5,0-8.2,3.2-8.2,7.9c0,4.7,3.7,7.9,8.2,7.9c1.8,0,3.4-0.5,4.1-1.4v0.9c0,2.1-1.9,3.1-4.4,3.1 c-2.2,0-4-0.5-5.8-1.4V29c2.1,0.7,4.4,1,6,1c5,0,9.2-2,9.2-7.3v-15L68.5,7.7L68.5,7.7z M68.5,17.2c-0.7,1-1.9,1.4-3.2,1.4 c-2.1,0-3.8-1.2-3.8-3.4c0-2.2,1.7-3.4,3.8-3.4c1.3,0,2.5,0.6,3.2,1.5V17.2z M88.1,24.2c4,0,6.4-0.7,8.5-2V10h-11v4.7h5.8v4.1 c-0.8,0.2-1.8,0.4-3.2,0.4c-4.9,0-7.3-3.2-7.3-6.8c0-3.7,2.8-6.8,8-6.8c2.2,0,4.3,0.6,5.8,1.4V1.7c-1.5-0.6-3.4-1.1-6.1-1.1 c-7.6,0-13,5.3-13,11.8C75.5,19.1,80.4,24.2,88.1,24.2z M101.4,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3c1.8,0,3.2,1.4,3.2,3 S103.1,6.1,101.4,6.1z M98.8,23.8h5V7.7h-5V23.8z M115.1,15l-4.3-7.2H105l10.1,16.4l10.1-16.4h-5.8L115.1,15z M129.3,16.9h11.6 c0.1-7-4.2-9.5-8.4-9.5c-4.5,0-8.5,2.6-8.6,8.4c0,5.6,4.1,8.4,9.1,8.4c2.2,0,4.4-0.3,6.4-1.3v-4.4c-2.5,1.4-4.1,1.4-5.6,1.4 C131.7,19.8,129.5,19.2,129.3,16.9z M132.5,11.1c1.5,0,2.8,0.7,3,2.7h-6.2C129.6,11.9,131,11.1,132.5,11.1z M43.5,11.4 c1.2-1,1.8-2.4,1.8-4c0-3.1-3-6.3-7.3-6.3h-8v22.8h10.4c4.1,0,7.2-3,7.2-6.8C47.5,14.8,46.5,12.3,43.5,11.4z M35.2,5.7h2.4 C39,5.7,40,6.8,40,8c0,1.2-1,2.2-2.5,2.2h-2.4V5.7z M39.9,19.2h-4.7v-4.6h4.7c1.4,0,2.5,1,2.5,2.3C42.4,18.1,41.3,19.2,39.9,19.2z" />
                  <path d="M13.5,1l13.5,23H0L13.5,1z" />
                </svg>
              </a>
            </div>
            <biggive-misc-icon class="bx bx-menu" background-colour="white" icon-colour="black" icon="MenuOpen" onClick={this.openMobileMenu}></biggive-misc-icon>
            <div class="nav-links">
              <div class="sidebar-logo">
                <a href={this.donateUrlPrefix + homePageLink} aria-label="Home">
                  <svg version="1.1" x="0px" y="0px" viewBox="0 0 140.9 30" id="mobileLogo">
                    <path d="M51.9,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3C53.6,0,55,1.4,55,3S53.6,6.1,51.9,6.1z M49.3,23.8h5V7.7h-5V23.8z M68.5,7.7v1 c-0.8-0.7-2.3-1.4-4.1-1.4c-4.5,0-8.2,3.2-8.2,7.9c0,4.7,3.7,7.9,8.2,7.9c1.8,0,3.4-0.5,4.1-1.4v0.9c0,2.1-1.9,3.1-4.4,3.1 c-2.2,0-4-0.5-5.8-1.4V29c2.1,0.7,4.4,1,6,1c5,0,9.2-2,9.2-7.3v-15L68.5,7.7L68.5,7.7z M68.5,17.2c-0.7,1-1.9,1.4-3.2,1.4 c-2.1,0-3.8-1.2-3.8-3.4c0-2.2,1.7-3.4,3.8-3.4c1.3,0,2.5,0.6,3.2,1.5V17.2z M88.1,24.2c4,0,6.4-0.7,8.5-2V10h-11v4.7h5.8v4.1 c-0.8,0.2-1.8,0.4-3.2,0.4c-4.9,0-7.3-3.2-7.3-6.8c0-3.7,2.8-6.8,8-6.8c2.2,0,4.3,0.6,5.8,1.4V1.7c-1.5-0.6-3.4-1.1-6.1-1.1 c-7.6,0-13,5.3-13,11.8C75.5,19.1,80.4,24.2,88.1,24.2z M101.4,6.1c-1.7,0-3.1-1.4-3.1-3s1.4-3,3.1-3c1.8,0,3.2,1.4,3.2,3 S103.1,6.1,101.4,6.1z M98.8,23.8h5V7.7h-5V23.8z M115.1,15l-4.3-7.2H105l10.1,16.4l10.1-16.4h-5.8L115.1,15z M129.3,16.9h11.6 c0.1-7-4.2-9.5-8.4-9.5c-4.5,0-8.5,2.6-8.6,8.4c0,5.6,4.1,8.4,9.1,8.4c2.2,0,4.4-0.3,6.4-1.3v-4.4c-2.5,1.4-4.1,1.4-5.6,1.4 C131.7,19.8,129.5,19.2,129.3,16.9z M132.5,11.1c1.5,0,2.8,0.7,3,2.7h-6.2C129.6,11.9,131,11.1,132.5,11.1z M43.5,11.4 c1.2-1,1.8-2.4,1.8-4c0-3.1-3-6.3-7.3-6.3h-8v22.8h10.4c4.1,0,7.2-3,7.2-6.8C47.5,14.8,46.5,12.3,43.5,11.4z M35.2,5.7h2.4 C39,5.7,40,6.8,40,8c0,1.2-1,2.2-2.5,2.2h-2.4V5.7z M39.9,19.2h-4.7v-4.6h4.7c1.4,0,2.5,1,2.5,2.3C42.4,18.1,41.3,19.2,39.9,19.2z" />
                    <path d="M13.5,1l13.5,23H0L13.5,1z" />
                  </svg>
                </a>
                <biggive-misc-icon class="bx bx-x" background-colour="transparent" icon-colour="black" icon="MenuClose" onClick={this.closeMobileMenu}></biggive-misc-icon>
              </div>
              <div id="nav-primary">
                <ul class="links" slot="nav-primary">
                  <li>
                    <a href={makeURL('Donate', this.donateUrlPrefix, 'explore')}>Explore Campaigns</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'charities')}>For Charities</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.blogUrlPrefix, 'funders')}>For Funders</a>
                  </li>
                  <li>
                    <a onClick={this.noNav}>
                      Match Funding
                      <biggive-misc-icon class="bx bxs-chevron-down sub-menu-arrow arrow" background-colour="white" icon-colour="black" icon="CaretRight"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'match-funding-explained')}>Match Funding Explained</a>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'impact')}>Match Funding Impact</a>
                      </li>
                      <li class="more">
                        <a onClick={this.noNav}>
                          Match Funding Opportunities
                          {/* IMPORTANT: notice this one has a class sub-sub-menu, not sub-menu  */}
                          <biggive-misc-icon
                            class="bx bxs-chevron-down sub-sub-menu-arrow arrow"
                            background-colour="white"
                            icon-colour="black"
                            icon="CaretRight"
                          ></biggive-misc-icon>
                        </a>
                        <ul class="sub-sub-menu">
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'christmas-challenge')} class="icon-christmas">
                              Christmas Challenge
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'champions-for-children')} class="icon-children">
                              Champions for Children
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'green-match-fund')} class="icon-green-match">
                              Green Match Fund
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'women-girls-match-fund')} class="icon-women-girls">
                              Women &amp; Girls Match Fund
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'kind2mind/')} class="icon-mental-health">
                              Kind²Mind
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'artsforimpact/')} class="icon-arts-impact">
                              Arts for Impact
                            </a>
                          </li>
                          {this.smallCharityWeekEnabled && (
                            <li>
                              <a href={makeURL('Blog', this.blogUrlPrefix, 'small-charity-week/')} class="icon-small-charity">
                                Small Charity Week
                              </a>
                            </li>
                          )}
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'anchor-match-fund/')} class="icon-anchor-match">
                              Anchor Match Fund
                            </a>
                          </li>
                          <li>
                            <a href={makeURL('Blog', this.blogUrlPrefix, 'emergency-campaigns/')} class="icon-emergency">
                              Emergency Match Fund
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'run-your-own-campaign/)')}>Run your match funding campaign</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={this.noNav}>
                      About Us
                      <biggive-misc-icon class="bx bxs-chevron-down sub-menu-arrow arrow" background-colour="white" icon-colour="black" icon="CaretRight"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'our-people')}>Our People</a>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'our-story')}>Our Story</a>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'donation-funds')}>Donate by Bank Transfer</a>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'our-fees')}>Our Fees</a>
                      </li>
                      <li>
                        <a href={makeURL('Blog', this.blogUrlPrefix, 'faqs')}>FAQs</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a onClick={this.noNav}>
                      Resources
                      <biggive-misc-icon class="bx bxs-chevron-down sub-menu-arrow arrow" background-colour="white" icon-colour="black" icon="CaretRight"></biggive-misc-icon>
                    </a>
                    <ul class="sub-menu">
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
                  </li>
                </ul>
                <div class="mobile-only">{secondaryNavLinksForMobile}</div>
              </div>
              <div class="mobile-social-icon-wrap mobile-only">
                <biggive-social-icon service="Facebook" url="https://www.facebook.com/BigGive.org" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
                <biggive-social-icon service="Twitter" url="https://x.com/BigGive" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
                <biggive-social-icon service="LinkedIn" url="https://uk.linkedin.com/company/big-give" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
                <biggive-social-icon
                  service="YouTube"
                  url="https://www.youtube.com/channel/UC9_wH1aaTuZurJ-F9R8GDcA"
                  background-colour="tertiary"
                  icon-colour="black"
                ></biggive-social-icon>
                <biggive-social-icon service="Instagram" url="https://www.instagram.com/biggiveorg" background-colour="tertiary" icon-colour="black"></biggive-social-icon>
              </div>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
