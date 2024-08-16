import { newE2EPage } from '@stencil/core/testing';

describe('biggive-container-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<biggive-container-card></biggive-container-card>');

    const element = await page.find('biggive-container-card');
    expect(element).toHaveClass('hydrated');
  });
});
