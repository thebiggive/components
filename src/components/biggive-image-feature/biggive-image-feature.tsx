import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-image-feature',
  styleUrl: 'biggive-image-feature.scss',
  shadow: true,
})
export class BiggiveImageFeature {
  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;
  /**
   * Default text colour
   */
  @Prop() defaultTextColour: string = 'primary';

  /**
   * Full URL of a image.
   */
  @Prop() imageUrl: string = '';

  /**
   * Slug
   */
  @Prop() slug: string = null;

  /**
   * Slug colour
   */
  @Prop() slugColour: string = '';

  /**
   * Video title
   */
  @Prop() mainTitle: string = null;

  /**
   * Slug colour
   */
  @Prop() mainTitleColour: string = '';

  /**
   * Introductory teaser text
   */
  @Prop() teaser: string = null;

  /**
   * Teaser colour
   */
  @Prop() teaserColour: string = '';

  /**
   * Button Url
   */
  @Prop() buttonUrl: string = null;

  /**
   * Button Label
   */
  @Prop() buttonLabel: string = null;

  /**
   * Button Colour Scheme
   */
  @Prop() buttonColourScheme: string = 'primary';

  render() {
    return (
      <div class={'container text-colour-' + this.defaultTextColour + ' space-below-' + this.spaceBelow}>
        <div class="sleeve">
          <div class="content-wrap">
            <div class={'slug text-colour-' + this.slugColour}>{this.slug}</div>
            <h2 class={'title text-colour-' + this.mainTitleColour}>{this.mainTitle}</h2>
            <div class={'teaser text-colour-' + this.teaserColour}>{this.teaser}</div>
            {this.buttonLabel != null && this.buttonUrl != null ? (
              <biggive-button colour-scheme={this.buttonColourScheme} url={this.buttonUrl} label={this.buttonLabel}></biggive-button>
            ) : null}
          </div>
          <div class="graphic-wrap">
            {this.imageUrl.length > 0 ? (
              <div class="image-wrap">
                <img src={this.imageUrl} />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}