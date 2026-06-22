import "./styles/variables.css";
import "./styles/base.css";

import { initIcons } from "./components/icons";
import { initScrollReveal } from "./components/scroll";

import page from "./router";

import { navbar } from "./components/navbar";
import { footer } from "./components/footer";

document.querySelector("#app").innerHTML = `
  ${navbar()}
  <main id="view"></main>
  ${footer()}
`;

function renderPage(content) {
  const view = document.querySelector("#view");

  view.style.opacity = 0;

  setTimeout(() => {
    view.innerHTML = content;
    view.style.opacity = 1;

    initScrollReveal();
    initIcons();
  }, 120);
}

window.renderPage = renderPage;

page.start();

initIcons();
initScrollReveal();

document.body.classList.add("loaded");