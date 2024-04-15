import { Card } from "../components/Card/index.js";
import { fetchDataFromTMDB } from "../services/fetchDataFromTMDB.js";

export function Home(navigateTo) {
  const root = document.getElementById("root");
  root.innerHTML = "";
  const homeTitle = document.createElement("h1");
  homeTitle.innerText = "SPA Movies";
  root.appendChild(homeTitle);

  fetchDataFromTMDB().then((movies) => {
    movies.forEach((movie) => {
      root.appendChild(
        Card(movie, (event) => {
          const movieId = event.target.id.split("-")[1];
          window.history.pushState({}, "", `/details?id=${movieId}`);
          navigateTo(`/details?id=${movieId}`);
        })
      );
    });
  });
}
