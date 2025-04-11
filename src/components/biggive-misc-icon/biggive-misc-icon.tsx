import { Component, Prop, h } from '@stencil/core';
import { FontAwesomeIconsService } from '../../util/fontawesome-icons';

@Component({
  tag: 'biggive-misc-icon',
  styleUrl: 'biggive-misc-icon.scss',
  shadow: true,
})
export class BiggiveMiscIcon {
  /**
   * Background colour
   */
  @Prop() backgroundColour: string = 'primary';

  /**
   * Background colour
   */
  @Prop() iconColour: string = 'white';

  /**
   * Icon
   */
  @Prop() icon: string;

  /**
   * Url
   */
  @Prop() url: string;

  render() {
    const miscIcon = FontAwesomeIconsService.getMiscIcon(this.icon);

    return (
      // Note: the icon name prop is set as a css class too for any styling specific to certain icons
      <div class={'misc-icon-item background-colour-' + this.backgroundColour + ' ' + this.icon}>
        <a href={this.url}>
          <svg
            width={miscIcon.icon[0]}
            height={miscIcon.icon[1]}
            xmlns="http://www.w3.org/2000/svg"
            class={'fill-' + this.iconColour}
            viewBox={'0 0 ' + miscIcon.icon[0] + ' ' + miscIcon.icon[1]}
            overflow="hidden"
          >
            <path d={miscIcon.icon[4].toString()} />
          </svg>
        </a>
      </div>
    );
  }
}
