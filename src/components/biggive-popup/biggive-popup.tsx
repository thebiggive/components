import { Component, Method, h } from '@stencil/core';

@Component({
  tag: 'biggive-popup',
  styleUrl: 'biggive-popup.scss',
  shadow: true,
})
export class BiggivePopup {
  private popup: HTMLDivElement;

  @Method()
  async openFromOutside() {
    this.popup.setAttribute('data-visible', 'true');
    this.popup.setAttribute('tabindex', '0');
    this.popup.focus();
  }

  @Method()
  async closeFromOutside() {
    this.popup.setAttribute('data-visible', 'false');
    this.popup.setAttribute('tabindex', '-1');
  }

  private closeFromWithin = (event: any) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('close')) {
      this.popup.setAttribute('data-visible', 'false');
      this.popup.setAttribute('tabindex', '-1');
    }
  };

  render() {
    return (
      <div class="popup" ref={el => (this.popup = el as HTMLDivElement)} tabindex="-1" onClick={this.closeFromWithin}>
        <div class="sleeve">
          <div class="header">
            <div class="close" onClick={this.closeFromWithin}></div>
          </div>
          <div class="content">
            <slot></slot>
          </div>
        </div>
      </div>
    );
  }
}
