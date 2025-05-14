import { Component, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { spacingOption } from '../../globals/spacing-option';

@Component({
  tag: 'biggive-article-card',
  styleUrl: 'biggive-article-card.scss',
  shadow: true,
})
export class BiggiveArticleCard {
  @Prop() spaceBelow: spacingOption = 0;

  @Prop() backgroundColour: brandColour = 'white';

  @Prop() backgroundImageUrl: string = '';

  @Prop() slug: string;

  @Prop() slugColour: brandColour = 'black';

  @Prop() date: string;

  @Prop() dateColour: brandColour = 'black';

  @Prop() mainTitle: string;

  @Prop() mainTitleColour: brandColour = 'black';

  @Prop() mainImageUrl: string;

  @Prop() mainImageAltText: string;

  @Prop() image1Url: string;

  @Prop() image1AltText: string;

  @Prop() image2Url: string;

  @Prop() image2AltText: string;

  @Prop() imageLabel: string;

  @Prop() imageLabelColour: brandColour = 'black';

  @Prop() buttonLabel: string;

  @Prop() buttonUrl: string;

  @Prop() buttonColour: brandColour = 'black';

  @Prop() clipBottomLeftCorner: boolean = true;

  @Prop() clipTopRightCorner: boolean = true;

  private isEmpty(value: string | undefined | null): boolean {
    return value === undefined || value === null || value === '';
  }

  render() {
    return (
      <div class={'container space-below-' + this.spaceBelow}>
        <div
          class={
            'sleeve background-colour-' +
            this.backgroundColour +
            ' text-colour-black ' +
            ' slug-colour-' +
            this.slugColour +
            ' date-colour-' +
            this.dateColour +
            ' main-title-colour-' +
            this.mainTitleColour +
            ' image-label-colour-' +
            this.imageLabelColour +
            ' button-colour' +
            this.buttonColour +
            ' clip-bottom-left-corner-' +
            this.clipBottomLeftCorner +
            ' clip-top-right-corner-' +
            this.clipTopRightCorner
          }
          style={{ 'background-image': "url('" + this.backgroundImageUrl + "')" }}
        >
          <div class="content-wrap">
            <div class="meta">
              {this.slug != '' ? <div class="slug text-colour-primary">{this.slug}</div> : null}
              {this.date != '' ? <div class="date">{this.date}</div> : null}
            </div>

            {this.isEmpty(this.mainImageUrl) ? null : (
              <div class="main-image-container">
                <div class="image-wrap">
                  <img src={this.mainImageUrl} alt={this.mainImageAltText} />
                </div>
              </div>
            )}

            <h3 class="title">
              <a href={this.buttonUrl}>{this.mainTitle}</a>
            </h3>
            {!this.isEmpty(this.image1Url) || !this.isEmpty(this.image2Url) ? (
              <div class="image-group">
                {this.isEmpty(this.image1Url) ? null : (
                  <div class="image-container">
                    <div class="image-wrap" style={{ 'background-image': "url('" + this.image1Url + "')" }}>
                      <img src={this.image1Url} alt={this.image1AltText} />
                    </div>
                  </div>
                )}

                {this.isEmpty(this.image2Url) ? null : (
                  <div class="image-container">
                    <div class="image-wrap" style={{ 'background-image': "url('" + this.image2Url + "')" }}>
                      <img src={this.image2Url} alt={this.image2AltText} />
                    </div>
                  </div>
                )}
              </div>
            ) : null}

            {this.isEmpty(this.imageLabel) ? null : <div class="image-label">{this.imageLabel}</div>}

            {!this.isEmpty(this.buttonLabel) && !this.isEmpty(this.buttonUrl) ? (
              <div class="button-wrap align-right">
                <biggive-button colour-scheme={'clear-' + this.buttonColour} url={this.buttonUrl} label={this.buttonLabel}></biggive-button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}
