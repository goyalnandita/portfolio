const words = ["software.", "embedded systems.", "real-world solutions."];
let i = 0, j = 0, isDeleting = false;
const typing = document.querySelector(".typing");

function typeEffect() {
  const current = words[i];
  typing.textContent = current.slice(0, j);

  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  else if (!isDeleting) isDeleting = true;
  else {
    isDeleting = false;
    i = (i + 1) % words.length;
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}
typeEffect();

const fades = document.querySelectorAll(".fade");
window.addEventListener("scroll", () => {
  fades.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});