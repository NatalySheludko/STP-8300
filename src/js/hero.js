document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.overlay-block');
  const heroSection = document.querySelector('.container-hero');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          block.classList.add('visible');
        } else {
          block.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(heroSection);
});
