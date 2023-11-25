ScrollReveal({ reset: true });

ScrollReveal().reveal(".header", {
  reset: false
});

ScrollReveal().reveal(".home", {
  duration: 3000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".products", {
  duration: 5000,
  move: 0
});

ScrollReveal().reveal(".about", {
  duration: 4000,
  scale: 0.85
});

ScrollReveal().reveal(".review", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".products", {
  duration: 3000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".About", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});
