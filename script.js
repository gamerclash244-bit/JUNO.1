// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Magnetic Button
const btn = document.querySelector(".modern-btn");

btn.addEventListener("mousemove", e => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;
  btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "translate(0,0)";
});