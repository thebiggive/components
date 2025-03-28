import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';

@Component({
  tag: 'biggive-button',
  styleUrl: 'biggive-button.scss',
  shadow: true,
})
export class BiggiveButton {
  @Event({
    eventName: 'doButtonClick',
    bubbles: true,
    cancelable: true,
    composed: true,
  })
  doButtonClick: EventEmitter<{ event: object; url: string }>;

  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 1;

  /**
   * Colour Scheme
   */
  @Prop() colourScheme: brandColour = 'primary';

  /**
   * Text
   */
  @Prop() label: string = 'Click me';

  /**
   * URL
   */
  @Prop() url: string | undefined;

  /**
   * New Tab
   */
  @Prop() openInNewTab: boolean = false;

  /**
   * Display full width
   */
  @Prop() fullWidth: boolean = false;

  /**
   * Size
   */
  @Prop() size: string = 'medium';

  /**
   * Rounded corners
   */
  @Prop() rounded: boolean = false;

  /**
   * Centered
   */
  @Prop() centered: boolean = false;

  @Prop() buttonId: undefined | string = undefined;

  @Prop() siteDesign: 'biggive' | 'philco' = 'biggive';

  /**
   * For use only in philco site - the Big Give site does not use disabled
   * buttons and does not have a design for such.
   */
  @Prop() disabled = false;

  private handleButtonClick = (event: any) => {
    this.doButtonClick.emit({ event: event, url: event.target.parentElement.href });
  };

  render() {
    // We always want to have a href so that browsers will see this as a link and allow clicking with keybard.
    // If there's no or an empty href then it isn't possible to click by keyboard and we would have to handle keyboard
    // interaction separately.
    const href = this.url || 'javascript:void(0);';

    return (
      <div class={'container space-below-' + this.spaceBelow + ' centered-' + this.centered + ' ' + this.siteDesign + (this.disabled ? ' disabled' : '')}>
        <a
          pointer-events={this.disabled ? 'none' : 'auto'}
          aria-disabled={this.disabled}
          role="button"
          href={href}
          target={this.openInNewTab ? '_blank' : '_self'}
          id={this.buttonId}
          class={'button button-' + this.colourScheme + ' full-width-' + this.fullWidth.toString() + ' size-' + this.size + ' rounded-' + this.rounded.toString()}
        >
          <span onClick={this.disabled ? () => {} : this.handleButtonClick}>{this.label}</span>
        </a>
      </div>
    );
  }
}
