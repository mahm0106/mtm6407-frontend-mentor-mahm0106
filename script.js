const nav = document.querySelector(".main-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const isVisible = nav.getAttribute("data-visible") === "true";

  nav.setAttribute("data-visible", !isVisible);
  navToggle.setAttribute("expand", !isVisible);
});
