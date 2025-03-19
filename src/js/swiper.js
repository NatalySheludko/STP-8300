import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  let swiperInstance = null;

  function initSwiper() {
    if (window.innerWidth < 1200) {
      if (!swiperInstance) {
        swiperInstance = new Swiper('.swiper', {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  }

  initSwiper();

  window.addEventListener('resize', initSwiper);
});
