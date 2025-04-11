import { Component, Element, Event, EventEmitter, getAssetPath, h, Host, Method, Prop } from '@stencil/core';
import { makeURL } from '../../util/helper-methods';

@Component({
  tag: 'philco-main-menu',
  styleUrl: 'philco-main-menu.scss',
  shadow: true,
})
export class PhilcoMainMenu {
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

  componentDidLoad() {
    this.host.classList.add('fixed');
  }

  render() {
    const homePageLink = '/';

    return (
      <Host>
        <nav role="navigation" aria-label="Main Menu">
          <div class="navbar">
            <div class="logo">
              <a href={this.philcoUrlPrefix + homePageLink} aria-label="Home">
                <img src={getAssetPath('/assets/images/philco/Philcologo-white.png')} alt="PhilCo" />
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
                    <a href={makeURL('Philco', this.philcoUrlPrefix, 'why-become-a-philco')}>Why become a Philco</a>
                  </li>
                  <li>
                    <a href={makeURL('Philco', this.philcoUrlPrefix, 'news')}>News</a>
                  </li>
                  <li class="signup">
                    <biggive-button
                      label="Sign up"
                      site-design="philco"
                      colour-scheme="philco-white"
                      rounded={true}
                      url={makeURL('Philco', this.philcoUrlPrefix, 'sign-up')}
                      size="small"
                    ></biggive-button>
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
