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
     <div class="add-animation-false background-colour-primary clip-bottom-left-corner-true clip-top-right-corner-true container space-below-0">
        <a>
         <div class="sleeve text-align-center text-colour-black">
           <div class="content-wrap">
             <div class="main-image-container">
               <div class="image-wrap">
                 <img>
               </div>
             </div>
             <div class="teaser"></div>
           </div>
         </div>
       </a>
     </div>
    </mock:shadow-root>
    `);
  });
});
