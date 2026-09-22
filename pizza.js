// Icons are optional: a CDN failure should never stop the rest of the page.
if (window.lucide) {
  window.lucide.createIcons();
}

if (window.gsap && window.ScrollTrigger) {
  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  // Lenis is optional as well. GSAP animations still work without it.
  if (window.Lenis) {
    const lenis = new window.Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  }

  const createScrollTrigger = (trigger, start = "top 80%") => ({
    trigger,
    start,

    toggleActions: "play none none none",
    once: true,
  });

  function navHeroSection() {
    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

    timeline
      .from("#logo, .navBAR, #reservebtn", {
        y: -40,
        autoAlpha: 0,
        duration: 0.6,
        delay: 0.2,
        stagger: 0.1,
      })
      .from(".leftHeadings", {
        x: -80,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.1,
      })
      .from(
        "#heroPIZZA",
        {
          x: 80,
          autoAlpha: 0,
          scale: 0.9,
          duration: 0.6,
        },
        "-=0.25",
      );
  }
  navHeroSection();
  function aboutUs() {
    const timeline = gsap.timeline({
      scrollTrigger: createScrollTrigger("#about"),
      defaults: { duration: 0.8, ease: "power3.out" },
    });

    timeline
      .from("#leftAboutUs", { x: -80, autoAlpha: 0 })
      .from("#rightAboutUs", { x: 80, autoAlpha: 0 }, "<");
  }
  // aboutUs();
  function chooseUs() {
    const timeline = gsap.timeline({
      scrollTrigger: createScrollTrigger("#Choose"),
      defaults: { ease: "power3.out" },
    });

    timeline
      .from(".chooseUsContent", {
        y: 35,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.12,
      })
      .from(
        ".chooseUsCard",
        {
          y: 55,
          autoAlpha: 0,
          duration: 0.6,
          stagger: 0.12,
        },
        "-=0.15",
      );
  }
  // chooseUs();
  function menuCards() {
    const timeline = gsap.timeline({
      scrollTrigger: createScrollTrigger("#menu"),
      defaults: { ease: "power3.out" },
    });

    timeline
      .from(".Menu_Section", {
        y: 35,
        autoAlpha: 0,
        duration: 0.55,
        stagger: 0.12,
      })
      .from(
        ".menuBtns",
        {
          y: 20,
          autoAlpha: 0,
          duration: 0.4,
          stagger: 0.08,
        },
        "-=0.2",
      )
      .from(
        "#menuCard1, #menuCard2, #menuCard3, #menuCard4",
        {
          y: 45,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.1,
        },
        "-=0.1",
      )
      .from("#menuButton", { y: 25, autoAlpha: 0, duration: 0.45 }, "-=0.1");
  }
  //menuCards();
  function gallery() {
    gsap.from("#imageHeadings", {
      scrollTrigger: createScrollTrigger("#gallary"),
      y: 35,
      autoAlpha: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "power3.out",
    });

    document.querySelectorAll("[id^='imageGrid']").forEach((card) => {
      gsap.from(card, {
        scrollTrigger: createScrollTrigger(card, "top 88%"),
        y: 45,
        autoAlpha: 0,
        duration: 0.55,
        ease: "power3.out",
      });
    });
  }
  gallery();
  function registration() {
    const timeline = gsap.timeline({
      scrollTrigger: createScrollTrigger("#registration"),
      defaults: { ease: "power3.out" },
    });

    timeline
      .from(".regHeadings", {
        x: -35,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
      })
      .from("#regForm", { x: 45, autoAlpha: 0, duration: 0.35 }, "-=0.15");
  }
  registration();
  function ctaSection() {
    const timeline = gsap.timeline({
      scrollTrigger: createScrollTrigger("#CTA"),
      defaults: { ease: "power3.out" },
    });

    timeline
      .from(".ctaLeftContent", {
        y: 30,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.08,
      })
      .from(
        ".ctaButtons",
        { y: 20, autoAlpha: 0, duration: 0.45, stagger: 0.08 },
        "-=0.15",
      )
      .from(
        ".ctaCard",
        { y: 35, autoAlpha: 0, duration: 0.5, stagger: 0.1 },
        "-=0.25",
      );
  }
  //ctaSection();
  // Images can change the page height after ScrollTrigger first measures it.
  window.addEventListener("load", () => ScrollTrigger.refresh(), {
    once: true,
  });
} else {
  console.warn(
    "GSAP or ScrollTrigger did not load; page content remains visible.",
  );
}
