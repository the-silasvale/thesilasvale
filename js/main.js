/* Silas Vale — $10k Editorial GSAP Animations */

(function () {
  "use strict";

  // Ensure GSAP and ScrollTrigger are loaded
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
    console.error("GSAP or ScrollTrigger not loaded.");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  // 1. Hero Marquee Carousel
  // Animate the two rows in opposite directions infinitely
  const track1 = document.querySelector("#marquee1 .hero__marquee-track");
  const track2 = document.querySelector("#marquee2 .hero__marquee-track");

  if (track1 && track2) {
    // Both tracks contain duplicated content (2 sets). Moving -50% creates a perfect loop.
    const loop1 = gsap.to(track1, {
      xPercent: -50,
      ease: "none",
      duration: 30,
      repeat: -1
    });

    // Start track 2 halfway or at a different position, moving the other way.
    // For right-moving, start at -50% and go to 0%
    gsap.set(track2, { xPercent: -50 });
    const loop2 = gsap.to(track2, {
      xPercent: 0,
      ease: "none",
      duration: 35,
      repeat: -1
    });
  }

  // 2. Scroll Reveal for Sections
  const revealSections = document.querySelectorAll(".scroll-reveal");
  revealSections.forEach((section) => {
    gsap.from(section, {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
      }
    });
  });

  // 3. Staggered Text Reveals
  // Used in the About section to reveal text line-by-line
  const textBlocks = document.querySelectorAll(".stagger-text");
  
  // Set initial state
  gsap.set(textBlocks, { yPercent: 110, rotateZ: 2, opacity: 0 });

  ScrollTrigger.batch(textBlocks, {
    start: "top 85%",
    onEnter: (elements, triggers) => {
      gsap.to(elements, {
        yPercent: 0,
        rotateZ: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power4.out",
        overwrite: true
      });
    }
  });

  // 4. Parallax Feature Covers & Series
  const parallaxCovers = document.querySelectorAll(".parallax-cover, .parallax-series");
  parallaxCovers.forEach((cover) => {
    gsap.to(cover, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: cover.parentElement,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    });
  });

  // 5. Horizontal Scroll Hijack for The Blackwood Saga
  // Pin the wrapper, slide the track left
  const horizWrap = document.getElementById("horizontalWrap");
  const horizTrack = document.getElementById("horizontalTrack");

  if (horizWrap && horizTrack) {
    // Calculate the distance to scroll horizontally
    function getScrollAmount() {
      let trackWidth = horizTrack.scrollWidth;
      return -(trackWidth - window.innerWidth + (window.innerWidth * 0.1)); // leaving some padding
    }

    const tween = gsap.to(horizTrack, {
      x: getScrollAmount,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: horizWrap,
      start: "top 10%", // pin slightly below the nav
      end: () => `+=${getScrollAmount() * -1}`, // scroll duration equals horizontal distance
      pin: true,
      animation: tween,
      scrub: 1,
      invalidateOnRefresh: true
    });
  }

  // 6. Magnetic Hover Links (Emil Kowalski Physics)
  const magneticEls = document.querySelectorAll(".magnetic");

  magneticEls.forEach((el) => {
    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      // Calculate mouse position relative to center of element
      const hX = e.clientX - rect.left - rect.width / 2;
      const hY = e.clientY - rect.top - rect.height / 2;
      
      // Move element slightly towards mouse
      gsap.to(el, {
        x: hX * 0.3,
        y: hY * 0.3,
        duration: 0.3,
        ease: "power2.out"
      });
    });

    el.addEventListener("mouseleave", () => {
      // Snap back to origin with springy feel
      gsap.to(el, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.3)"
      });
    });
  });

})();
