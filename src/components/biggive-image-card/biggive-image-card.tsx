import { Component, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { spacingOption } from '../../globals/spacing-option';

@Component({
  tag: 'biggive-image-card',
  styleUrl: 'biggive-image-card.scss',
  shadow: true,
})
export class BiggiveImageCard {
  @Prop() spaceBelow: spacingOption = 0;

  @Prop() backgroundColour: brandColour = 'primary';

  @Prop() mainImageUrl: string;

  @Prop() mainImageAltText: string;

  @Prop() textAlign: 'left' | 'center' | 'right' = 'center';

  @Prop() teaser: string;

  @Prop() teaserColour: brandColour = 'black';

  @Prop() buttonAlign: string = 'center';

  @Prop() buttonStyle: string = 'standard';

  @Prop() buttonLabel: string;

  @Prop() buttonUrl: string;

  @Prop() buttonColourScheme: string = 'clear-primary';

  @Prop() clipBottomLeftCorner: boolean = true;

  @Prop() clipTopRightCorner: boolean = true;

  @Prop() addAnimation: boolean = false;

  render() {
    return (
      <div
        class={
          'container space-below-' +
          this.spaceBelow +
          ' background-colour-' +
          this.backgroundColour +
          ' clip-bottom-left-corner-' +
          this.clipBottomLeftCorner +
          ' clip-top-right-corner-' +
          this.clipTopRightCorner +
          ' add-animation-' +
          this.addAnimation
        }
      >
        <a href={this.buttonUrl}>
          <div class={'sleeve text-colour-' + this.teaserColour + ' text-align-' + this.textAlign}>
            <div class="content-wrap">
              {this.mainImageUrl != '' ? (
                <div class="main-image-container">
                  <div class="image-wrap">
                    <img src={this.mainImageUrl} alt={this.mainImageAltText} title={this.mainImageAltText} />
                  </div>
                </div>
              ) : null}
              <div class="teaser">{this.teaser}</div>
              {this.buttonLabel != null && this.buttonUrl != null && this.buttonUrl != '' ? (
                <div class={'button-wrap align-' + this.buttonAlign}>
                  <biggive-button colour-scheme={this.buttonColourScheme} label={this.buttonLabel}></biggive-button>
                </div>
              ) : null}
            </div>
          </div>
        </a>
      </div>
    );
  }
}
