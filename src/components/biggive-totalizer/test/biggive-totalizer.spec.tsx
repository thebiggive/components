import { newSpecPage } from '@stencil/core/testing';
import { BiggiveTotalizer } from '../biggive-totalizer';

describe('biggive-totalizer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [BiggiveTotalizer],
      html: `<biggive-totalizer>
        <biggive-totalizer-ticker-item figure="£1000" label="match funds remaining"></biggive-totalizer-ticker-item>
      </biggive-totalizer>`,
    });

    // It seems like in tests, the item copying post-render doesn't kick in – possibly because
    // some of our element selector presence guards don't pass in the `newSpecPage` run context?
    expect(page.root).toEqualHtml(`
      <biggive-totalizer>
        <mock:shadow-root>
          <div class="container space-below-0">
             <div>
               <div class="banner">
                 <div class="background-colour-secondary main-message-wrap text-colour-black"></div>
                 <div class="background-colour-primary text-colour-white ticker-wrap">
                   <div class="sleeve" id="sleeve_1">
                     <slot name="ticker-items"></slot>
                   </div>
                   <div class="sleeve sleeve-delayed-copy" id="sleeve_2"></div>
                   <div class="sleeve sleeve-delayed-copy" id="sleeve_3"></div>
                   <div class="sleeve sleeve-delayed-copy" id="sleeve_4"></div>
                 </div>
               </div>
             </div>
           </div>
        </mock:shadow-root>
        <biggive-totalizer-ticker-item figure="£1000" label="match funds remaining"></biggive-totalizer-ticker-item>
      </biggive-totalizer>
    `);
  });

  it('calculates duration for constant physical velocity when items are wider than container', async () => {
    const page = await newSpecPage({
      components: [BiggiveTotalizer],
      html: `<biggive-totalizer></biggive-totalizer>`,
    });

    const instance = page.rootInstance as any;
    // itemsWidth = 600, containerWidth = 400 => sleeveWidth = 600 => totalTravelDistance = 1200 => duration = 10s
    instance.setSpeed(600, 400);
    expect(page.root?.style.getPropertyValue('--ticker-duration')).toBe('10s');
  });

  it('calculates duration for constant physical velocity when container is wider than items', async () => {
    const page = await newSpecPage({
      components: [BiggiveTotalizer],
      html: `<biggive-totalizer></biggive-totalizer>`,
    });

    const instance = page.rootInstance as any;
    // itemsWidth = 100, containerWidth = 400 => sleeveWidth = 400 => totalTravelDistance = 800 => duration = 7s (~6.67 rounded)
    instance.setSpeed(100, 400);
    expect(page.root?.style.getPropertyValue('--ticker-duration')).toBe('7s');
  });

  it('ignores zero or negative dimensions without modifying duration property', async () => {
    const page = await newSpecPage({
      components: [BiggiveTotalizer],
      html: `<biggive-totalizer></biggive-totalizer>`,
    });

    const instance = page.rootInstance as any;
    instance.setSpeed(0, 400);
    expect(page.root?.style.getPropertyValue('--ticker-duration')).toBe('');

    instance.setSpeed(400, 0);
    expect(page.root?.style.getPropertyValue('--ticker-duration')).toBe('');
  });

  it('cleans up observers and listeners on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [BiggiveTotalizer],
      html: `<biggive-totalizer></biggive-totalizer>`,
    });

    const instance = page.rootInstance as any;
    const disconnectSpy = jest.fn();
    instance.resizeObserver = { disconnect: disconnectSpy };

    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');

    instance.disconnectedCallback();

    expect(disconnectSpy).toHaveBeenCalled();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('resize', expect.any(Function));

    removeEventListenerSpy.mockRestore();
  });
});
