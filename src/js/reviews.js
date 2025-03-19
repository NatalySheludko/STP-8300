import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const breakpoints = 1200;
  let reviewsSwiper = null;
  const swiperContainer = document.querySelector('.reviews-swiper');

  function initReviewsSwiper() {
    const isMobile = window.innerWidth < breakpoints;

    if (swiperContainer) {
      if (isMobile && !reviewsSwiper) {
        swiperContainer.classList.add('is-swiper'); 
        reviewsSwiper = new Swiper(swiperContainer, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      } else if (!isMobile && reviewsSwiper) {
        reviewsSwiper.destroy(true, true);
        reviewsSwiper = null;
        swiperContainer.classList.remove('is-swiper');
      }
    }
  }

  initReviewsSwiper();
  window.addEventListener('resize', initReviewsSwiper);
});
