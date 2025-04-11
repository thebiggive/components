import { Component, Prop, h } from '@stencil/core';
import { FontAwesomeIconsService } from '../../util/fontawesome-icons';

/**
 * Used to indicate and link to a charity's social page, or their own web site.
 */
@Component({
  tag: 'biggive-social-icon',
  styleUrl: 'biggive-social-icon.scss',
  shadow: true,
})
export class BiggiveSocialIcon {
  /**
   * Service name
   */
  @Prop() service!: 'Facebook' | 'Instagram' | 'LinkedIn' | 'Twitter' | 'Web' | 'Whatsapp' | 'YouTube';

  /**
   * Used within accessible labels for links. Typically a charity name or "Big Give". Can also be "Share".
   */
  @Prop() labelPrefix: string = 'Big Give';

  /**
   * Background colour
   */
  @Prop() backgroundColour: string = 'primary';

  /**
   * Icon colour
   */
  @Prop() iconColour: string = 'white';

  /**
   * Used in the social icons in the biggive-footer, which are more spaced out
   * than others across the site. COM-43.
   */
  @Prop() wide: boolean = false;

  /**
   * Url
   */
  @Prop() url: string = '#';

  render() {
    const sIcon = FontAwesomeIconsService.getSocialIcon(this.service);

    return (
      <div class={'social-icon-item background-colour-' + this.backgroundColour + (this.wide ? ' wide' : '')}>
        <a href={this.url} aria-label={`${this.labelPrefix} on ${this.service}`} target="_blank" rel="noopener">
          <svg
            width={sIcon.icon[0]}
            height={sIcon.icon[1]}
            xmlns="http://www.w3.org/2000/svg"
            class={'fill-' + this.iconColour}
            viewBox={'0 0 ' + sIcon.icon[0] + ' ' + sIcon.icon[1]}
            overflow="hidden"
          >
            <path d={sIcon.icon[4].toString()} />
          </svg>
        </a>
      </div>
    );
  }
}
