import { newSpecPage } from '@stencil/core/testing';
import { BiggiveSocialIcon } from '../biggive-social-icon';

describe('biggive-social-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveSocialIcon],
      html: `<biggive-social-icon service="YouTube" url="https://youtube.com"></biggive-social-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-social-icon service="YouTube" url="https://youtube.com">
        <mock:shadow-root>
          <div class="background-colour-primary social-icon-item">
            <a aria-label="Big Give on YouTube" href="https://youtube.com" target="_blank" rel="noopener">
              <svg class="fill-white" height="512" overflow="hidden" viewBox="0 0 576 512" width="576" xmlns="http://www.w3.org/2000/svg">
                <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
              </svg>
            </a>
          </div>
        </mock:shadow-root>
      </biggive-social-icon>
    `);
  });
});
