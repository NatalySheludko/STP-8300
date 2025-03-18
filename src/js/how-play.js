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
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
              return `
                <svg class="${className}" width="8" height="8">
                  <use href="./img/sprite.svg#${
                    index === this.realIndex ? 'icon-dote' : 'icon-border-dote'
                  }"></use>
                </svg>`;
            },
          },
          on: {
            slideChange: function () {
              document
                .querySelectorAll('.swiper-pagination svg use')
                .forEach((useEl, index) => {
                  useEl.setAttribute(
                    'href',
                    `./img/sprite.svg#${
                      index === this.realIndex
                        ? 'icon-dote'
                        : 'icon-border-dote'
                    }`
                  );
                });
            },
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

  // Викликаємо при завантаженні
  initSwiper();

  // Відстежуємо зміну розміру екрана
  window.addEventListener('resize', initSwiper);
});
