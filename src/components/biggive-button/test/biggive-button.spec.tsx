import { newSpecPage } from '@stencil/core/testing';
import { BiggiveButton } from '../biggive-button';

describe('biggive-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveButton],
      html: `<biggive-button colour-scheme="primary" label="Donate now" url="https://www.google.com"></biggive-button>`,
    });
    expect(page.root).toEqualHtml(`
      <biggive-button colour-scheme="primary" label="Donate now" url="https://www.google.com">
        <mock:shadow-root>
          <div class="biggive centered-false container space-below-1">
            <a class="button button-primary full-width-false rounded-false size-medium" href="https://www.google.com" pointer-events="auto" role="button" target="_self">
              Donate now
            </a>
          </div>
        </mock:shadow-root>
      </biggive-button>
    `);
  });

  it('emits doButtonClick for normal links', async () => {
    const page = await newSpecPage({
      components: [BiggiveButton],
      html: `<biggive-button label="Donate now" url="https://www.google.com"></biggive-button>`,
    });

    const onClick = jest.fn();
    page.root?.addEventListener('doButtonClick', onClick);

    const link = page.root?.shadowRoot?.querySelector('a') as HTMLAnchorElement;
    link.click();
    await page.waitForChanges();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('emits doButtonClick for no-op links', async () => {
    const page = await newSpecPage({
      components: [BiggiveButton],
      html: `<biggive-button label="Donate now" url="#"></biggive-button>`,
    });

    const onClick = jest.fn();
    page.root?.addEventListener('doButtonClick', onClick);

    const button = page.root?.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();
    await page.waitForChanges();

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('does not emit doButtonClick when disabled', async () => {
    const page = await newSpecPage({
      components: [BiggiveButton],
      html: `<biggive-button label="Donate now" url="#" disabled></biggive-button>`,
    });

    const onClick = jest.fn();
    page.root?.addEventListener('doButtonClick', onClick);

    const button = page.root?.shadowRoot?.querySelector('button') as HTMLButtonElement;
    button.click();
    await page.waitForChanges();

    expect(onClick).not.toHaveBeenCalled();
  });
});
