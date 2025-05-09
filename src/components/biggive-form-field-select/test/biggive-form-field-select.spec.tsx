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
            <label htmlfor="some-id">
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
});
