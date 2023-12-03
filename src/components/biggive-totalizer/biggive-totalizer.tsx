import { Component, Element, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-totalizer',
  styleUrl: 'biggive-totalizer.scss',
  shadow: true,
})
export class BiggiveTotalizer {
  private lastWrapperWidth: number = 0;

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
    console.log('setSpeed() called with itemsWidth=' + itemsWidth + ', containerWidth=' + containerWidth);

    if (containerWidth === this.lastWrapperWidth) {
      // Some browsers fire 'resize' overzealously on scroll; we don't want to cause extra paints if nothing
      // relevant changed.
      return;
    }

    let sleeves: HTMLDivElement[] = [];
    for (const ii in [1, 2, 3, 4]) {
      const sleeve = this.host.shadowRoot?.querySelector('.ticker-wrap #sleeve_' + ii) as HTMLDivElement | null;
      if (sleeve) {
        sleeves.push(sleeve);
        // Restart the animation(s) on window resize to reduce the chance of jankiness.
        // https://stackoverflow.com/a/45036752/2803757
        sleeve.style.animationName = 'none';
      }
    }

    this.lastWrapperWidth = containerWidth;

    if (sleeves.length === 0) {
      console.log('sleeves missing, skipping setSpeed()');
      return;
    }

    // We've seen the initial calculation exclude the ~30px per set of values end padding before,
    // and it's safe to err on the side of more copies to reduce the chance of abrupt early loop
    // ends, so we add a buffer of 40px to the calculation when deciding how many copies to use.
    const sleeveCount = Math.max(1, Math.min(4, Math.ceil((2 * (40 + itemsWidth)) / containerWidth)));
    this.host.style.setProperty('--ticker-end-left', `-${sleeveCount * 100}%`);

    const duration = Math.round((itemsWidth / 100) * sleeveCount);

    for (let ii = 1; ii <= sleeveCount; ii++) {
      const sleeve = sleeves[ii - 1];
      if (sleeve) {
        sleeve.style.animationDuration = duration + 's';
        // https://stackoverflow.com/a/45847760
        sleeve.style.animationDelay = (duration * (ii - 1)) / sleeveCount + 's';
        sleeve.style.display = 'inline-flex';
        sleeve.style.animationName = 'ticker';
      }
    }
  }

  componentDidRender() {
    const wrapper = this.host.shadowRoot?.querySelector('.ticker-wrap') as HTMLDivElement;

    const tickerItemsInternalWrapper: HTMLDivElement | null = this.host.querySelector(`[slot="ticker-items"]`);
    const sleeve1: HTMLDivElement | null | undefined = this.host.shadowRoot?.querySelector('.ticker-wrap #sleeve_1');
    const sleeve2: HTMLDivElement | null | undefined = this.host.shadowRoot?.querySelector('.ticker-wrap #sleeve_2');
    const sleeve3: HTMLDivElement | null | undefined = this.host.shadowRoot?.querySelector('.ticker-wrap #sleeve_3');
    const sleeve4: HTMLDivElement | null | undefined = this.host.shadowRoot?.querySelector('.ticker-wrap #sleeve_4');

    if (!tickerItemsInternalWrapper || !sleeve1) {
      console.log('tickerItemsInternalWrapper or sleeve1 is missing, skipping totalizer animation setup');
      return;
    }

    // Clone all children of the ticker items internal wrapper and append them, so the ticker can show items without
    // a blank break. Sleeve 2 and up will animate on delays per https://stackoverflow.com/a/45847760.
    tickerItemsInternalWrapper.childNodes.forEach((child: HTMLElement) => {
      sleeve2 && sleeve2.appendChild(child.cloneNode(true)); // Deep clone all items.
      sleeve3 && sleeve3.appendChild(child.cloneNode(true));
      sleeve4 && sleeve4.appendChild(child.cloneNode(true));
    });

    this.setSpeed(tickerItemsInternalWrapper.clientWidth, wrapper.clientWidth);
    window.addEventListener('resize', () => {
      this.setSpeed(tickerItemsInternalWrapper.clientWidth, wrapper.clientWidth);
    });
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
