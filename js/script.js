// On scrolltrigger show every skills from the "about me" section
gsap.from(".about-me .skill-list li", 1, {
  scrollTrigger: {
    trigger: ".about-me .skill-list li",
    start: "top bottom",
  },
  scale: 0,
  stagger: {
    each: 0.3,
    from: "top",
  },
  duration: 2.5,
  ease: "elastic.out(1, 0.5)",
});

// Show my projects on scroll trigger
document.querySelectorAll(".projects article").forEach((article) => {
  gsap.from(article, 1, {
    scrollTrigger: {
      trigger: article,
      start: "top bottom",
    },
    x: "-100%",
  });
});
