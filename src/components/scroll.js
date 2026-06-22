export function initScrollReveal() {
  const elements = document.querySelectorAll(
    ".hero, .services, .why, .testimonials, .cta, .service-card, .why-card, .testimonial-card, .service-block, .job-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  elements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}