import { newE2EPage } from '@stencil/core/testing';

describe('biggive-image-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biggive-image-card></biggive-image-card>');

    const element = await page.find('biggive-image-card');
    expect(element).toHaveClass('hydrated');
  });
});
