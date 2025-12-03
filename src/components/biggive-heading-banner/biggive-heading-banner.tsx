import { Component, h, Prop } from '@stencil/core';

/**
 * Heading banner component for use as a page header.
 *
 * This component provides a banner with a background image, optional logo, and text content.
 * It supports different heights and customizable colors.
 */
@Component({
  tag: 'biggive-heading-banner',
  styleUrl: 'biggive-heading-banner.scss',
  shadow: true,
})
export class BiggiveHeadingBanner {
  @Prop() targetUrl?: string;

  /**
   * Optional logo object with URL and alt text
   */
  @Prop() logo?: { url: string; alt?: string } | string;

  /**
   * Optional slightly smaller text to appear above the main title
   */
  @Prop() slug?: string = '';

  /**
   * Main title text for the banner
   */
  @Prop() mainTitle!: string;

  /**
   * URL for the main banner image
   */
  @Prop() mainImageUrl!: string | null;

  /**
   * Focal point for the image positioning
   * x and y values are percentages (0-100)
   */
  @Prop() focalPoint!: string | { x: number; y: number };

  /**
   * Optional teaser text that appears below the main title
   */
  @Prop() teaser!: string;

  /**
   * Background color for the banner
   */
  @Prop() backgroundColour!: string;

  /**
   * Background color for the text content area
   */
  @Prop() textBackgroundColour!: string;

  @Prop() slugColour!: string;

  @Prop() mainTitleColour!: string;

  @Prop() teaserColour!: string;

  /**
   * Height variant of the banner
   * 'tall' for full height, 'short' for reduced height
   */
  @Prop() height: 'short' | 'tall' = 'tall';

  /**
   * Takes a string that may contain any form of newlines, and returns an array that alternates
   * between substrings found between the newlines and <br/> elements as objects.
   */
  private lineBreakToBr(string: string | undefined): unknown[] {
    if (string == undefined) {
      return [];
    }

    return string
      .split(/\r?\n|\r|\n/g)
      .map(line => [line, <br />])
      .flat()
      .slice(0, -1);
  }

  private getParsedFocalPoint(): { x: number; y: number } {
    if (typeof this.focalPoint === 'string') {
      return JSON.parse(this.focalPoint);
    }
    return this.focalPoint;
  }

  private getParsedLogo(): { url: string; alt?: string } | undefined {
    if (this.logo === undefined) return undefined;
    if (typeof this.logo === 'string') {
      return JSON.parse(this.logo);
    }
    return this.logo;
  }

  render() {
    // Convert teaser text with line breaks to JSX
    const teaserLines = this.lineBreakToBr(this.teaser);

    // Ensure color values have # prefix if they're hex colors without it
    // not sure how but it seems we're sometimes doing at least an intiial render before the colour props are populated,
    // so using null-safe navigation to avoid a crash here.
    const bgColor = this.backgroundColour?.startsWith('#') ? this.backgroundColour : `#${this.backgroundColour}`;
    const textBgColor = this.textBackgroundColour?.startsWith('#') ? this.textBackgroundColour : `#${this.textBackgroundColour}`;
    const slugColour = this.slugColour?.startsWith('#') ? this.slugColour : `#${this.slugColour}`;
    const mainTitleColour = this.mainTitleColour?.startsWith('#') ? this.mainTitleColour : `#${this.mainTitleColour}`;
    const teaserColour = this.teaserColour?.startsWith('#') ? this.teaserColour : `#${this.teaserColour}`;

    const logo = this.getParsedLogo();

    const mainTitle =
      this.targetUrl === undefined ? (
        <h1 style={{ color: mainTitleColour }} class="main-title">
          {this.mainTitle}
        </h1>
      ) : (
        <a href={this.targetUrl} class="banner-link">
          <h1 style={{ color: mainTitleColour }} class="main-title">
            {this.mainTitle}
          </h1>
        </a>
      );

    let teaserBlock = null;
    if (this.teaser != undefined) {
      teaserBlock =
        this.targetUrl === undefined ? (
          <div class="teaser" style={{ color: teaserColour }}>
            {teaserLines}
          </div>
        ) : (
          <a href={this.targetUrl} class="banner-link">
            <div class="teaser" style={{ color: teaserColour }}>
              {teaserLines}
            </div>
          </a>
        );
    }

    return (
      <div
        class={{
          banner: true,
          short: this.height === 'short',
        }}
        style={{
          'background-color': bgColor,
        }}
      >
        {typeof this.mainImageUrl === 'string' && this.mainImageUrl !== '' ? (
          <img
            class="background"
            src={this.mainImageUrl}
            alt=""
            style={{
              'object-position': `${this.getParsedFocalPoint().x}% ${this.getParsedFocalPoint().y}%`,
            }}
          />
        ) : null}
        <div class="sleeve">
          <div
            class="content-wrap"
            style={{
              'background-color': textBgColor,
            }}
          >
            {logo ? (
              <div class="logo">
                <img src={logo.url} alt={logo.alt || ''} />
              </div>
            ) : null}

            {this.slug != undefined ? (
              <div
                style={{
                  color: slugColour,
                }}
                class="slug"
              >
                {this.slug}
              </div>
            ) : null}

            {mainTitle}

            {teaserBlock}
          </div>

          {typeof this.mainImageUrl === 'string' && this.mainImageUrl !== '' ? (
            <img
              class="stacked"
              src={this.mainImageUrl}
              alt=""
              style={{
                'object-position': `${this.getParsedFocalPoint().x}% ${this.getParsedFocalPoint().y}%`,
              }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
