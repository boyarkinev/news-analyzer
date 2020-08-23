const SLIDER_PARAMS = {
  slideClass: 'slider__slide',
  wrapperClass: 'slider__wrapper',


  navigation: {
    nextEl: '.slider__button_next',
    prevEl: '.slider__button_prev',
  },

  containerModifierClass: 'slider__container',
  slideClass: 'commit-card',

  grabCursor: true,
  effect: 'slide',
  slidesPerView: 'auto',
  spaceBetween: 16,
  slidesOffsetBefore: 8,

  pagination: {
    el: '.slider__pagination',
    bulletActiveClass: 'slider__pagination-bullet_active',
    bulletClass: 'slider__pagination-bullet',
    clickable: true,
    type: 'bullets',
  },

  breakpoints: {
    320: {
      spaceBetween: 8,
      centeredSlides: true,
      slidesOffsetBefore: 0,
      
    },
    540: {
      spaceBetween: 8,
      centeredSlides: false,
      slidesOffsetBefore: 16,
    },
    768: {
      spaceBetween: 16,
      centeredSlides: false,
      slidesOffsetBefore: 16,
      
    },
  }
}

export default SLIDER_PARAMS