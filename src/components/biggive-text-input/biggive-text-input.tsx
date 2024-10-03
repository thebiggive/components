import { Component, Element, h, Prop } from '@stencil/core';

/**
 * Initially developed for use within the new donate stepper design. Currently has a hard-coded background
 * of $colour-grey-background, intened to appear transparent when used on a page with a matching background.
 *
 * Please ensure input is styled as width: 100%.
 */
@Component({
  tag: 'biggive-text-input',
  styleUrl: 'biggive-text-input.scss',
  shadow: true,
})
export class BiggiveTextInput {
  @Element() host: HTMLBiggiveTextInputElement;
  @Prop() value!: string;
  /**
   * ISO-4217 currency code if input is for a money value
   */
  @Prop() currency: 'GBP' | 'USD' | undefined;
  @Prop() spaceBelow: number = 0;
  @Prop() selectStyle: 'bordered' | 'underlined' = 'bordered';

  render() {
    const nativeInput: HTMLDivElement | null = this.host.querySelector(`[slot="input"]`);
    nativeInput?.addEventListener('focus', () => {
      this.host.shadowRoot?.querySelector('.sleeve')?.classList.add('focused');
    });

    const currencySymbol = this.currency === 'GBP' ? '£' : this.currency === 'USD' ? '$' : undefined;
    return (
      <div class={'text-input space-below-' + this.spaceBelow + ' select-style-' + this.selectStyle}>
        <div class="prompt">
          <span>
            <slot name="label" />
          </span>
        </div>
        <div class="sleeve">
          <div class="inner-sleeve">
            {currencySymbol && <span class="currency-symbol">{currencySymbol}</span>}
            <slot name="input" />
            <div style={{ clear: 'both' }}></div>
          </div>
        </div>
      </div>
    );
  }
}
