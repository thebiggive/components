import { Component, Element, Event, EventEmitter, h, Host, Method, Prop } from '@stencil/core';
import { makeURL } from '../../util/helper-methods';

@Component({
  tag: 'philco-main-menu',
  styleUrl: 'philco-main-menu.scss',
  shadow: true,
})
export class PhilcoMainMenu {
  private lastScrollHeight = 0;

  @Element() host: HTMLPhilcoMainMenuElement;

  // URL prefixes vary by environment, and components library is not best placed to know what they are, so we
  // take them as props. But somehow on first render the prop passed in doesn't seem to be used, so the defaults
  // below are the values currently used in our prod site. They should be replaced by other values in other
  // environments.
  @Prop() philcoUrlPrefix: string;

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

  private closeMobileMenu = () => {
    const mobileMenu = this.host.shadowRoot!.querySelector<HTMLElement>('.nav-links');
    mobileMenu!.style.left = '-100%';
  };

  private setHeaderSize() {
    if (this.host.scrollHeight === this.lastScrollHeight) {
      // Some browsers fire 'resize' overzealously on scroll; we don't want to cause extra paints if nothing
      // relevant changed.
      return;
    }

    this.lastScrollHeight = this.host.scrollHeight;

    // Some resize edge cases lead Firefox, and maybe others, to go haywire and get a host offset
    // height of millions of pixels, presumably due to a layout logic loop. So for as long as we use
    // this body padding workaround, we need a safe maximum value, currently 130px, beyond which
    // we will never further displace the main content.
    // (Possibly scrollHeight could have the same issue, not tested.)
    // We have also seen intermittent scrolling scenarios where `scrollHeight` is spuriously less than 60px,
    // maybe related to browsers / OSes with "overscroll" features. So we also now set a fixed minimum of 60px.
    const scrollHeight = isNaN(this.host.scrollHeight) ? 60 : Math.max(60, this.host.scrollHeight);

    document.body.style.paddingTop = Math.min(130, scrollHeight).toString() + 'px';
  }

  componentDidLoad() {
    this.host.classList.add('fixed');
    window.addEventListener('resize', () => {
      this.setHeaderSize();
    });
    this.setHeaderSize();

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

  render() {
    const homePageLink = '/';

    return (
      <Host>
        <nav role="navigation" aria-label="Main Menu">
          <div class="navbar">
            <div class="logo">
              <a href={this.philcoUrlPrefix + homePageLink} aria-label="Home">
                PhilC
              </a>
            </div>
            <biggive-misc-icon class="bx bx-menu" background-colour="transparent" icon-colour="white" icon="MenuOpen" onClick={this.openMobileMenu}></biggive-misc-icon>
            <div class="nav-links">
              <div class="sidebar-logo">
                <a href={this.philcoUrlPrefix + homePageLink} aria-label="Home"></a>
                <biggive-misc-icon class="bx bx-x" background-colour="transparent" icon-colour="white" icon="MenuClose" onClick={this.closeMobileMenu}></biggive-misc-icon>
              </div>
              <div id="nav-primary">
                <ul class="links" slot="nav-primary">
                  <li>
                    <a href={makeURL('Donate', this.philcoUrlPrefix, 'explore')}>Why become a Philco</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.philcoUrlPrefix, 'charities')}>News</a>
                  </li>
                  <li>
                    <a href={makeURL('Blog', this.philcoUrlPrefix, 'funders')}>Sign up</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </Host>
    );
  }
}
