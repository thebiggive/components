import { newSpecPage } from '@stencil/core/testing';
import { BiggiveTextInput } from '../biggive-text-input';

describe('biggive-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveTextInput],
      html: `<biggive-text-input></biggive-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-text-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </biggive-text-input>
    `);
  });
});