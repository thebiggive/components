import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-formatted-text',
  styleUrl: 'biggive-formatted-text.scss',
  shadow: true,
})
export class BiggiveFormattedText {
  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;
  /**
   * Default text colour
   */
  @Prop() defaultTextColour: string = 'primary';

  /**
   * Width
   */
  @Prop() maxWidth: number = 100;

  /**
   * Default line height percentage
   */
  @Prop() defaultLineHeight: number = null;

  render() {
    return (
      <div class={'container max-width-' + this.maxWidth + ' text-colour-' + this.defaultTextColour + ' line-height-' + this.defaultLineHeight + ' space-below-' + this.spaceBelow}>
        <slot></slot>
      </div>
    );
  }
}
