import { newSpecPage } from '@stencil/core/testing';
import { BiggiveVideoFeature } from '../biggive-video-feature';

describe('biggive-video', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveVideoFeature],
      html: `<biggive-video-feature></biggive-video-feature>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-video-feature>
        <mock:shadow-root>
          <div class="colour-scheme-primary container space-below-0">
            <div class="sleeve">
              <div class="content-wrap">
                <div class="slug text-colour-"></div>
                <h2 class="text-colour- title"></h2>
                <div class="teaser text-colour-"></div>
              </div>
              <div class="graphic-wrap"></div>
            </div>
          </div>
        </mock:shadow-root>
      </biggive-video-feature>
    `);
  });
});
