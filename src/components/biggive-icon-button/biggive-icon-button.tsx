import { Component, Event, EventEmitter, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-icon-button',
  styleUrl: 'biggive-icon-button.scss',
  shadow: true,
})
export class BiggiveIconButton {
  @Event({
    eventName: 'doButtonClick',
    composed: true,
    cancelable: true,
    bubbles: true,
  })
  doButtonClick: EventEmitter<{ event: object; url: string }>;

  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 1;

  /**
   * Text Colour
   */
  @Prop() textColour: string = 'black';

  /**
   * Background Colour
   */
  @Prop() backgroundColour: string = 'white';

  /**
   * Arrow Colour
   */
  @Prop() arrowColour: string = 'black';

  /**
   * Text
   */
  @Prop() label: string = 'Click me';

  /**
   * Text
   */
  @Prop() iconColour: string = 'primary';

  /**
   * URL
   */
  @Prop() url: string = undefined;

  /**
   * New Tab
   */
  @Prop() openInNewTab: boolean = false;


  private handleButtonClick = (event: any) => {
    this.doButtonClick.emit({ event: event, url: event.target.parentElement.href });
  };

  render() {
    return (
      <div class={'container space-below-' + this.spaceBelow + ' icon-colour-' + this.iconColour + ' arrow-colour-' + this.arrowColour}>
        <a href={this.url} target={this.openInNewTab ? '_blank' : '_self'} class={' background-colour-' + this.backgroundColour + ' text-colour-' + this.textColour}>
          <span onClick={this.handleButtonClick}>{this.label}</span>
        </a>
      </div>
    );
  }
}
