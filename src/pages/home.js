import { fetchDataFromTMDB } from "../services/fetchDataFromTMDB.js";

export function Home(navigateTo) {
  document.getElementById("root").innerHTML = "";

  fetchDataFromTMDB().then((movies) => {
    movies.forEach((movie) => {
      const movieElement = document.createElement("div");
      movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            <p>${movie.overview}</p>
            <button type="button" class="details-button" id="${movie.id}">Details</button>
          `;
      document.getElementById("root").appendChild(movieElement);
    });

    const detailsButtons = document.querySelectorAll(".details-button");
    detailsButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        const movieId = event.target.id;
        window.history.pushState({}, "", `/details?id=${movieId}`);
        navigateTo(`/details?id=${movieId}`);
      });
    });
  });
}
