const CardsSwift = ()=>{
let swiperCards = new Swiper('.card__content', {
  loop:true,
  spaceBetween:32,
  grabCursor:true,

          pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints:{
    600:{
      slidesPerView:2,
    },
    968:{
      slidesPerView:3,
    }
  }

  // And if we need scrollbar
});
}
export default CardsSwift;