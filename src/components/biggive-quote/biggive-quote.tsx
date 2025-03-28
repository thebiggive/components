import { Component, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { spacingOption } from '../../globals/spacing-option';

@Component({
  tag: 'biggive-quote',
  styleUrl: 'biggive-quote.scss',
  shadow: true,
})
export class BiggiveQuote {
  @Prop() spaceBelow: spacingOption = 0;

  @Prop() defaultTextColour: brandColour = 'black';

  @Prop() quote: string = '';

  @Prop() attribution: string = '';

  @Prop() quoteIconColour: brandColour = 'primary';

  @Prop() siteDesign: 'biggive' | 'philco' = 'biggive';

  render() {
    const quote = this.siteDesign === 'philco' ? this.quote : `“${this.quote}”`;
    const attribution = this.siteDesign === 'philco' ? this.attribution : `- ${this.attribution}`;

    const bigGiveQuoteMarks = (
      <svg width="34" height="24" viewBox="0 0 34 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.1245 0L13.7167 24H0L11.0901 0H16.1245ZM34 0L31.5923 24H17.8755L28.9657 0H34Z" fill="#2C089B" />
      </svg>
    );

    const philcoQuoteMarks = (
      <svg width="472" height="86" viewBox="0 0 472 86" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M218.139 82.2C203.139 82.2 194.539 70.2 194.539 50.2C194.539 28.4 206.339 11.4 229.539 0.799992L237.339 16.4C222.539 23 214.939 32.8 214.939 46.8L216.139 65.8L204.339 49.4C207.939 46.2 213.939 43.6 218.939 43.6C229.739 43.6 237.139 51 237.139 62C237.139 74.2 229.139 82.2 218.139 82.2ZM271.339 82.2C256.339 82.2 247.739 70.2 247.739 50.2C247.739 28.4 259.539 11.4 282.739 0.799992L290.539 16.4C275.739 23 268.139 32.8 268.139 46.8L269.339 65.8L257.539 49.4C261.139 46.2 267.139 43.6 272.139 43.6C282.939 43.6 290.339 51 290.339 62C290.339 74.2 282.339 82.2 271.339 82.2Z"
          fill="#F18A00"
        />
      </svg>
    );

    return (
      <div class={'container text-colour-' + this.defaultTextColour + ' quote-icon-colour-' + this.quoteIconColour + ' space-below-' + this.spaceBelow + ' ' + this.siteDesign}>
        <div class="image-wrap">{this.siteDesign === 'philco' ? philcoQuoteMarks : bigGiveQuoteMarks}</div>
        <div class="quote">{quote}</div>
        <div class="attribution">{attribution}</div>
      </div>
    );
  }
}
