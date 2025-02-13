import { newSpecPage } from '@stencil/core/testing';
import { BiggiveSocialIcon } from '../biggive-social-icon';

describe('biggive-social-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveSocialIcon],
      html: `<biggive-social-icon service="Twitter" url="https://x.com"></biggive-social-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-social-icon service="Twitter" url="https://x.com">
        <mock:shadow-root>
          <div class="background-colour-primary social-icon-item">
            <a aria-label="Big Give on Twitter" href="https://x.com" target="_blank" rel="noopener">
              <svg class="fill-white" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
          </div>
        </mock:shadow-root>
      </biggive-social-icon>
    `);
  });
});
