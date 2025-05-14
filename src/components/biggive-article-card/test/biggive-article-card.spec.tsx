import { newSpecPage } from '@stencil/core/testing';
import { BiggiveArticleCard } from '../biggive-article-card';

describe('biggive-article-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveArticleCard],
      html: `<biggive-article-card></biggive-article-card>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-article-card>
        <mock:shadow-root>
        <div class="container space-below-0">
           <div class="background-colour-white button-colourblack clip-bottom-left-corner-true clip-top-right-corner-true date-colour-black image-label-colour-black main-title-colour-black sleeve slug-colour-black text-colour-black">
                  <div class="content-wrap">
                    <div class="meta">
                      <div class="slug text-colour-primary"></div>
                      <div class="date"></div>
                    </div>
                    <h3 class="title">
                      <a></a>
                    </h3>
                  </div>
         </div>
        </mock:shadow-root>
      </biggive-article-card>
    `);
  });
});
