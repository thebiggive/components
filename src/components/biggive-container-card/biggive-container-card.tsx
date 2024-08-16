import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'biggive-container-card',
  styleUrl: 'biggive-container-card.scss',
  shadow: true,
})
export class BiggiveContainerCard {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
