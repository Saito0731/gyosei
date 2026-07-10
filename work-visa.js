document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".paper, .cards article, .dark-card, .steps div, .renewal-grid article, .doc-grid article, .lang-card, .faq details, .certificate");
  targets.forEach(el => el.classList.add("fade-in"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
});