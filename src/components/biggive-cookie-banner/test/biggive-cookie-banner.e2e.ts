import { newE2EPage } from '@stencil/core/testing';

describe('biggive-cookie-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biggive-cookie-banner></biggive-cookie-banner>');

    const element = await page.find('biggive-cookie-banner');
    expect(element).toHaveClass('hydrated');
  });
});
