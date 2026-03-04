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

  private isNoOpUrl = (): boolean => {
    return this.url === undefined || this.url.trim() === '' || this.url === '#';
  };

  private handleButtonClick = (event: MouseEvent) => {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (this.isNoOpUrl()) {
      event.preventDefault();
      event.stopPropagation();
      // Don't return, so apps can still use the custom event if appropriate.
    }

    this.doButtonClick.emit({ event: event, url: this.url || '' });
  };

  render() {
    const isNoOpLink = this.isNoOpUrl();
    const buttonClass =
      'button button-' +
      this.colourScheme +
      ' full-width-' +
      this.fullWidth.toString() +
      ' size-' +
      this.size +
      ' rounded-' +
      this.rounded.toString() +
      (isNoOpLink ? ' no-op-link' : '');

    return (
      <div class={'container space-below-' + this.spaceBelow + ' centered-' + this.centered + ' ' + this.siteDesign + (this.disabled ? ' disabled' : '')}>
        {isNoOpLink ? (
          <button type="button" aria-disabled={this.disabled} disabled={this.disabled} id={this.buttonId} class={buttonClass} onClick={this.handleButtonClick}>
            {this.label}
          </button>
        ) : (
          <a
            pointer-events={this.disabled ? 'none' : 'auto'}
            aria-disabled={this.disabled}
            role="button"
            href={this.url}
            target={this.openInNewTab ? '_blank' : '_self'}
            id={this.buttonId}
            class={buttonClass}
            onClick={this.handleButtonClick}
          >
            {this.label}
          </a>
        )}
      </div>
    );
  }
}
