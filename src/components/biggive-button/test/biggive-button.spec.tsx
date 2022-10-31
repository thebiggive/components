import { newSpecPage } from '@stencil/core/testing';
import { BiggiveButton } from '../biggive-button';

describe('biggive-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveButton],
      html: `<biggive-button colour-scheme="primary" label="Donate now" url="https://www.google.com"></biggive-button>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-button colour-scheme="primary" label="Donate now" url="https://www.google.com">
        <mock:shadow-root>
          <div class="container space-below-1">
            <a class="button button-primary full-width-false rounded-true size-medium" href="https://www.google.com">
              Donate now
            </a>
          </div>
        </mock:shadow-root>
      </biggive-button>
    `);
  });
});
