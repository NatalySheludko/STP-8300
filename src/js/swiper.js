import Swiper from 'swiper/bundle';
import 'swiper/swiper-bundle.css';

document.addEventListener('DOMContentLoaded', function () {
  const breakpoints = 1200;

  // Массив для всіх конфігурацій
  const swipersConfig = [
    { containerClass: '.reviews-swiper', swiperInstance: null },
    { containerClass: '.custom-swiper', swiperInstance: null },
    { containerClass: '.gallery-swiper', swiperInstance: null },
  ];

  // Функція для ініціалізації свайперів
  function initSwiper(swiperContainer, swiperInstance) {
    const isMobile = window.innerWidth < breakpoints;

    if (swiperContainer) {
      if (isMobile && !swiperInstance) {
        swiperContainer.classList.add('is-swiper');
        swiperInstance = new Swiper(swiperContainer, {
          slidesPerView: 1,
          loop: true,
          spaceBetween: 16,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      } else if (!isMobile && swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
        swiperContainer.classList.remove('is-swiper');
      }
    }

    return swiperInstance;
  }

  // Ініціалізація всіх свайперів
  swipersConfig.forEach(config => {
    const swiperContainer = document.querySelector(config.containerClass);
    config.swiperInstance = initSwiper(swiperContainer, config.swiperInstance);
  });

  // Оновлення свайперів при зміні розміру
  window.addEventListener('resize', function () {
    swipersConfig.forEach(config => {
      const swiperContainer = document.querySelector(config.containerClass);
      config.swiperInstance = initSwiper(
        swiperContainer,
        config.swiperInstance
      );
    });
  });
});
