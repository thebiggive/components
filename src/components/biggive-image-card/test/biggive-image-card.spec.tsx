import { newSpecPage } from '@stencil/core/testing';
import { BiggiveImageCard } from '../biggive-image-card';

describe('biggive-image-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveImageCard],
      html: `<biggive-image-card></biggive-image-card>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-image-card>
        <mock:shadow-root>
        <div class="container space-below-0">
           <div class="background-colour-white button-colourblack clip-bottom-left-corner-true clip-top-right-corner-true date-colour-black image-label-colour-black main-title-colour-black sleeve slug-colour-black text-colour-black" style="background-image: url('');">
                  <div class="content-wrap">
                    <div class="meta">
                      <div class="slug text-colour-primary"></div>
                      <div class="date"></div>
                    </div>
                    <div class="main-image-container">
                      <div class="image-wrap">
                        <img>
                      </div>
                    </div>
                    <h3 class="title">
                      <a></a>
                    </h3>
                    <div class="image-group">
                    <div class="image-container">
                      <div class="image-wrap" style="background-image: url('undefined');">
                        <img>
                      </div>
                    </div>
                    <div class="image-container">
                      <div class="image-wrap" style="background-image: url('undefined');">
                        <img>
                      </div>
                   </div>
                 </div>
                 <div class="image-label"></div>
                </div>
         </div>
        </mock:shadow-root>
      </biggive-image-card>
    `);
  });
});
