// =========================================================
// JAVSEB HOME V2.3 — INTERACCIONES + MOTION PREMIUM
// Reemplaza POR COMPLETO: assets/js/home-v2.js
// =========================================================

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const desktopMotion = finePointer && window.matchMedia("(min-width: 901px)").matches;

  // ---------------------------------------------------------
  // Año del footer
  // ---------------------------------------------------------
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  // ---------------------------------------------------------
  // Header compacto + barra de progreso
  // ---------------------------------------------------------
  const header = document.getElementById("header") || document.querySelector(".header");

  if (header) {
    let progress = header.querySelector(".v2-scroll-progress");

    if (!progress) {
      progress = document.createElement("div");
      progress.className = "v2-scroll-progress";
      progress.setAttribute("aria-hidden", "true");

      const bar = document.createElement("div");
      bar.className = "v2-scroll-progress__bar";
      progress.appendChild(bar);
      header.appendChild(progress);
    }

    const bar = progress.querySelector(".v2-scroll-progress__bar");

    let ticking = false;

    const updateScrollUI = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      const ratio = Math.min(1, Math.max(0, scrollTop / maxScroll));

      header.classList.toggle("v2-header-compact", scrollTop > 55);

      if (bar) {
        bar.style.transform = `scaleX(${ratio})`;
      }

      ticking = false;
    };

    const requestScrollUI = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollUI);
        ticking = true;
      }
    };

    window.addEventListener("scroll", requestScrollUI, { passive: true });
    window.addEventListener("resize", requestScrollUI, { passive: true });
    updateScrollUI();
  }

  // ---------------------------------------------------------
  // Entradas stagger por scroll
  // ---------------------------------------------------------
  const motionGroups = [
    [".v2-goal-tabs .v2-goal-tab", "left"],
    [".v2-capabilities a", "up"],
    [".v2-process__rail article", "up"],
    [".v2-value__items > div", "right"],
    [".v2-project-grid .v2-project-mini", "up"],
    [".v2-audiovisual__mosaic .v2-media-tile", "right"]
  ];

  const motionItems = [];

  motionGroups.forEach(([selector, direction]) => {
    document.querySelectorAll(selector).forEach((element, index) => {
      element.classList.add("v2-motion");

      if (direction === "left") element.classList.add("v2-motion--left");
      if (direction === "right") element.classList.add("v2-motion--right");

      // Mantener el stagger corto para no volver lenta la página.
      element.style.setProperty("--v2-delay", `${Math.min(index, 5) * 70}ms`);
      motionItems.push(element);
    });
  });

  if (!reduceMotion && "IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("v2-motion--visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -7% 0px"
      }
    );

    motionItems.forEach((element) => motionObserver.observe(element));
  } else {
    motionItems.forEach((element) => element.classList.add("v2-motion--visible"));
  }

  // ---------------------------------------------------------
  // Hero: parallax por capas (solo escritorio con mouse)
  // ---------------------------------------------------------
  const stage = document.querySelector("[data-parallax-stage]");

  if (stage && desktopMotion && !reduceMotion) {
    const store = stage.querySelector(".v2-store-window");
    const kiru = stage.querySelector(".v2-kiru--hero");
    const halo = stage.querySelector(".v2-hero__halo");
    const chipSales = stage.querySelector(".v2-floating-chip--sales");
    const chipCustom = stage.querySelector(".v2-floating-chip--custom");

    const layers = [
      [store, 7, 5],
      [kiru, -9, -6],
      [halo, 2.5, 2],
      [chipSales, -12, -7],
      [chipCustom, 11, 7]
    ];

    let frame = 0;

    stage.addEventListener("pointermove", (event) => {
      if (frame) cancelAnimationFrame(frame);

      frame = requestAnimationFrame(() => {
        const rect = stage.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) - 0.5;
        const y = ((event.clientY - rect.top) / rect.height) - 0.5;

        layers.forEach(([element, mx, my]) => {
          if (!element) return;
          element.style.translate = `${x * mx}px ${y * my}px`;
        });
      });
    });

    stage.addEventListener("pointerleave", () => {
      layers.forEach(([element]) => {
        if (element) element.style.translate = "";
      });
    });
  }

  // ---------------------------------------------------------
  // Hero: frase secundaria rotativa
  // ---------------------------------------------------------
  const heroLine = document.querySelector(".v2-hero h1 strong");

  if (heroLine && !reduceMotion) {
    const messages = [
      "Haz crecer tu negocio también en digital.",
      "Convierte tus ideas en soluciones digitales.",
      "Sistemas hechos alrededor de tu negocio."
    ];

    let index = Math.max(0, messages.indexOf(heroLine.textContent.trim()));
    let heroTimer = null;

    const rotateHeroLine = () => {
      if (document.hidden) return;

      heroLine.classList.add("v2-hero-line--out");

      window.setTimeout(() => {
        index = (index + 1) % messages.length;
        heroLine.textContent = messages[index];

        heroLine.classList.remove("v2-hero-line--out");
        heroLine.classList.remove("v2-hero-line--in");

        // Reinicia la animación sin forzar reflow pesado del documento entero.
        void heroLine.offsetWidth;
        heroLine.classList.add("v2-hero-line--in");
      }, 270);
    };

    const startHeroRotation = () => {
      if (!heroTimer) heroTimer = window.setInterval(rotateHeroLine, 4700);
    };

    const stopHeroRotation = () => {
      if (heroTimer) {
        clearInterval(heroTimer);
        heroTimer = null;
      }
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopHeroRotation();
      else startHeroRotation();
    });

    startHeroRotation();
  }

  // ---------------------------------------------------------
  // ¿Qué quieres lograr? — contenido interactivo animado
  // ---------------------------------------------------------
  const goals = {
    sell: {
      label: "PARA VENDER ONLINE",
      title: "Convierte tu negocio en una experiencia de compra digital.",
      description:
        "Podemos construir la presencia y las herramientas que necesitas para mostrar tus productos, recibir pedidos y crecer en internet.",
      pills: [
        "Tienda online",
        "Catálogo digital",
        "Pagos y pedidos",
        "WhatsApp",
        "Gestión de productos"
      ]
    },
    organize: {
      label: "PARA ORGANIZAR TU NEGOCIO",
      title: "Centraliza procesos e información en una solución hecha para ti.",
      description:
        "Podemos ayudarte a dejar hojas dispersas y tareas repetidas atrás con un sistema que se adapte a tu operación.",
      pills: [
        "Sistema personalizado",
        "Usuarios y roles",
        "Inventario",
        "Reportes",
        "Base de datos"
      ]
    },
    automate: {
      label: "PARA AHORRAR TIEMPO",
      title: "Automatiza lo repetitivo y enfócate en lo que sí necesita de ti.",
      description:
        "Conectamos herramientas y creamos flujos para reducir tareas manuales, errores y tiempo perdido.",
      pills: [
        "Automatizaciones",
        "APIs",
        "Integraciones",
        "IA y chatbots",
        "Notificaciones"
      ]
    },
    idea: {
      label: "PARA CONSTRUIR TU IDEA",
      title: "No tienes que llegar con la solución técnica resuelta.",
      description:
        "Cuéntanos el problema, la idea o el objetivo. Analizamos contigo qué vale la pena construir y cómo empezar.",
      pills: [
        "Orientación",
        "Prototipo",
        "UI / UX",
        "Web o app",
        "Desarrollo a medida"
      ]
    }
  };

  const tabs = [...document.querySelectorAll(".v2-goal-tab")];
  const goalResult = document.getElementById("goalResult");
  const goalLabel = document.getElementById("goalLabel");
  const goalTitle = document.getElementById("goalTitle");
  const goalDescription = document.getElementById("goalDescription");
  const goalPills = document.getElementById("goalPills");

  let goalTimer = null;

  const renderGoal = (key) => {
    const goal = goals[key];
    if (!goal || !goalLabel || !goalTitle || !goalDescription || !goalPills) return;

    tabs.forEach((tab) => {
      const active = tab.dataset.goal === key;
      tab.classList.toggle("is-active", active);
      tab.setAttribute("aria-selected", String(active));
    });

    const updateContent = () => {
      goalLabel.textContent = goal.label;
      goalTitle.textContent = goal.title;
      goalDescription.textContent = goal.description;

      goalPills.replaceChildren(
        ...goal.pills.map((text) => {
          const span = document.createElement("span");
          span.textContent = text;
          return span;
        })
      );

      if (goalResult) {
        goalResult.classList.remove("v2-goal-changing");
        goalResult.classList.remove("v2-goal-settled");
        void goalResult.offsetWidth;
        goalResult.classList.add("v2-goal-settled");
      }
    };

    if (!goalResult || reduceMotion) {
      updateContent();
      return;
    }

    if (goalTimer) clearTimeout(goalTimer);

    goalResult.classList.remove("v2-goal-settled");
    goalResult.classList.add("v2-goal-changing");

    goalTimer = window.setTimeout(updateContent, 190);
  };

  tabs.forEach((tab) => {
    tab.addEventListener("click", () => renderGoal(tab.dataset.goal));

    // Navegación accesible por teclado entre tabs.
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowDown", "ArrowUp", "ArrowRight", "ArrowLeft"].includes(event.key)) return;

      event.preventDefault();

      const current = tabs.indexOf(tab);
      const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
      const next = forward
        ? (current + 1) % tabs.length
        : (current - 1 + tabs.length) % tabs.length;

      tabs[next].focus();
      renderGoal(tabs[next].dataset.goal);
    });
  });

  // ---------------------------------------------------------
  // Tilt de tarjetas (solo escritorio con mouse)
  // ---------------------------------------------------------
  if (desktopMotion && !reduceMotion) {
    const tiltCards = document.querySelectorAll(
      ".v2-feature, .v2-project-feature, .v2-project-mini"
    );

    tiltCards.forEach((card) => {
      card.classList.add("v2-tilt");

      card.addEventListener("pointermove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;

        // Intencionalmente muy sutil.
        card.style.setProperty("--v2-ry", `${x * 1.8}deg`);
        card.style.setProperty("--v2-rx", `${y * -1.4}deg`);
      });

      card.addEventListener("pointerleave", () => {
        card.style.setProperty("--v2-rx", "0deg");
        card.style.setProperty("--v2-ry", "0deg");
      });
    });
  }

  // ---------------------------------------------------------
  // Spotlight en secciones oscuras (solo escritorio)
  // ---------------------------------------------------------
  if (desktopMotion && !reduceMotion) {
    document
      .querySelectorAll(".v2-commerce, .v2-brand-statement, .v2-audiovisual")
      .forEach((section) => {
        section.addEventListener("pointerenter", () => {
          section.classList.add("v2-spotlight-active");
        });

        section.addEventListener("pointermove", (event) => {
          const rect = section.getBoundingClientRect();
          const x = Math.min(100, Math.max(0, ((event.clientX - rect.left) / rect.width) * 100));
          const y = Math.min(100, Math.max(0, ((event.clientY - rect.top) / rect.height) * 100));

          section.style.setProperty("--v2-spot-x", `${x}%`);
          section.style.setProperty("--v2-spot-y", `${y}%`);
        });

        section.addEventListener("pointerleave", () => {
          section.classList.remove("v2-spotlight-active");
        });
      });
  }

  // ---------------------------------------------------------
  // Línea de proceso al entrar en pantalla
  // ---------------------------------------------------------
  const processRail = document.querySelector(".v2-process__rail");

  if (processRail) {
    if (!reduceMotion && "IntersectionObserver" in window) {
      const processObserver = new IntersectionObserver(
        (entries, observer) => {
          if (!entries[0]?.isIntersecting) return;
          processRail.classList.add("v2-process-active");
          observer.disconnect();
        },
        { threshold: 0.3 }
      );

      processObserver.observe(processRail);
    } else {
      processRail.classList.add("v2-process-active");
    }
  }
})();


