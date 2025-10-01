const arrow = document.getElementById("arrow");

// Zobrazeni sipky po odscrollovani dolu
window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    arrow.classList.add("arrow-visible");
  } else {
    arrow.classList.remove("arrow-visible");
  }
});

// Navrat nahoru po kliknuti na sipku
arrow.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
