import { fetchDataFromTMDB } from "../services/fetchDataFromTMDB.js";

export function Details(navigateFn, queryParams) {
  document.getElementById("root").innerHTML = "";
  const id = queryParams.get("id");
  fetchDataFromTMDB(id).then((movie) => {
    const movieElement = document.createElement("div");
    movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" />
            <p>${movie.overview}</p>
          `;
    document.getElementById("root").appendChild(movieElement);
  });
}
