document.addEventListener('DOMContentLoaded', () => {
  const block = document.querySelector('.overlay-block');
  const heroSection = document.querySelector('.container-hero');
  const buttons = heroSection.querySelectorAll('button, a');

  function toggleScrollBlock(isBlocked) {
    if (isBlocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  if (localStorage.getItem('heroClicked')) {
    block.style.display = 'none';
  } else {
    toggleScrollBlock(true);
  }

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      localStorage.setItem('heroClicked', 'true');
      block.style.display = 'none';
      toggleScrollBlock(false);
    });
  });

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !localStorage.getItem('heroClicked')) {
          block.classList.add('visible');
          toggleScrollBlock(true);
        } else {
          block.classList.remove('visible');
          toggleScrollBlock(false);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  observer.observe(heroSection);
});
