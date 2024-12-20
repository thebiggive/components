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
   * Placeholder
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

    return (
      <div class="selectWrapper">
        <label class={greyIfRequired}>
          <div class={'prompt' + greyIfRequired}>{this.prompt}</div>
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
              <select class={greyIfRequired} onChange={this.doOptionSelectCompletedHandler}>
                {options.map(option => (
                  <option selected={this.selectedValue === option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div class="arrow"></div>
            </div>
          </div>
        </label>
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
}
