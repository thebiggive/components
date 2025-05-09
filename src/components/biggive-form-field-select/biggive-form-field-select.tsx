import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'biggive-form-field-select',
  styleUrl: 'biggive-form-field-select.scss',
  shadow: true,
})
export class BiggiveFormFieldSelect {
  @Element() el: HTMLBiggiveFormFieldSelectElement;

  @Prop() selectionChanged: (value: string) => void;

  /**
   * Displayed as 'eyebrow' label over the top border of the box.
   */
  @Prop() prompt!: string | null;

  @Prop({ mutable: true }) selectedValue: string | null;
  @Prop({ mutable: true }) selectedLabel: string | null;

  /**
   * JSON array of label+value objects, or takes a stringified equiavalent (for Storybook)
   */
  @Prop() options!: string | Array<{ label: string; value: string }>;
  @Prop() selectStyle: 'bordered' | 'underlined' = 'bordered';

  /**
   * Must match background of containing element, or unintended shape will appear.
   */
  @Prop() backgroundColour: 'white' | 'grey';

  @Prop() selectedOptionColour: 'inherit' | 'blue' = 'blue';

  /**
   * ID for the select element, used by a label. If not passed then a random id will be generated.
   */
  @Prop() selectElementId: string | undefined;

  private doOptionSelectCompletedHandler = (event: any) => {
    const value = event.target.value;
    this.selectedValue = value;
    this.selectedLabel = event.target.label;
    this.selectionChanged(value);
  };

  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;

  /**
   * Placeholder. If there is no `prompt`, this should be a suitable ARIA label.
   */
  @Prop() placeholder: string | undefined;

  render() {
    const greyIfRequired = this.backgroundColour === 'grey' ? ' grey' : '';

    let options = this.formatOptions(this.options);

    if (typeof this.placeholder === 'string' && typeof this.selectedValue !== 'string') {
      options = [{ value: '__placeholder__', label: this.placeholder }, ...options];
    }

    if (typeof options === 'undefined') {
      console.error('options undefined');
      options = [];
    }
    // Give the select a random id so we can reference it from a label
    const selectId = this.selectElementId || 'select-' + this.getRandomInt().toString();

    return (
      <div class="selectWrapper">
        <label class={greyIfRequired} htmlFor={selectId}>
          <div class={'prompt' + greyIfRequired}>{this.prompt}</div>
        </label>
        <div
          class={
            'dropdown space-below-' +
            this.spaceBelow +
            ' select-style-' +
            this.selectStyle +
            (this.prompt === null ? '  noprompt' : '') +
            (this.selectedOptionColour === 'inherit' ? ' inherit-colour' : '')
          }
        >
          <div class="sleeve">
            <select id={selectId} class={greyIfRequired} onChange={this.doOptionSelectCompletedHandler} aria-label={this.prompt === null ? this.placeholder : this.prompt}>
              {options.map(option => (
                <option selected={this.selectedValue === option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <div class="arrow"></div>
          </div>
        </div>
      </div>
    );
  }

  private formatOptions(options: string | Array<{ label: string; value: string }>): {
    label: string;
    value: string;
  }[] {
    if (options === undefined) {
      return [];
    }

    if (typeof options === 'string') {
      options = JSON.parse(options);
    }

    if (Array.isArray(options)) {
      return options;
    }

    return Object.entries(options).map(entry => ({ value: entry[0], label: entry[1] }));
  }

  private getRandomInt(): number {
    const min = 1_000_000;
    const max = 9_999_999;
    return Math.floor(Math.random() * (max - min) + min);
  }
}
