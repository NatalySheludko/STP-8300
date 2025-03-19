import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const breakpoints = 1200;
  let gallerySwiper = null;

  function initGallerySwiper() {
    const isMobile = window.innerWidth < breakpoints;
    const swiperContainer = document.querySelector('.gallery-swiper');

    if (swiperContainer) {
      if (isMobile && !gallerySwiper) {
        gallerySwiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      } else if (!isMobile && gallerySwiper) {
        gallerySwiper.destroy(true, true);
        gallerySwiper = null;
      }
    }
  }

  initGallerySwiper();
  window.addEventListener('resize', initGallerySwiper);
});
