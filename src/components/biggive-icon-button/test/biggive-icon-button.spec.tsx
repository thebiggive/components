import { newSpecPage } from '@stencil/core/testing';
import { BiggiveIconButton } from '../biggive-icon-button';

describe('biggive-icon-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveIconButton],
      html: `<biggive-icon-button></biggive-icon-button>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-icon-button>
        <mock:shadow-root>
          <div class="arrow-colour-black container icon-colour-primary space-below-1">
            <a class="background-colour-white text-colour-black" target="_self">
              <span>
                Click me
              </span>
            </a>
          </div>
        </mock:shadow-root>
      </biggive-icon-button>
    `);
  });
});
