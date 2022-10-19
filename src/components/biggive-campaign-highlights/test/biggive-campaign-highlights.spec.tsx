import { newSpecPage } from '@stencil/core/testing';
import { BiggiveCampaignHighlights } from '../biggive-campaign-highlights';

describe('biggive-campaign-highlights', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveCampaignHighlights],
      html: `<biggive-campaign-highlights></biggive-campaign-highlights>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-campaign-highlights>
        <mock:shadow-root>
          <div class="container space-below-0">
            <div class="sleeve">
              <div class="meta-wrap">
                <div class="meta-item">
                  <span class="label"></span>
                  <span class="text">
                    –
                  </span>
                </div>
                <div class="meta-item">
                  <span class="label"></span>
                  <span class="text">
                    –
                  </span>
                </div>
              </div>
              <div class="progress-bar-wrap">
                <biggive-progress-bar colour-scheme="primary" counter="100"></biggive-progress-bar>
              </div>
              <div class="stat-wrap">
                <biggive-misc-icon icon="AlarmClock"></biggive-misc-icon>
                <biggive-misc-icon icon="Heart"></biggive-misc-icon>
              </div>
            </div>
          </div>
        </mock:shadow-root>
      </biggive-campaign-highlights>
    `);
  });
});
