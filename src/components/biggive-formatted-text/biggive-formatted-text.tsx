import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-formatted-text',
  styleUrl: 'biggive-formatted-text.scss',
  shadow: true,
})
export class BiggiveFormattedText {
  @Prop() spaceBelow: number = 0;
  @Prop() defaultTextColour: string = 'primary';
  @Prop() maxWidth: number = 100;
  @Prop() siteDesign: 'biggive' | 'philco' = 'biggive';

  render() {
    return (
      <div class={'container ' + this.siteDesign + ' max-width-' + this.maxWidth + ' text-colour-' + this.defaultTextColour + ' space-below-' + this.spaceBelow}>
        <slot></slot>
      </div>
    );
  }
}