// =========================================================
// JAVSEB HOME V2.4 — ACABADO PREMIUM
// =========================================================
(() => {
  "use strict";

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const desktop = fine && window.matchMedia("(min-width: 901px)").matches;

  // -------------------------------------------------------
  // Acentos animados debajo de títulos
  // -------------------------------------------------------
  const titleSelectors = [
    ".v2-section-head h2",
    ".v2-commerce h2",
    ".v2-value h2",
    ".v2-audiovisual h2",
    ".v2-final-cta h2",
    ".v2-brand-statement h2"
  ];

  const titles = document.querySelectorAll(titleSelectors.join(","));

  titles.forEach((title) => {
    if (title.querySelector(".v2-title-accent")) return;
    const accent = document.createElement("span");
    accent.className = "v2-title-accent";
    accent.setAttribute("aria-hidden", "true");
    title.appendChild(accent);
  });

  if ("IntersectionObserver" in window && !reduced) {
    const titleObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const accent = entry.target.querySelector(".v2-title-accent");
          if (accent) accent.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 }
    );

    titles.forEach((title) => titleObserver.observe(title));
  } else {
    titles.forEach((title) => {
      title.querySelector(".v2-title-accent")?.classList.add("is-visible");
    });
  }

  // -------------------------------------------------------
  // Barrido de luz periódico del mockup principal
  // -------------------------------------------------------
  const store = document.querySelector(".v2-store-window");

  if (store && !reduced) {
    let scanTimer = null;

    const runScan = () => {
      store.classList.remove("v2-scan-active");
      void store.offsetWidth;
      store.classList.add("v2-scan-active");
    };

    const startScan = () => {
      runScan();
      if (!scanTimer) {
        scanTimer = window.setInterval(() => {
          if (!document.hidden) runScan();
        }, 8500);
      }
    };

    const stopScan = () => {
      if (scanTimer) {
        clearInterval(scanTimer);
        scanTimer = null;
      }
    };

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopScan();
      else startScan();
    });

    window.setTimeout(startScan, 1200);
  }

  // -------------------------------------------------------
  // Reveal por máscara para imágenes importantes
  // -------------------------------------------------------
  const revealImages = document.querySelectorAll(
    ".v2-project-feature__media img, .v2-feature__media img, .v2-commerce__dashboard img, .v2-commerce__catalog img"
  );

  revealImages.forEach((img) => img.classList.add("v2-image-reveal"));

  if ("IntersectionObserver" in window && !reduced) {
    const imageObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.18,
        rootMargin: "0px 0px -5% 0px"
      }
    );

    revealImages.forEach((img) => imageObserver.observe(img));
  } else {
    revealImages.forEach((img) => img.classList.add("is-visible"));
  }

  // -------------------------------------------------------
  // Botones magnéticos, muy sutiles en escritorio
  // -------------------------------------------------------
  if (desktop && !reduced) {
    const magnetic = document.querySelectorAll(
      ".v2-btn, .header__contact, .v2-mobile-cta"
    );

    magnetic.forEach((button) => {
      button.classList.add("v2-magnetic");

      button.addEventListener("pointermove", (event) => {
        const rect = button.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
        const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;

        button.style.setProperty("--v2-mag-x", `${x}px`);
        button.style.setProperty("--v2-mag-y", `${y}px`);
      });

      button.addEventListener("pointerleave", () => {
        button.style.setProperty("--v2-mag-x", "0px");
        button.style.setProperty("--v2-mag-y", "0px");
      });
    });
  }

  // -------------------------------------------------------
  // Volver arriba
  // -------------------------------------------------------
  const backTop = document.createElement("button");
  backTop.type = "button";
  backTop.className = "v2-back-top";
  backTop.setAttribute("aria-label", "Volver arriba");
  backTop.innerHTML = "↑";
  document.body.appendChild(backTop);

  let backTopTicking = false;

  const updateBackTop = () => {
    backTop.classList.toggle("is-visible", window.scrollY > 720);
    backTopTicking = false;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (!backTopTicking) {
        requestAnimationFrame(updateBackTop);
        backTopTicking = true;
      }
    },
    { passive: true }
  );

  backTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: reduced ? "auto" : "smooth"
    });
  });

  updateBackTop();
})();
