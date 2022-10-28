import { newSpecPage } from '@stencil/core/testing';
import { BiggiveHeading } from '../biggive-heading';

describe('biggive-heading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveHeading],
      html: `<biggive-heading></biggive-heading>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-heading>
        <mock:shadow-root>
          <div class="container align-left space-above-0 space-below-0">
            <h1 class="heading-colour-primary heading-size-1"></h1>
          </div>
        </mock:shadow-root>
      </biggive-heading>
    `);
  });
});
