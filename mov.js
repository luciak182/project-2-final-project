// Výběr elementů z DOM
const posterSection = document.getElementById("posters");
const select = document.getElementById("select");

// Funkce volá API a uloží obrázek a jméno do nového img
const moviesToWebsite = (keyword) => {
  fetch("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const selectedPosters = data.slice(0, 10);

      posterSection.innerHTML = "";

      selectedPosters.forEach((item) => {
        if (!item.show.image) return;

        const newImg = document.createElement("img");
        newImg.src = item.show.image.medium;
        newImg.alt = item.show.name;

        posterSection.appendChild(newImg);
      });
    });
};

// Zavolá funkci na základě hodnoty
select.addEventListener("change", () => {
  const value = select.value;
  if (value) {
    moviesToWebsite(value);
  }
});
