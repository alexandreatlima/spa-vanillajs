import { Button } from "../Button/index.js";

export function Card(movie, fn) {
  const mainContainerCard = document.createElement("div");
  const cardTitle = document.createElement("h2");
  const cardImg = document.createElement("img");
  const cardBtn = Button("See more!", movie.id, fn);

  mainContainerCard.classList.add("mainContainerCard");
  cardImg.classList.add("cardImg");

  cardTitle.innerText = movie.title;

  cardImg.setAttribute(
    "src",
    `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  );

  mainContainerCard.appendChild(cardTitle);
  mainContainerCard.appendChild(cardImg);
  mainContainerCard.appendChild(cardBtn);

  return mainContainerCard;
}
