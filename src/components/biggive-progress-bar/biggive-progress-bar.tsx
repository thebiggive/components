import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'biggive-progress-bar',
  styleUrl: 'biggive-progress-bar.scss',
  shadow: true,
})
export class BiggiveProgressBar {
  /**
   * Space below component
   */
  @Prop() spaceBelow: number = 0;
  /**
   * Colour Scheme
   */
  @Prop() colourScheme: string = 'primary';

  /**
   * Percentage to show + use for CSS width; round before input if desired
   */
  @Prop() counter?: number | null = null;

  render() {
    // important to use 'inherit' below rather than visible as the parent element may be hidden, in which case
    // this should not show up.
    const visibility = typeof this.counter === 'number' ? 'inherit' : 'hidden';

    return (
      <div style={{ visibility: visibility }} class={'progress-bar progress-bar-' + this.colourScheme + ' space-below-' + this.spaceBelow}>
        <div class="slider">
          <div class="progress" style={{ width: `${Math.min(this.counter ?? 0, 100)}%` }}></div>
        </div>
        <div class="counter">{this.counter}%</div>
      </div>
    );
  }
}
