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
      <svg width="96" height="86" overflow="hidden" viewBox="0 0 96 81" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m 23.6,81.400008 c -15,0 -23.6,-12 -23.6,-32 0,-21.8 11.8,-38.8 35,-49.400008 l 7.8,15.600008 c -14.8,6.6 -22.4,16.4 -22.4,30.4 l 1.2,19 -11.8,-16.4 c 3.6,-3.2 9.6,-5.8 14.6,-5.8 10.8,0 18.2,7.4 18.2,18.4 0,12.2 -8,20.2 -19,20.2 z m 53.2,0 c -15,0 -23.6,-12 -23.6,-32 0,-21.8 11.8,-38.8 35,-49.400008 L 96,15.600008 c -14.8,6.6 -22.4,16.4 -22.4,30.4 l 1.2,19 -11.8,-16.4 c 3.6,-3.2 9.6,-5.8 14.6,-5.8 10.8,0 18.2,7.4 18.2,18.4 0,12.2 -8,20.2 -19,20.2 z"
          fill="#f18a00"
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
