import { Details } from "./pages/details.js";
import { Home } from "./pages/home.js";

const router = {
  "/": Home,
  "/details": Details,
};

const render = () => {
  console.log("render function called");
  const url = new URL(window.location.href);
  const path = url.pathname;
  const queryParams = new URLSearchParams(url.search);
  console.log(`Rendering path: ${path} with params: ${queryParams.toString()}`);
  router[path](navigateFn, queryParams);
};

const navigateFn = (url) => {
  console.log(`Navigating to: ${url}`);
  history.pushState({}, "", url);
  render();
};

window.addEventListener("popstate", (event) => {
  console.log("popstate event", event.state);
  render();
});

navigateFn("/");
