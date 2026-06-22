import page from "page";

import home from "./pages/home";
import about from "./pages/about";
import services from "./pages/services";
import careers from "./pages/careers";
import contact from "./pages/contact";

function render(content) {
  window.renderPage(content);

  requestAnimationFrame(() => {
    setActiveLink(window.location.pathname);
  });
}

page("/", () => render(home()));
page("/about", () => render(about()));
page("/services", () => render(services()));
page("/careers", () => render(careers()));
page("/contact", () => render(contact()));

export default page;

function setActiveLink(path) {
  document.querySelectorAll("nav a").forEach((link) => {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === path) {
      link.classList.add("active");
    }
  });
}
