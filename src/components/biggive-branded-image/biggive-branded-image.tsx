import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-branded-image',
  styleUrl: 'biggive-branded-image.scss',
  shadow: true,
})
export class BiggiveBrandedImage {
  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;
  /**
   * Full URL of a image.
   */
  @Prop() imageUrl: string = '';

  /**
   * Alt-text for image, or null if the author has not supplied an alt-text. Should always be a string
   * (but may be empty) when authoring new content.
   */
  @Prop() imageAlt!: string | null;

  /**
   * Full URL of the logo.
   */
  @Prop() logoUrl: string = '';

  /**
   * Slug
   */
  @Prop() slug: string;

  /**
   * Charity name
   */
  @Prop() charityName: string;

  /**
   * Charity location
   */
  @Prop() charityLocation: string;

  /**
   * Link to the charity's website
   * @deprecated We should stop passing this soon, and will link to charity URLs alongside socials.
   */
  @Prop() charityUrl: string;

  /**
   * This is only used as a background, presentational "bonus" so we are setting
   * `role="presentation"` every time instead of accepting alt text.
   */
  render() {
    return (
      <div class={'container space-below-' + this.spaceBelow}>
        {<div class="slug">{this.slug}</div>}
        {this.imageUrl !== undefined && this.imageUrl !== null ? (
          <div class="image-wrap">{this.imageAlt === null ? <img src={this.imageUrl} /> : <img src={this.imageUrl} alt={this.imageAlt} />}</div>
        ) : null}
        {this.logoUrl !== undefined && this.logoUrl !== null ? <div class="logo-wrap" style={{ 'background-image': "url('" + this.logoUrl + "')" }}></div> : null}

        {this.charityName !== undefined && this.charityName !== null ? <h3 class="title">{this.charityName}</h3> : null}
        {this.charityLocation !== undefined && this.charityLocation !== null ? <div class="charity-info">{this.charityLocation}</div> : null}
      </div>
    );
  }
}
