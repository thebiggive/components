import { Component, Method, State, Prop, Element, h } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { spacingOption } from '../../globals/spacing-option';
import Swiper from 'swiper';
import { register } from 'swiper/element/bundle';


@Component({
  tag: 'biggive-carousel',
  styleUrl: 'biggive-carousel.scss',
  shadow: true,
  styles: [],
})
export class BiggiveCarousel {
  @Element() host: HTMLBiggiveCarouselElement;

  @State() versions: [];
  @Prop() spaceBelow: spacingOption = 4;
  @Prop() columnCount: 1 | 2 | 3 | 4 | 5 = 3;
  @Prop() buttonBackgroundColour: brandColour = 'white';
  @Prop() buttonIconColour: brandColour = 'primary';

  private currentTab = 0;
  private itemCount = 0;
  private itemWidthPx = 0;
  private columnGapPx = 0;
  private sleeve: HTMLElement;

  componentDidLoad() {

    register();
    // this.sleeve = this.host.shadowRoot?.querySelector<HTMLElement>('.sleeve')!;
    // this.resizeToFitContent();

    const swiper = new Swiper('.swiper', {
      // speed: 400,
      // spaceBetween: 100,
    });
    swiper.init();
    console.log('initialised swiper xx :', swiper);
    swiper.autoplay.start();
  }

  @Method()
  public async resizeToFitContent() {
    let children = new Array<HTMLElement>();
    Array.from(this.host.children).forEach(item => {
      if (!item.classList.contains('hidden')) {
        children.push(item as HTMLElement);
      }
    });

    this.itemCount = children.length;

    if (children.length > 0) {
      this.columnGapPx = 30;

      this.itemWidthPx = (this.sleeve.parentElement?.offsetWidth! - (this.columnCount - 1) * this.columnGapPx) / this.columnCount;

      this.sleeve.style.width = (this.itemWidthPx + this.columnGapPx) * children.length + 'px';
      this.sleeve.style.height = this.sleeve.style.height;
      this.sleeve.style.transform = 'translate3d(0px, 0, 0)';

      children.forEach(el => {
        el.style.width = this.itemWidthPx + 'px';
        el.style.marginRight = this.columnGapPx + 'px';
      });
    }
  }

  //
  // private clickPrevHandler = () => {
  //   this.showTab('PREV');
  // };
  //
  // private clickNextHandler = () => {
  //   this.showTab('NEXT');
  // };

  render() {
    // const slides = Array.from(this.sleeve.children);
    //
    // const slidesWrapped = slides.map((slide: Element) => slide);

    return (
      <div
        class={
          'container column-count-' +
          this.columnCount +
          ' space-below-' +
          this.spaceBelow +
          ' button-background-colour-' +
          this.buttonBackgroundColour +
          ' button-icon-colour-' +
          this.buttonIconColour
        }
      >
        <div class="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Slide 1</div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
          </div>
        </div>
      </div>
    );
  }
}
