gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

gsap.from(".tourism", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
  scrollTrigger: {
    trigger: ".header",
    start: "top 80%",
    toggleActions: "play none none reverse"
  }
});



const content = document.querySelector("section");

let currentPos = window.pageYOffset;

const callDistort = function() {
    const newPos = window.pageYOffset;
    const diff = newPos - currentPos;
    const speed = diff * 0.35;

    content.style.transform = "skewY(" + speed + "deg)";
    currentPos = newPos;
    requestAnimationFrame(callDistort);
};
callDistort();

ScrollSmoother.create({
  wrapper: ".smooth-wrapper",
  content: ".smooth-content",
  smooth: 2,
  effects: true
});

