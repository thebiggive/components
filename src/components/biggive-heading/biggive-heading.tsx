import { Component, Prop, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { headingTag } from '../../globals/heading-tag';
import { headingSize } from '../../globals/heading-size';
import { spacingOption } from '../../globals/spacing-option';

@Component({
  tag: 'biggive-heading',
  styleUrl: 'biggive-heading.scss',
  shadow: true,
})
export class BiggiveHeading {
  @Prop() spaceAbove: spacingOption = 2;
  @Prop() spaceBelow: spacingOption = 4;
  @Prop() colour: brandColour = 'primary';
  @Prop() htmlElement: headingTag = 'h1';
  @Prop() size: headingSize = 1;
  @Prop() align: string = 'left';
  @Prop() text: string = '';
  @Prop() icon: boolean = false;
  @Prop() iconColour: brandColour = 'primary';
  @Prop() siteDesign: 'biggive' | 'philco' = 'biggive';

  render() {
    const Tag = this.htmlElement;
    return (
      <div class={'container ' + this.siteDesign + ' align-' + this.align + ' space-above-' + this.spaceAbove + ' space-below-' + this.spaceBelow}>
        <Tag class={'heading-colour-' + this.colour + ' icon-colour-' + this.iconColour + ' heading-' + this.size}>
          {this.icon ? (
            <svg viewBox="0 0 102 88">
              <path class="st0" d="M51.2,0l-51,88h102L51.2,0z" />
              <path
                d="M31,68.3c-1,0-1.9-0.9-1.9-1.9c0-1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9C32.9,67.5,32.1,68.3,31,68.3z M29.5,79.4h3v-10
         h-3V79.4z M41,69.4V70c-0.5-0.5-1.4-0.9-2.5-0.9c-2.7,0-4.9,2-4.9,4.9c0,2.9,2.2,4.9,4.9,4.9c1.1,0,2-0.3,2.5-0.9v0.6
         c0,1.3-1.2,1.9-2.7,1.9c-1.3,0-2.4-0.3-3.5-0.9v3c1.3,0.5,2.7,0.6,3.6,0.6c3,0,5.5-1.3,5.5-4.6v-9.4L41,69.4L41,69.4z M41,75.3
         c-0.4,0.6-1.2,0.9-1.9,0.9c-1.3,0-2.3-0.8-2.3-2.2c0-1.4,1-2.2,2.3-2.2c0.8,0,1.5,0.4,1.9,0.9V75.3z M52.8,79.7
         c2.4,0,3.8-0.4,5.1-1.2v-7.7h-6.6v2.9h3.5v2.6c-0.5,0.1-1.1,0.3-1.9,0.3c-3,0-4.4-2-4.4-4.3c0-2.3,1.7-4.3,4.8-4.3
         c1.3,0,2.6,0.4,3.5,0.9v-3.3c-0.9-0.4-2.1-0.7-3.7-0.7c-4.6,0-7.8,3.3-7.8,7.4C45.2,76.5,48.1,79.7,52.8,79.7z M60.7,68.3
         c-1,0-1.9-0.9-1.9-1.9c0-1,0.9-1.9,1.9-1.9c1.1,0,1.9,0.9,1.9,1.9C62.6,67.5,61.8,68.3,60.7,68.3z M59.2,79.4h3v-10h-3V79.4z
          M69,73.9l-2.6-4.5h-3.5l6,10.3l6-10.3h-3.5L69,73.9z M77.5,75.1h7c0-4.4-2.5-6-5.1-6c-2.7,0-5.1,1.6-5.1,5.2c0,3.5,2.5,5.2,5.5,5.2
         c1.3,0,2.7-0.2,3.8-0.8v-2.8c-1.5,0.9-2.5,0.9-3.3,0.9C78.9,76.9,77.6,76.5,77.5,75.1z M79.4,71.5c0.9,0,1.7,0.4,1.8,1.7h-3.7
         C77.7,72,78.6,71.5,79.4,71.5z M26,71.6c0.7-0.6,1.1-1.5,1.1-2.5c0-1.9-1.8-3.9-4.4-3.9h-4.8v14.3h6.3c2.4,0,4.3-1.9,4.3-4.2
         C28.4,73.8,27.8,72.2,26,71.6z M21,68.1h1.4c0.9,0,1.5,0.7,1.5,1.4c0,0.8-0.6,1.4-1.5,1.4H21V68.1z M23.8,76.5H21v-2.9h2.8
         c0.9,0,1.5,0.6,1.5,1.4C25.3,75.9,24.7,76.5,23.8,76.5z"
              />
            </svg>
          ) : null}

          {this.text}
        </Tag>
      </div>
    );
  }
}
