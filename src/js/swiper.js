import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  let swiperInstances = [];
  const breakpoints = 1200;

  function initSwiper() {
    const isMobile = window.innerWidth < breakpoints;

    const swipers = document.querySelectorAll('.swiper');

    swipers.forEach((swiperContainer, index) => {
      const isGallery = swiperContainer.classList.contains('gallery-swiper');
      const isCustom = swiperContainer.classList.contains('custom-swiper');
      const isReviews = swiperContainer.classList.contains('reviews-swiper');

      if (isMobile) {
        swiperContainer.classList.remove(
          'gallery-custom-slide-container',
          'custom-slide-container',
          'reviews-custom-slide-container'
        );

        if (!swiperInstances[index]) {
          swiperInstances[index] = new Swiper(swiperContainer, {
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
        if (swiperInstances[index]) {
          swiperInstances[index].destroy(true, true);
          swiperInstances[index] = null;
        }

        if (isGallery) {
          swiperContainer.classList.add('gallery-custom-slide-container');
        } else if (isCustom) {
          swiperContainer.classList.add('custom-slide-container');
        } else if (isReviews) {
          swiperContainer.classList.add('reviews-custom-slide-container');
        }
      }
    });
  }

  initSwiper();
  window.addEventListener('resize', initSwiper);
});
