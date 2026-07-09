document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".service-card, .features article, .guide-card, .partner-box");
  targets.forEach(el => el.classList.add("fade-in"));
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });
  targets.forEach(el => observer.observe(el));
});