import { newSpecPage } from '@stencil/core/testing';
import { BiggiveFormFieldSelect } from '../biggive-form-field-select';

describe('biggive-form-field-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveFormFieldSelect],
      html: `<biggive-form-field-select
                prompt="What would you like?"
                select-element-id="some-id"
                options='[{"value": "optionOne", "label": "Option one"},{"value": "optionTwo", "label": "Option two"}]'
              ></biggive-form-field-select>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-form-field-select options="[{&quot;value&quot;: &quot;optionOne&quot;, &quot;label&quot;: &quot;Option one&quot;},{&quot;value&quot;: &quot;optionTwo&quot;, &quot;label&quot;: &quot;Option two&quot;}]" prompt="What would you like?" select-element-id="some-id">
        <mock:shadow-root>
          <div class="selectWrapper">
            <label for="some-id">
              <div class="prompt">What would you like?</div>
              </label>
              <div class="dropdown select-style-bordered space-below-0">
                <div class="sleeve">
                  <select id="some-id" aria-label="What would you like?">
                    <option value="optionOne">
                      Option one
                    </option>
                    <option value="optionTwo">
                      Option two
                    </option>
                  </select>
                  <div class="arrow"></div>
                </div>
              </div>
          </div>
        </mock:shadow-root>
      </biggive-form-field-select>
  `);
  });

  it('keeps a stable selectId across re-renders when selectElementId is not provided', async () => {
    const page = await newSpecPage({
      components: [BiggiveFormFieldSelect],
      html: `<biggive-form-field-select
                prompt="Select an option"
                options='[{"value": "1", "label": "One"}]'
              ></biggive-form-field-select>`,
    });

    const select = page.root?.shadowRoot?.querySelector('select');
    const label = page.root?.shadowRoot?.querySelector('label');
    const initialId = select?.getAttribute('id');

    expect(initialId).toMatch(/^select-\d+$/);
    expect(label?.getAttribute('for')).toBe(initialId);

    page.root?.setAttribute('prompt', 'Updated prompt');
    await page.waitForChanges();

    const selectAfterRerender = page.root?.shadowRoot?.querySelector('select');
    const labelAfterRerender = page.root?.shadowRoot?.querySelector('label');
    expect(selectAfterRerender?.getAttribute('id')).toBe(initialId);
    expect(labelAfterRerender?.getAttribute('for')).toBe(initialId);
  });

  it('updates selectedValue and selectedLabel when an option is selected', async () => {
    let changedValue: string | null = null;
    const page = await newSpecPage({
      components: [BiggiveFormFieldSelect],
      html: `<biggive-form-field-select
                prompt="Select"
                options='[{"value": "opt1", "label": "Label 1"},{"value": "opt2", "label": "Label 2"}]'
              ></biggive-form-field-select>`,
    });

    const component = page.rootInstance as BiggiveFormFieldSelect;
    if (page.root) {
      page.root.selectionChanged = (val: string) => {
        changedValue = val;
      };
    }

    const select = page.root?.shadowRoot?.querySelector('select') as HTMLSelectElement | null;
    if (select) {
      select.value = 'opt2';
      select.selectedIndex = 1;
      select.dispatchEvent(new Event('change'));
    }
    await page.waitForChanges();

    expect(component.selectedValue).toBe('opt2');
    expect(component.selectedLabel).toBe('Label 2');
    expect(changedValue).toBe('opt2');
  });
});
