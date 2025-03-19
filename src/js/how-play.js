import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const breakpoints = 1200;
  let howPlaySwiper = null;

  function initHowPlaySwiper() {
    const isMobile = window.innerWidth < breakpoints;
    const swiperContainer = document.querySelector('.custom-swiper');

    if (swiperContainer) {
      if (isMobile && !howPlaySwiper) {
        howPlaySwiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      } else if (!isMobile && howPlaySwiper) {
        howPlaySwiper.destroy(true, true);
        howPlaySwiper = null;
      }
    }
  }

  initHowPlaySwiper();
  window.addEventListener('resize', initHowPlaySwiper);
});
