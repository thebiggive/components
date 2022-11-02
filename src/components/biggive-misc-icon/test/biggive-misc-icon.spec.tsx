import { newSpecPage } from '@stencil/core/testing';
import { BiggiveMiscIcon } from '../biggive-misc-icon';

describe('biggive-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveMiscIcon],
      html: `<biggive-misc-icon icon="AlarmClock"></biggive-misc-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-misc-icon icon="AlarmClock">
        <div class="background-colour-primary misc-icon-item">
          <a href="#">
            <svg class="fill-white" height="512" viewBox="0 0 576 512" width="576" xmlns="http://www.w3.org/2000/svg">
              <path d="M192 25.4C175 9.6 152.2 0 127.2 0C74.6 0 32 42.6 32 95.2c0 18.8 5.5 36.3 14.9 51.1L192 25.4zM288 512c50.3 0 96.8-16.6 134.2-44.6l35.2 35.2c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-35.2-35.2c28-37.4 44.6-83.8 44.6-134.2C512 164.3 411.7 64 288 64S64 164.3 64 288c0 50.3 16.6 96.8 44.6 134.2L73.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l35.2-35.2c37.4 28 83.8 44.6 134.1 44.6zM529.1 146.4C538.5 131.6 544 114 544 95.2C544 42.6 501.4 0 448.8 0C423.8 0 401 9.6 384 25.4L529.1 146.4zM312 184v94.1l41 41c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-48-48c-4.5-4.5-7-10.6-7-17V184c0-13.3 10.7-24 24-24s24 10.7 24 24z"></path>
            </svg>
          </a>
        </div>
      </biggive-misc-icon>
    `);
  });
});
