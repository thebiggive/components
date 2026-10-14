import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-totalizer',
  styleUrl: 'biggive-totalizer.scss',
  shadow: true,
})
export class BiggiveTotalizer {
  private lastItemsWidth: number = 0;
  private lastWrapperWidth: number = 0;
  private resizeObserver: ResizeObserver | null = null;
  private resizeListener: (() => void) | null = null;

  @Element() host: HTMLBiggiveTotalizerElement;
  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;
  /**
   * Primary banner colour
   */
  @Prop() primaryColour: string = 'primary';

  /**
   * Primary text colour
   */
  @Prop() primaryTextColour: string = 'white';

  /**
   * Secondary banner colour
   */
  @Prop() secondaryColour: string = 'secondary';

  /**
   * Secondary text colour
   */
  @Prop() secondaryTextColour: string = 'black';

  /**
   * Primary message
   */
  @Prop() mainMessage: string;

  private setSpeed(itemsWidth: number, containerWidth: number) {
    if (itemsWidth <= 0 || containerWidth <= 0) {
      return;
    }

    if (itemsWidth === this.lastItemsWidth && containerWidth === this.lastWrapperWidth) {
      // Some browsers fire 'resize' overzealously on scroll; we don't want to cause extra paints if nothing
      // relevant changed.
      return;
    }

    this.lastItemsWidth = itemsWidth;
    this.lastWrapperWidth = containerWidth;

    const sleeveWidth = Math.max(containerWidth, itemsWidth);
    const totalTravelDistance = 2 * sleeveWidth;
    const duration = Math.max(1, Math.round(totalTravelDistance / 120));

    this.host.style.setProperty('--ticker-duration', `${duration}s`);
  }

  private updateSpeed = () => {
    const wrapper = this.host.shadowRoot?.querySelector('.ticker-wrap') as HTMLDivElement | null;
    const tickerItemsWrapper = this.host.querySelector(`[slot="ticker-items"]`) as HTMLDivElement | null;

    if (tickerItemsWrapper && wrapper) {
      this.setSpeed(tickerItemsWrapper.scrollWidth || tickerItemsWrapper.clientWidth, wrapper.clientWidth);
    }
  };

  componentDidLoad() {
    const wrapper = this.host.shadowRoot?.querySelector('.ticker-wrap') as HTMLDivElement | null;
    const tickerItemsWrapper = this.host.querySelector(`[slot="ticker-items"]`) as HTMLDivElement | null;
    const slot = this.host.shadowRoot?.querySelector('slot[name="ticker-items"]') as HTMLSlotElement | null;

    // React to Angular projected content changes
    if (slot) {
      slot.addEventListener('slotchange', () => {
        const currentTickerItemsWrapper = this.host.querySelector(`[slot="ticker-items"]`) as HTMLDivElement | null;
        if (currentTickerItemsWrapper && this.resizeObserver) {
          this.resizeObserver.observe(currentTickerItemsWrapper);
        }
        this.updateSpeed();
      });
    }

    // React to size changes from font loading, content updates, or viewport resize
    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => this.updateSpeed());
      if (wrapper) {
        this.resizeObserver.observe(wrapper);
      }
      if (tickerItemsWrapper) {
        this.resizeObserver.observe(tickerItemsWrapper);
      }
    }

    // Ensure web fonts are loaded before computing final dimensions
    if (typeof document !== 'undefined' && 'fonts' in document && 'ready' in document.fonts) {
      void document.fonts.ready.then(() => this.updateSpeed());
    }

    this.resizeListener = () => this.updateSpeed();
    window.addEventListener('resize', this.resizeListener);

    this.updateSpeed();
  }

  disconnectedCallback() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
    if (this.resizeListener) {
      window.removeEventListener('resize', this.resizeListener);
      this.resizeListener = null;
    }
  }

  render() {
    return (
      <div class={'container space-below-' + this.spaceBelow}>
        <div>
          <div class="banner">
            <div class={'main-message-wrap background-colour-' + this.secondaryColour + ' text-colour-' + this.secondaryTextColour}>{this.mainMessage}</div>
            <div class={'ticker-wrap background-colour-' + this.primaryColour + ' text-colour-' + this.primaryTextColour}>
              <div id="sleeve_1" class="sleeve">
                <slot name="ticker-items"></slot>
              </div>
              <div id="sleeve_2" class="sleeve sleeve-delayed-copy">
                {/* Contents for these 3 are copied in TS and copies shown or hidden based on available space */}
              </div>
              <div id="sleeve_3" class="sleeve sleeve-delayed-copy"></div>
              <div id="sleeve_4" class="sleeve sleeve-delayed-copy"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
