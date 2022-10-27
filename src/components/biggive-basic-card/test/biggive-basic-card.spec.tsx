import { newSpecPage } from '@stencil/core/testing';
import { BiggiveBasicCard } from '../biggive-basic-card';

describe('biggive-basic-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveBasicCard],
      html: `<biggive-basic-card></biggive-basic-card>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-basic-card>
        <mock:shadow-root>
          <div class="background-colour-white container space-below-0" style="background-image: url('');">
            <div class="sleeve">
              <div class="content-wrap">
                <div class="icon">
                  <svg fill="none" height="39" viewBox="0 0 53 39" width="53" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-black" d="M38.7009 13.6572L52.3535 38.6959H25.0386L38.7009 13.6572Z"></path>
                    <path class="fill-primary" d="M20.4789 36.4199L6.36785e-06 5.89713e-05L40.9724 6.61352e-05L20.4789 36.4199Z"></path>
                  </svg>
                </div>
                <h3 class="title"></h3>
                <div class="subtitle"></div>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </biggive-basic-card>
    `);
  });
});