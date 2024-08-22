import { Component, h, Prop } from '@stencil/core';
import { spacingOption } from '../../globals/spacing-option';
import { brandColour } from '../../globals/brand-colour';

@Component({
  tag: 'biggive-container-card',
  styleUrl: 'biggive-container-card.scss',
  shadow: true,
})
export class BiggiveContainerCard {
  @Prop() spaceBelow: spacingOption = 0;

  @Prop() backgroundColour: brandColour = 'primary';

  @Prop() backgroundImageUrl: string = '';

  @Prop() cardColour: brandColour = 'white';

  @Prop() textColour: brandColour = 'black';

  @Prop() clipBottomLeftCorner: boolean = true;

  @Prop() clipTopRightCorner: boolean = true;

  @Prop() headingLevel: 1 | 2 | 3 | 4 | 5 | 6 = 3;

  render() {
    return (
      <div
        class={'container space-below-' + this.spaceBelow + ' background-colour-' + this.backgroundColour}
        style={{ 'background-image': "url('" + this.backgroundImageUrl + "')" }}
      >
        <div class={'sleeve background-colour-' + this.cardColour + ' text-colour-' + this.textColour}>
          <slot></slot>
        </div>
      </div>
    );
  }
}
