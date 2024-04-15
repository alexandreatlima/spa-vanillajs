export function Button(textBtn, contentId, fn) {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.setAttribute("id", `detailsBtn-${contentId}`);
  btn.innerText = textBtn;

  if (fn) {
    btn.addEventListener("click", fn);
  }

  return btn;
}
