import { Component, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';

@Component({
  tag: 'biggive-formatted-text',
  styleUrl: 'biggive-formatted-text.scss',
  shadow: true,
})
export class BiggiveFormattedText {
  @Prop() spaceBelow: number = 0;
  /**
   * Text colour. If undefined or blank colour will be inherited as normal from containing element.
   */
  @Prop() defaultTextColour: brandColour | undefined;
  @Prop() maxWidth: number = 100;
  @Prop() siteDesign: 'biggive' | 'philco' = 'biggive';

  render() {
    const defaultColourSet = typeof this.defaultTextColour === 'string' && this.defaultTextColour.trim() !== '';
    const anyDefaultColourClass = defaultColourSet ? ' text-colour-' + this.defaultTextColour : '';

    return (
      <div class={'container ' + this.siteDesign + ' max-width-' + this.maxWidth + anyDefaultColourClass + ' space-below-' + this.spaceBelow}>
        <slot></slot>
      </div>
    );
  }
}
