document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".paper, .cards article, .timeline div, .country-grid article, .lang-card, .faq details");
  items.forEach(el => el.classList.add("fade-in"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  items.forEach(el => observer.observe(el));
});