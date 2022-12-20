import { Component, Prop, Element, h } from '@stencil/core';

@Component({
  tag: 'biggive-grid',
  styleUrl: 'biggive-grid.scss',
  shadow: true,
})
export class BiggiveGrid {
  @Element() el: HTMLElement;

  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 4;

  /**
   * Number of columns in grid
   */
  @Prop() columnCount: number = 3;

  /**
   * Gap between columns
   */
  @Prop() columnGap: number = 3;

  getChildFillerCount() {
    let slotted = this.el.children;
    return this.columnCount - (slotted.length % this.columnCount);
  }

  /**
   * Should have `justify-content: space-between`?
   */
  @Prop() spaceBetween: boolean = false;

  render() {
    return (
      <div
        class={
          'grid column-count-' +
          this.columnCount +
          ' column-gap-' +
          this.columnGap +
          ' space-below-' +
          this.spaceBelow +
          (this.spaceBetween ? ' space-between' : '') +
          ' child-filler-count-' +
          this.getChildFillerCount()
        }
      >
        <slot></slot>
      </div>
    );
  }
}
