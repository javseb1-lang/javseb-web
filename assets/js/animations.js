// ==========================================
// JAVSEB - ANIMACIONES GENERALES
// ==========================================


// Animaciones al aparecer en pantalla
const revealElements =
  document.querySelectorAll(".reveal");


const observer =
  new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          entry.target.classList.add(
            "reveal--visible"
          );

          observer.unobserve(
            entry.target
          );

        }

      });

    },
    {
      threshold: 0.12
    }
  );


revealElements.forEach((element) => {
  observer.observe(element);
});


// Año automático del footer
const currentYear =
  document.getElementById("currentYear");

if (currentYear) {

  currentYear.textContent =
    new Date().getFullYear();

}


// Formulario provisional
const contactForm =
  document.getElementById("contactForm");

const formStatus =
  document.getElementById("formStatus");


if (contactForm) {

  contactForm.addEventListener(
    "submit",
    (event) => {

      event.preventDefault();

      if (formStatus) {

        formStatus.textContent =
          "El formulario está preparado. Próximamente habilitaremos el envío directo.";

      }

    }
  );

}