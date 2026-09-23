import { newE2EPage } from '@stencil/core/testing';

describe('biggive-video', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biggive-video video-url="https://player.vimeo.com/video/123456789"></biggive-video>');

    const element = await page.find('biggive-video');
    expect(element).toHaveClass('hydrated');

    const vimeoIframe = await element.find('iframe[src*="player.vimeo.com"]');
    expect(vimeoIframe).toBeDefined();
  });
});
