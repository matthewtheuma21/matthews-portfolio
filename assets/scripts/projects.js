const rows = document.querySelectorAll('.project-row');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }

  });
}, {
  threshold: 0.15
});

rows.forEach((row) => {
  observer.observe(row);
});