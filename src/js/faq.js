document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion');

  if (accordions.length > 0) {
    accordions[0].classList.add('active');
    accordions[0].querySelector('.accordion-panel').style.display = 'block';
  }

  accordions.forEach(accordion => {
    const trigger = accordion.querySelector('.accordion-trigger');
    const panel = accordion.querySelector('.accordion-panel');

    trigger.addEventListener('click', function () {
      const isActive = accordion.classList.contains('active');

      accordions.forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-panel').style.display = 'none';
      });

      if (!isActive) {
        accordion.classList.add('active');
        panel.style.display = 'block';
      }
    });
  });
});
