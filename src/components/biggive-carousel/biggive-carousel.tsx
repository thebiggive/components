import { Component, Method, State, Prop, Element, h, getAssetPath } from '@stencil/core';
import { brandColour } from '../../globals/brand-colour';
import { spacingOption } from '../../globals/spacing-option';
import { register as registerSwiper } from 'swiper/element/bundle';
import 'swiper/swiper-bundle.min.css';

@Component({
  tag: 'biggive-carousel',
  styleUrl: 'biggive-carousel.scss',
  shadow: true,
  styles: [],
})
export class BiggiveCarousel {
  @State() versions: [];
  @Prop() spaceBelow: spacingOption = 4;
  @Prop() columnCount: 1 | 2 | 3 | 4 | 5 = 3;
  @Prop() buttonBackgroundColour: brandColour = 'white';
  @Prop() buttonIconColour: brandColour = 'primary';

  @Element() element: HTMLBiggiveCarouselElement;

  componentDidLoad() {
    registerSwiper();
  }

  render() {
    const slidesContents = Array.from(this.element.children);
    const swiperSlides = slidesContents.map(element => (
      <swiper-slide>
        <div innerHTML={element.outerHTML}></div>
      </swiper-slide>
    ));

    return (
      <div>
        <swiper-container
          class="mySwiper"
          space-between="30"
          slides-per-view="auto"
          pagination-clickable="true"
          speed="500"
          autoplay="false"
          loop="true"
          centered-slides="false"
          navigation-next-el="#carousel-button-next"
          navigation-prev-el="#carousel-button-prev"
        >
          {swiperSlides}
        </swiper-container>
        <div class="charity-carousel-navigation">
          <div role="button" id="carousel-button-prev" class="button next">
            <img width="35px" src={getAssetPath('assets/images/arrow-prev-with-circle.svg')} alt="Previous" />
          </div>
          <div role="button" id="carousel-button-next" class="button prev" title="Next">
            <img width="35px" src={getAssetPath('assets/images/arrow-next-with-circle.svg')} alt="Next" />
          </div>
        </div>
      </div>
    );
  }
}
