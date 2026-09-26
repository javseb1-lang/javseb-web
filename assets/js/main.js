const header = document.getElementById("header");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");


// ===========================
// HEADER AL HACER SCROLL
// ===========================

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


// ===========================
// MENÚ MÓVIL
// ===========================

menuToggle.addEventListener("click", () => {

  const isOpen =
    nav.classList.toggle("open");

  menuToggle.classList.toggle(
    "active",
    isOpen
  );

  menuToggle.setAttribute(
    "aria-expanded",
    isOpen
  );

  document.body.style.overflow =
    isOpen ? "hidden" : "";
});


// Cerrar menú al tocar enlace

document
  .querySelectorAll(".nav__link")
  .forEach((link) => {

    link.addEventListener("click", () => {

      nav.classList.remove("open");

      menuToggle.classList.remove("active");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      document.body.style.overflow = "";

    });

  });


// Cerrar menú al cambiar a escritorio

window.addEventListener("resize", () => {

  if (window.innerWidth > 850) {

    nav.classList.remove("open");

    menuToggle.classList.remove("active");

    menuToggle.setAttribute(
      "aria-expanded",
      "false"
    );

    document.body.style.overflow = "";

  }

});