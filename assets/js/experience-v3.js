// =========================================================
// JAVSEB V3 — CREATIVE EXPERIENCE
// PARTE 02 — HERO CINEMATOGRÁFICO
//
// 1) Hero entra en viewport
// 2) texto aparece por capas
// 3) mockup entra con profundidad
// 4) Kiru camina lentamente
// 5) Kiru cambia a pose final
// 6) Hero queda con microvida ambiental
// =========================================================

(() => {
  "use strict";

  const hero =
    document.querySelector(".v2-hero");

  const stage =
    document.getElementById("v3HeroStage");

  const walker =
    document.getElementById("v3KiruWalker");

  const finalKiru =
    document.getElementById("v3KiruFinal");

  const glow =
    document.getElementById("v3KiruArrivalGlow");

  const eyebrow =
    document.getElementById("v3HeroEyebrow");

  const titleMain =
    document.querySelector(".v3-hero-title__main");

  const titleStrong =
    document.querySelector(".v3-hero-title strong");

  const lead =
    document.getElementById("v3HeroLead");

  const actions =
    document.getElementById("v3HeroActions");

  const trust =
    document.getElementById("v3HeroTrust");

  const store =
    document.getElementById("v3StoreWindow");

  const chipSales =
    document.getElementById("v3HeroChipSales");

  const chipCustom =
    document.getElementById("v3HeroChipCustom");

  if (!hero || !stage || !walker || !finalKiru) {
    return;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const mobile =
    window.matchMedia(
      "(max-width: 640px)"
    ).matches;

  const wait = (ms) =>
    new Promise((resolve) =>
      window.setTimeout(resolve, ms)
    );

  let experienceStarted = false;

  const showFinalState = () => {
    document.body.classList.remove("v3-hero-prep");
    document.body.classList.remove("v3-kiru-pending");
    document.body.classList.remove("v3-kiru-walking");

    document.body.classList.add("v3-kiru-arrived");
    document.body.classList.add("v3-hero-ready");

    walker.style.opacity = "0";
    walker.style.visibility = "hidden";
    finalKiru.style.opacity = "1";
  };

  if (reduceMotion || mobile) {
    showFinalState();
    return;
  }

  /* =======================================================
     PREPARAR HERO
  ======================================================= */

  document.body.classList.add("v3-hero-prep");
  document.body.classList.add("v3-kiru-pending");

  walker.style.opacity = "0";
  walker.style.visibility = "hidden";

  /* =======================================================
     UTILIDAD DE ANIMACIÓN
  ======================================================= */

  const animateElement = (
    element,
    frames,
    options
  ) => {
    if (!element) {
      return Promise.resolve();
    }

    const animation =
      element.animate(
        frames,
        {
          fill: "forwards",
          ...options
        }
      );

    return animation.finished.catch(
      () => undefined
    );
  };

  /* =======================================================
     TEXTO + MOCKUP
  ======================================================= */

  const playHeroIntro = async () => {
    await wait(220);

    animateElement(
      eyebrow,
      [
        {
          opacity: 0,
          transform: "translate3d(0,14px,0)"
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }
      ],
      {
        duration: 520,
        easing: "cubic-bezier(.2,.7,.25,1)"
      }
    );

    await wait(115);

    animateElement(
      titleMain,
      [
        {
          opacity: 0,
          transform: "translate3d(0,26px,0)",
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,0)",
          filter: "blur(0px)"
        }
      ],
      {
        duration: 720,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );

    await wait(140);

    animateElement(
      titleStrong,
      [
        {
          opacity: 0,
          transform:
            "translate3d(0,25px,0) scale(.985)",
          filter: "blur(7px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0) scale(1)",
          filter: "blur(0px)"
        }
      ],
      {
        duration: 760,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );

    await wait(120);

    animateElement(
      lead,
      [
        {
          opacity: 0,
          transform: "translate3d(0,16px,0)"
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }
      ],
      {
        duration: 580,
        easing: "cubic-bezier(.2,.7,.25,1)"
      }
    );

    await wait(80);

    animateElement(
      actions,
      [
        {
          opacity: 0,
          transform: "translate3d(0,15px,0)"
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }
      ],
      {
        duration: 560,
        easing: "cubic-bezier(.2,.7,.25,1)"
      }
    );

    await wait(70);

    animateElement(
      trust,
      [
        {
          opacity: 0,
          transform: "translate3d(0,12px,0)"
        },
        {
          opacity: 1,
          transform: "translate3d(0,0,0)"
        }
      ],
      {
        duration: 520,
        easing: "cubic-bezier(.2,.7,.25,1)"
      }
    );
  };

  const playVisualIntro = async () => {
    await wait(470);

    await animateElement(
      store,
      [
        {
          opacity: 0,
          transform:
            "translate3d(44px,18px,0) scale(.955)",
          filter: "blur(8px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0) scale(1)",
          filter: "blur(0px)"
        }
      ],
      {
        duration: 980,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );

    await wait(110);

    animateElement(
      chipSales,
      [
        {
          opacity: 0,
          transform:
            "translate3d(-10px,13px,0) scale(.94)",
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0) scale(1)",
          filter: "blur(0)"
        }
      ],
      {
        duration: 620,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );

    await wait(130);

    animateElement(
      chipCustom,
      [
        {
          opacity: 0,
          transform:
            "translate3d(10px,13px,0) scale(.94)",
          filter: "blur(5px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0) scale(1)",
          filter: "blur(0)"
        }
      ],
      {
        duration: 620,
        easing: "cubic-bezier(.16,1,.3,1)"
      }
    );
  };

  /* =======================================================
     KIRU WALK
  ======================================================= */

  const spritePath =
    "assets/img/kiru/motion/walk/kiru-walk-sprite.png";

  const sprite =
    new Image();

  sprite.src =
    spritePath;

  let spriteReady =
    false;

  sprite.onload = () => {
    spriteReady = true;
  };

  sprite.onerror = () => {
    spriteReady = false;

    console.warn(
      "JAVSEB V3: no se pudo cargar el sprite de Kiru."
    );
  };

  const playKiruWalk = async () => {
    if (!spriteReady) {
      showFinalState();
      return;
    }

    document.body.classList.remove(
      "v3-kiru-pending"
    );

    document.body.classList.add(
      "v3-kiru-walking"
    );

    /*
     * El Hero ya empezó a construirse.
     * Kiru entra después, no inmediatamente.
     */
    await wait(1500);

    const stageWidth =
      stage.getBoundingClientRect().width;

    const destination =
      Math.max(
        215,
        Math.min(
          325,
          stageWidth * 0.46
        )
      );

    walker.style.visibility =
      "visible";

    walker.style.opacity =
      "1";

    await animateElement(
      walker,
      [
        {
          opacity: 0,
          transform:
            "translate3d(-38px,3px,0)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0)"
        }
      ],
      {
        duration: 650,
        easing: "cubic-bezier(.2,.7,.25,1)"
      }
    );

    const walk =
      walker.animate(
        [
          {
            transform:
              "translate3d(0,0,0)"
          },
          {
            offset: .2,
            transform:
              `translate3d(${destination * .2}px,-2px,0)`
          },
          {
            offset: .4,
            transform:
              `translate3d(${destination * .4}px,0,0)`
          },
          {
            offset: .6,
            transform:
              `translate3d(${destination * .6}px,-2px,0)`
          },
          {
            offset: .8,
            transform:
              `translate3d(${destination * .8}px,0,0)`
          },
          {
            transform:
              `translate3d(${destination}px,0,0)`
          }
        ],
        {
          duration: 7200,
          easing: "linear",
          fill: "forwards"
        }
      );

    try {
      await walk.finished;
    } catch {
      showFinalState();
      return;
    }

    await wait(420);

    if (glow) {
      glow.animate(
        [
          {
            opacity: 0,
            transform: "scaleX(.55)"
          },
          {
            opacity: 1,
            transform: "scaleX(1.08)"
          },
          {
            opacity: .35,
            transform: "scaleX(.94)"
          }
        ],
        {
          duration: 800,
          easing: "cubic-bezier(.2,.7,.25,1)",
          fill: "forwards"
        }
      );
    }

    const exit =
      walker.animate(
        [
          {
            opacity: 1,
            transform:
              `translate3d(${destination}px,0,0) scale(1)`
          },
          {
            opacity: 0,
            transform:
              `translate3d(${destination + 4}px,-3px,0) scale(.97)`
          }
        ],
        {
          duration: 450,
          easing: "ease-out",
          fill: "forwards"
        }
      );

    document.body.classList.remove(
      "v3-kiru-walking"
    );

    document.body.classList.add(
      "v3-kiru-arrived"
    );

    try {
      await exit.finished;
    } catch {
      // La pose final sigue siendo válida.
    }

    walker.style.visibility =
      "hidden";

    finalKiru.style.opacity =
      "1";

    await wait(280);

    document.body.classList.add(
      "v3-hero-ready"
    );
  };

  /* =======================================================
     INICIAR TODA LA EXPERIENCIA
  ======================================================= */

  const startExperience = () => {
    if (experienceStarted) {
      return;
    }

    experienceStarted = true;

    /*
     * Las dos mitades empiezan coordinadas.
     */
    playHeroIntro();
    playVisualIntro();

    /*
     * Damos tiempo al preload del sprite.
     */
    window.setTimeout(
      () => {
        playKiruWalk();
      },
      1250
    );

    /*
     * Quitamos la clase de preparación después
     * de que WAAPI ya tomó control de los elementos.
     */
    window.setTimeout(
      () => {
        document.body.classList.remove(
          "v3-hero-prep"
        );
      },
      1600
    );
  };

  /* =======================================================
     OBSERVAR HERO
  ======================================================= */

  if (!("IntersectionObserver" in window)) {
    startExperience();
    return;
  }

  const observer =
    new IntersectionObserver(
      (entries) => {
        const entry =
          entries[0];

        if (
          !entry ||
          !entry.isIntersecting
        ) {
          return;
        }

        if (
          entry.intersectionRatio < .42
        ) {
          return;
        }

        observer.disconnect();

        startExperience();
      },
      {
        threshold:
          [.2, .32, .42, .55, .7],

        rootMargin:
          "0px 0px -3% 0px"
      }
    );

  observer.observe(
    hero
  );
})();


// =========================================================
// JAVSEB V3 — PARTE 03.1
// KIRU BAJA POR ESCALONES PEQUEÑOS
// =========================================================
(() => {
  "use strict";

  const scene =
    document.getElementById("v3StairsScene");

  const kiru =
    document.getElementById("v3StairsKiru");

  const kiruFrame =
    document.getElementById("v3StairsKiruFrame");

  const meter =
    document.getElementById("v3StairsMeter");

  const aside =
    document.getElementById("v3StairsAside");

  const indexLabel =
    document.getElementById("v3StairsIndex");

  const icon =
    document.getElementById("v3StairsIcon");

  const title =
    document.getElementById("v3StairsTitle");

  const text =
    document.getElementById("v3StairsText");

  const status =
    document.getElementById("v3StairsStatus");

  const milestones = [
    ...document.querySelectorAll(
      ".v3-stairs__milestone"
    )
  ];

  if (
    !scene ||
    !kiru ||
    !kiruFrame ||
    !milestones.length
  ) {
    return;
  }

  const desktopQuery =
    window.matchMedia(
      "(min-width: 901px)"
    );

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const data = [
    {
      icon: "✦",
      title: "Entender antes de construir",
      text:
        "Todo empieza entendiendo el problema, la idea y lo que realmente necesita tu negocio o proyecto.",
      status: "ESCUCHANDO TU IDEA"
    },
    {
      icon: "⌕",
      title: "Convertir la necesidad en un plan",
      text:
        "Analizamos prioridades, alcance y la forma más útil de resolver el problema sin añadir complejidad innecesaria.",
      status: "ANALIZANDO EL PROBLEMA"
    },
    {
      icon: "◇",
      title: "Dar forma a la experiencia",
      text:
        "Definimos estructura, interfaz y recorrido antes de entrar de lleno al desarrollo.",
      status: "DISEÑANDO LA SOLUCIÓN"
    },
    {
      icon: "</>",
      title: "Construir y conectar",
      text:
        "Desarrollamos, integramos y probamos hasta convertir la propuesta en una solución funcional.",
      status: "CONSTRUYENDO"
    },
    {
      icon: "✓",
      title: "Preparar para usar y crecer",
      text:
        "Entregamos una solución lista para trabajar contigo y preparada para seguir evolucionando.",
      status: "SOLUCIÓN LISTA"
    }
  ];

  const frames =
    Array.from(
      { length: 10 },
      (_, i) =>
        `assets/img/kiru/motion/stairs/kiru-stairs-${String(i + 1).padStart(2,"0")}.png`
    );

  frames.forEach((src) => {
    const image = new Image();
    image.src = src;
  });

  /*
   * 14 peldaños reales.
   * Mucho menos desnivel por paso que antes.
   */
  const stepCount = 14;

  const stairPoints =
    Array.from(
      { length: stepCount },
      (_, i) => ({
        x: 50 + i * 43,
        y: 72 + i * 41
      })
    );

  let activeIndex = -1;
  let ticking = false;

  const clamp = (value, min, max) =>
    Math.min(
      max,
      Math.max(min, value)
    );

  const setActive = (next) => {
    next =
      clamp(
        next,
        0,
        data.length - 1
      );

    if (next === activeIndex) {
      return;
    }

    activeIndex = next;

    milestones.forEach(
      (item, i) => {
        item.classList.toggle(
          "is-active",
          i === next
        );

        item.classList.toggle(
          "is-complete",
          i < next
        );
      }
    );

    if (indexLabel) {
      indexLabel.textContent =
        `${String(next + 1).padStart(2,"0")} / 05`;
    }

    if (icon) {
      icon.textContent =
        data[next].icon;
    }

    if (title) {
      title.textContent =
        data[next].title;
    }

    if (text) {
      text.textContent =
        data[next].text;
    }

    if (status) {
      status.textContent =
        data[next].status;
    }

    if (aside) {
      aside.classList.add(
        "is-changing"
      );

      window.setTimeout(
        () =>
          aside.classList.remove(
            "is-changing"
          ),
        220
      );
    }
  };

  /*
   * Cada ciclo corresponde a UN escalón.
   * Kiru avanza primero y desciende gradualmente después.
   */
  const getPosition = (progress) => {
    const segments =
      stairPoints.length - 1;

    const scaled =
      progress * segments;

    const segment =
      Math.min(
        segments - 1,
        Math.floor(scaled)
      );

    const local =
      clamp(
        scaled - segment,
        0,
        1
      );

    const a =
      stairPoints[segment];

    const b =
      stairPoints[segment + 1];

    /*
     * Movimiento horizontal continuo.
     */
    const xEase =
      local * local *
      (3 - 2 * local);

    /*
     * La bajada comienza temprano y ocupa buena parte
     * del ciclo. Evita el efecto de caída repentina.
     */
    const verticalRaw =
      clamp(
        (local - .20) / .72,
        0,
        1
      );

    const yEase =
      verticalRaw * verticalRaw *
      (3 - 2 * verticalRaw);

    return {
      x:
        a.x +
        (b.x - a.x) *
        xEase,

      y:
        a.y +
        (b.y - a.y) *
        yEase,

      local,
      segment
    };
  };

  const render = () => {
    ticking = false;

    if (
      !desktopQuery.matches ||
      reduceMotion
    ) {
      return;
    }

    const rect =
      scene.getBoundingClientRect();

    const focus =
      window.innerHeight * .54;

    const start =
      focus -
      rect.top;

    const total =
      Math.max(
        1,
        rect.height -
        window.innerHeight * .25
      );

    const progress =
      clamp(
        start / total,
        0,
        1
      );

    const pos =
      getPosition(
        progress
      );

    kiru.style.left =
      `${pos.x}px`;

    kiru.style.top =
      `${pos.y}px`;

    /*
     * Ya no hacemos compresión brusca.
     * Solo una oscilación mínima ligada a la pisada.
     */
    const bob =
      Math.sin(
        pos.local *
        Math.PI * 2
      ) * 1.2;

    kiru.style.transform =
      `translate3d(-50%, calc(-74% + ${bob}px), 0)`;

    /*
     * Un ciclo completo de los 10 frames
     * por cada peldaño.
     */
    const frameIndex =
      clamp(
        Math.floor(
          pos.local * 10
        ),
        0,
        9
      );

    const frame =
      frames[frameIndex];

    if (
      kiruFrame.getAttribute("src") !==
      frame
    ) {
      kiruFrame.setAttribute(
        "src",
        frame
      );
    }

    /*
     * Cinco hitos distribuidos sobre los 13 tramos.
     */
    const milestoneStops =
      [0, 3, 6, 9, 12];

    let nextIndex = 0;

    milestoneStops.forEach(
      (stop, i) => {
        if (
          pos.segment >= stop
        ) {
          nextIndex = i;
        }
      }
    );

    setActive(
      Math.min(
        4,
        nextIndex
      )
    );

    if (meter) {
      meter.style.transform =
        `scaleX(${Math.max(.01, progress)})`;
    }
  };

  const requestRender = () => {
    if (ticking) {
      return;
    }

    ticking = true;

    requestAnimationFrame(
      render
    );
  };

  window.addEventListener(
    "scroll",
    requestRender,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    requestRender,
    { passive: true }
  );

  setActive(0);
  render();
})();


// =========================================================
// JAVSEB V3 — PARTE 04.1
// CINEMATIC INTRO — VERSIÓN MÁS PAUSADA
// Una vez por sesión.
// =========================================================
(() => {
  "use strict";

  const root =
    document.documentElement;

  const intro =
    document.getElementById("v3Intro");

  if (!intro) {
    root.classList.remove(
      "v3-intro-pending"
    );

    return;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  let alreadySeen = false;

  try {
    alreadySeen =
      sessionStorage.getItem(
        "javseb-v3-intro-seen"
      ) === "1";
  } catch (_) {
    alreadySeen = false;
  }

  if (
    reduceMotion ||
    alreadySeen
  ) {
    root.classList.remove(
      "v3-intro-pending"
    );

    intro.remove();

    return;
  }

  const logo =
    document.getElementById(
      "v3IntroLogo"
    );

  const brandline =
    intro.querySelector(
      ".v3-intro__brandline"
    );

  const brandLines =
    brandline
      ? [
          ...brandline.querySelectorAll(
            "i"
          )
        ]
      : [];

  const statement =
    intro.querySelector(
      ".v3-intro__statement"
    );

  const progress =
    document.getElementById(
      "v3IntroProgress"
    );

  const status =
    document.getElementById(
      "v3IntroStatus"
    );

  const rings = [
    ...intro.querySelectorAll(
      ".v3-intro__ring"
    )
  ];

  const curtainLeft =
    intro.querySelector(
      ".v3-intro__curtain--left"
    );

  const curtainRight =
    intro.querySelector(
      ".v3-intro__curtain--right"
    );

  const wait = (ms) =>
    new Promise(
      (resolve) =>
        window.setTimeout(
          resolve,
          ms
        )
    );

  const animate =
    (
      element,
      frames,
      options
    ) => {
      if (!element) {
        return Promise.resolve();
      }

      const animation =
        element.animate(
          frames,
          {
            fill: "forwards",
            ...options
          }
        );

      return animation.finished.catch(
        () => undefined
      );
    };

  const finishIntro = () => {
    try {
      sessionStorage.setItem(
        "javseb-v3-intro-seen",
        "1"
      );
    } catch (_) {}

    root.classList.remove(
      "v3-intro-pending"
    );

    intro.classList.remove(
      "is-active",
      "is-running"
    );

    window.setTimeout(
      () => intro.remove(),
      180
    );
  };

  const run = async () => {
    intro.classList.add(
      "is-active",
      "is-running"
    );

    /*
     * Ahora damos un pequeño momento inicial
     * para que el ambiente pueda sentirse.
     */
    await wait(260);

    await Promise.all([
      animate(
        curtainLeft,
        [
          {
            transform:
              "translateX(-104%)"
          },
          {
            transform:
              "translateX(0)"
          }
        ],
        {
          duration: 520,
          easing:
            "cubic-bezier(.7,0,.3,1)"
        }
      ),

      animate(
        curtainRight,
        [
          {
            transform:
              "translateX(104%)"
          },
          {
            transform:
              "translateX(0)"
          }
        ],
        {
          duration: 520,
          easing:
            "cubic-bezier(.7,0,.3,1)"
        }
      )
    ]);

    await wait(180);

    await Promise.all([
      animate(
        curtainLeft,
        [
          {
            transform:
              "translateX(0)"
          },
          {
            transform:
              "translateX(-108%)"
          }
        ],
        {
          duration: 720,
          easing:
            "cubic-bezier(.16,1,.3,1)"
        }
      ),

      animate(
        curtainRight,
        [
          {
            transform:
              "translateX(0)"
          },
          {
            transform:
              "translateX(108%)"
          }
        ],
        {
          duration: 720,
          easing:
            "cubic-bezier(.16,1,.3,1)"
        }
      )
    ]);

    await wait(160);

    rings.forEach(
      (ring, index) => {
        animate(
          ring,
          [
            {
              opacity: 0,
              transform:
                "translate(-50%,-50%) scale(.62)"
            },
            {
              opacity:
                index === 0
                  ? .75
                  : .48,
              transform:
                "translate(-50%,-50%) scale(1)"
            }
          ],
          {
            duration:
              1000 +
              index * 160,

            easing:
              "cubic-bezier(.16,1,.3,1)"
          }
        );
      }
    );

    await animate(
      logo,
      [
        {
          opacity: 0,
          transform:
            "translate3d(0,16px,0) scale(.91)",
          filter:
            "brightness(0) invert(1) blur(8px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0) scale(1)",
          filter:
            "brightness(0) invert(1) blur(0)"
        }
      ],
      {
        duration: 900,
        easing:
          "cubic-bezier(.16,1,.3,1)"
      }
    );

    if (status) {
      status.textContent =
        "IDENTIDAD CONECTADA";
    }

    await wait(360);

    await animate(
      brandline,
      [
        {
          opacity: 0,
          transform:
            "translate3d(0,9px,0)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0)"
        }
      ],
      {
        duration: 560,
        easing: "ease-out"
      }
    );

    brandLines.forEach(
      (line) => {
        animate(
          line,
          [
            {
              width: "0px"
            },
            {
              width: "54px"
            }
          ],
          {
            duration: 650,
            easing:
              "cubic-bezier(.2,.7,.25,1)"
          }
        );
      }
    );

    await wait(300);

    await animate(
      statement,
      [
        {
          opacity: 0,
          transform:
            "translate3d(0,22px,0)",
          filter:
            "blur(9px)"
        },
        {
          opacity: 1,
          transform:
            "translate3d(0,0,0)",
          filter:
            "blur(0)"
        }
      ],
      {
        duration: 950,
        easing:
          "cubic-bezier(.16,1,.3,1)"
      }
    );

    /*
     * Dejamos respirar la frase.
     */
    await wait(650);

    if (status) {
      status.textContent =
        "CARGANDO EXPERIENCIA";
    }

    await animate(
      progress,
      [
        {
          transform:
            "scaleX(0)"
        },
        {
          transform:
            "scaleX(1)"
        }
      ],
      {
        duration: 1250,
        easing:
          "cubic-bezier(.4,0,.2,1)"
      }
    );

    if (status) {
      status.textContent =
        "LISTO";
    }

    await wait(520);

    await animate(
      intro,
      [
        {
          opacity: 1,
          filter:
            "blur(0)"
        },
        {
          opacity: 0,
          filter:
            "blur(8px)"
        }
      ],
      {
        duration: 720,
        easing:
          "cubic-bezier(.4,0,.2,1)"
      }
    );

    finishIntro();
  };

  run();
})();



// =========================================================
// JAVSEB V3 — PARTE 05
// GOAL LAB VISUAL
// El contenido textual sigue siendo compatible con home-v2.js
// =========================================================
(() => {
  "use strict";

  const lab =
    document.querySelector(
      ".v3-goal-lab"
    );

  if (!lab) {
    return;
  }

  const tabs = [
    ...lab.querySelectorAll(
      ".v3-goal-lab__tab"
    )
  ];

  const scenes = [
    ...lab.querySelectorAll(
      "[data-goal-scene]"
    )
  ];

  const result =
    document.getElementById(
      "goalResult"
    );

  const visual =
    document.getElementById(
      "v3GoalVisual"
    );

  let visualTimer = null;

  const setScene =
    (key) => {
      if (!key) {
        return;
      }

      if (visualTimer) {
        window.clearTimeout(
          visualTimer
        );
      }

      if (result) {
        result.classList.add(
          "v3-goal-lab--switching"
        );
      }

      visualTimer =
        window.setTimeout(
          () => {
            scenes.forEach(
              (scene) => {
                scene.classList.toggle(
                  "is-active",
                  scene.dataset.goalScene ===
                    key
                );
              }
            );

            if (result) {
              result.classList.remove(
                "v3-goal-lab--switching"
              );
            }
          },
          110
        );
    };

  tabs.forEach(
    (tab) => {
      tab.addEventListener(
        "click",
        () => {
          setScene(
            tab.dataset.goal
          );
        }
      );

      tab.addEventListener(
        "focus",
        () => {
          if (
            tab.getAttribute(
              "aria-selected"
            ) === "true"
          ) {
            setScene(
              tab.dataset.goal
            );
          }
        }
      );
    }
  );

  /*
   * Parallax mínimo dentro del laboratorio.
   */
  const pointerFine =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  if (
    visual &&
    pointerFine &&
    !reduceMotion
  ) {
    let raf = 0;

    visual.addEventListener(
      "pointermove",
      (event) => {
        if (raf) {
          cancelAnimationFrame(
            raf
          );
        }

        raf =
          requestAnimationFrame(
            () => {
              const rect =
                visual.getBoundingClientRect();

              const x =
                (
                  (event.clientX -
                    rect.left) /
                  rect.width
                ) - .5;

              const y =
                (
                  (event.clientY -
                    rect.top) /
                  rect.height
                ) - .5;

              const active =
                visual.querySelector(
                  ".v3-goal-scene.is-active"
                );

              if (active) {
                active.style.translate =
                  `${x * 4}px ${y * 3}px`;
              }
            }
          );
      }
    );

    visual.addEventListener(
      "pointerleave",
      () => {
        scenes.forEach(
          (scene) => {
            scene.style.translate =
              "";
          }
        );
      }
    );
  }

  setScene("sell");
})();



// =========================================================
// JAVSEB V3 — PARTE 06
// MOBILE PROCESS: SALUDO + ESCALERA DE ESPALDAS
// =========================================================
(() => {
  "use strict";

  const hello =
    document.getElementById(
      "v3MobileHello"
    );

  const greetingFrame =
    document.getElementById(
      "v3MobileGreetingFrame"
    );

  const process =
    document.getElementById(
      "v3MobileProcess"
    );

  const route =
    document.getElementById(
      "v3MobileProcessRoute"
    );

  const kiru =
    document.getElementById(
      "v3MobileStairsKiru"
    );

  const kiruFrame =
    document.getElementById(
      "v3MobileStairsFrame"
    );

  const ladderProgress =
    document.getElementById(
      "v3MobileLadderProgress"
    );

  const indexLabel =
    document.getElementById(
      "v3MobileProcessIndex"
    );

  const statusLabel =
    document.getElementById(
      "v3MobileProcessStatus"
    );

  const steps = [
    ...document.querySelectorAll(
      "[data-mobile-process-step]"
    )
  ];

  if (
    !hello ||
    !greetingFrame ||
    !process ||
    !route ||
    !kiru ||
    !kiruFrame ||
    !steps.length
  ) {
    return;
  }

  const mobile =
    window.matchMedia(
      "(max-width: 900px)"
    );

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const greetingFrames =
    Array.from(
      { length: 8 },
      (_, i) =>
        `assets/img/kiru/motion/greeting/kiru-greeting-${String(i + 1).padStart(2,"0")}.png`
    );

  const stairsFrames =
    Array.from(
      { length: 10 },
      (_, i) =>
        `assets/img/kiru/motion/mobile-stairs/kiru-mobile-stairs-${String(i + 1).padStart(2,"0")}.png`
    );

  [...greetingFrames, ...stairsFrames].forEach(
    (src) => {
      const img = new Image();
      img.src = src;
    }
  );

  const labels =
    [
      "IDEA",
      "ANÁLISIS",
      "DISEÑO",
      "DESARROLLO",
      "LANZAMIENTO"
    ];

  const clamp = (value, min, max) =>
    Math.min(
      max,
      Math.max(min, value)
    );

  let greetingPlayed = false;
  let ticking = false;
  let activeIndex = -1;

  const playGreeting = async () => {
    if (
      greetingPlayed ||
      !mobile.matches
    ) {
      return;
    }

    greetingPlayed = true;

    if (reduceMotion) {
      greetingFrame.src =
        greetingFrames[
          greetingFrames.length - 1
        ];

      return;
    }

    /*
     * Saludo completo dos veces.
     * 8 frames × 105 ms ≈ 0.84 s por ciclo.
     */
    for (let cycle = 0; cycle < 2; cycle += 1) {
      for (
        let i = 0;
        i < greetingFrames.length;
        i += 1
      ) {
        greetingFrame.src =
          greetingFrames[i];

        await new Promise(
          (resolve) =>
            window.setTimeout(
              resolve,
              105
            )
        );
      }
    }

    greetingFrame.src =
      greetingFrames[7];
  };

  if (
    "IntersectionObserver" in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];

          if (
            entry &&
            entry.isIntersecting &&
            entry.intersectionRatio >= .35
          ) {
            observer.disconnect();
            playGreeting();
          }
        },
        {
          threshold:
            [.2, .35, .55]
        }
      );

    observer.observe(
      hello
    );
  } else {
    playGreeting();
  }

  const setActive = (next) => {
    next =
      clamp(
        next,
        0,
        steps.length - 1
      );

    if (
      next === activeIndex
    ) {
      return;
    }

    activeIndex =
      next;

    steps.forEach(
      (step, i) => {
        step.classList.toggle(
          "is-active",
          i === next
        );

        step.classList.toggle(
          "is-complete",
          i < next
        );
      }
    );

    if (indexLabel) {
      indexLabel.textContent =
        `${String(next + 1).padStart(2,"0")} / 05`;
    }

    if (statusLabel) {
      statusLabel.textContent =
        labels[next];
    }
  };

  const render = () => {
    ticking = false;

    if (
      !mobile.matches
    ) {
      return;
    }

    const rect =
      route.getBoundingClientRect();

    const focus =
      window.innerHeight * .48;

    const start =
      focus -
      rect.top;

    const total =
      Math.max(
        1,
        rect.height -
        window.innerHeight * .42
      );

    const progress =
      clamp(
        start / total,
        0,
        1
      );

    const topStart =
      74;

    const bottomSpace =
      108;

    const travel =
      Math.max(
        1,
        route.offsetHeight -
        topStart -
        bottomSpace
      );

    const y =
      progress *
      travel;

    kiru.style.top =
      `${topStart + y}px`;

    if (ladderProgress) {
      ladderProgress.style.transform =
        `scaleY(${progress})`;
    }

    /*
     * Cada pequeño tramo reproduce el ciclo completo
     * de 10 frames. La animación queda ligada al scroll.
     */
    const cycleProgress =
      (progress * 13) % 1;

    const frameIndex =
      clamp(
        Math.floor(
          cycleProgress * 10
        ),
        0,
        9
      );

    kiruFrame.src =
      stairsFrames[
        progress >= .999
          ? 9
          : frameIndex
      ];

    /*
     * Pequeña oscilación lateral del cuerpo al bajar.
     */
    const sway =
      Math.sin(
        cycleProgress *
        Math.PI * 2
      ) * 1.2;

    kiru.style.transform =
      `translate3d(calc(-50% + ${sway}px), -35%, 0)`;

    const next =
      Math.min(
        4,
        Math.floor(
          progress * 5
        )
      );

    setActive(next);
  };

  const requestRender = () => {
    if (ticking) {
      return;
    }

    ticking = true;

    requestAnimationFrame(
      render
    );
  };

  window.addEventListener(
    "scroll",
    requestRender,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    requestRender,
    { passive: true }
  );

  setActive(0);
  render();
})();


// =========================================================
// JAVSEB V3 — PARTE 06
// COMMERCE FLOW
// =========================================================
(() => {
  "use strict";

  const machine =
    document.getElementById(
      "v3CommerceMachine"
    );

  if (!machine) {
    return;
  }

  const cards = [
    ...machine.querySelectorAll(
      "[data-commerce-stage]"
    )
  ];

  const label =
    document.getElementById(
      "v3CommerceStatusLabel"
    );

  const title =
    document.getElementById(
      "v3CommerceStatusTitle"
    );

  if (!cards.length) {
    return;
  }

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const stages = [
    {
      label: "CLIENTE",
      title: "Explorando productos"
    },
    {
      label: "PEDIDO",
      title: "Carrito y compra conectados"
    },
    {
      label: "NEGOCIO",
      title: "Información lista para gestionar"
    }
  ];

  let active = 0;
  let timer = null;
  let inView = false;
  let paused = false;

  const setStage = (next) => {
    next =
      Math.max(
        0,
        Math.min(
          cards.length - 1,
          next
        )
      );

    active = next;

    machine.dataset.commerceActive =
      String(next);

    cards.forEach(
      (card, i) => {
        card.classList.toggle(
          "is-active",
          i === next
        );
      }
    );

    if (label) {
      label.textContent =
        stages[next].label;
    }

    if (title) {
      title.textContent =
        stages[next].title;
    }
  };

  const stopAuto = () => {
    if (timer) {
      window.clearInterval(
        timer
      );

      timer = null;
    }
  };

  const startAuto = () => {
    stopAuto();

    if (
      reduceMotion ||
      !inView ||
      paused
    ) {
      return;
    }

    timer =
      window.setInterval(
        () => {
          setStage(
            (active + 1) %
            cards.length
          );
        },
        2800
      );
  };

  cards.forEach(
    (card, index) => {
      card.addEventListener(
        "pointerenter",
        () => {
          paused = true;
          stopAuto();
          setStage(index);
        }
      );

      card.addEventListener(
        "pointerleave",
        () => {
          paused = false;
          startAuto();
        }
      );

      card.addEventListener(
        "click",
        () => {
          setStage(index);
        }
      );
    }
  );

  if (
    "IntersectionObserver" in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];

          inView =
            Boolean(
              entry &&
              entry.isIntersecting &&
              entry.intersectionRatio >= .30
            );

          if (inView) {
            startAuto();
          } else {
            stopAuto();
          }
        },
        {
          threshold:
            [.15, .30, .55]
        }
      );

    observer.observe(
      machine
    );
  } else {
    inView = true;
    startAuto();
  }

  setStage(0);
})();


// =========================================================
// JAVSEB V3 — PARTE 07
// KIRU SALUDA EN EL HERO MÓVIL
// =========================================================
(() => {
  "use strict";

  const container =
    document.getElementById(
      "v3MobileHeroKiru"
    );

  const frame =
    document.getElementById(
      "v3MobileHeroGreetingFrame"
    );

  const hero =
    document.querySelector(
      ".v2-hero"
    );

  if (
    !container ||
    !frame ||
    !hero
  ) {
    return;
  }

  const mobile =
    window.matchMedia(
      "(max-width: 640px)"
    );

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const frames =
    Array.from(
      { length: 8 },
      (_, i) =>
        `assets/img/kiru/motion/greeting/kiru-greeting-${String(i + 1).padStart(2,"0")}.png`
    );

  frames.forEach(
    (src) => {
      const image =
        new Image();

      image.src =
        src;
    }
  );

  let played =
    false;

  const wait =
    (ms) =>
      new Promise(
        (resolve) =>
          window.setTimeout(
            resolve,
            ms
          )
      );

  const play =
    async () => {

      if (
        played ||
        !mobile.matches
      ) {
        return;
      }

      played = true;

      /*
       * Si la intro cinematográfica está activa,
       * esperamos a que desaparezca.
       */
      let introWait =
        0;

      while (
        document.getElementById(
          "v3Intro"
        ) &&
        introWait < 9000
      ) {
        await wait(120);
        introWait += 120;
      }

      await wait(500);

      if (reduceMotion) {
        frame.src =
          frames[7];

        return;
      }

      /*
       * Dos saludos suaves.
       */
      for (
        let cycle = 0;
        cycle < 2;
        cycle += 1
      ) {
        for (
          let i = 0;
          i < frames.length;
          i += 1
        ) {
          frame.src =
            frames[i];

          await wait(115);
        }
      }

      frame.src =
        frames[7];
    };

  if (
    "IntersectionObserver" in window
  ) {
    const observer =
      new IntersectionObserver(
        (entries) => {
          const entry =
            entries[0];

          if (
            entry &&
            entry.isIntersecting &&
            entry.intersectionRatio >= .30
          ) {
            observer.disconnect();
            play();
          }
        },
        {
          threshold:
            [.2,.3,.5]
        }
      );

    observer.observe(
      hero
    );
  } else {
    play();
  }
})();


// =========================================================
// JAVSEB V3 — PARTE 07
// CAPABILITY CORE
// =========================================================
(() => {
  "use strict";

  const section =
    document.querySelector(
      ".v3-capabilities"
    );

  const core =
    document.getElementById(
      "v3CapabilityCore"
    );

  if (
    !section ||
    !core
  ) {
    return;
  }

  const tabs = [
    ...section.querySelectorAll(
      "[data-capability]"
    )
  ];

  const previews = [
    ...section.querySelectorAll(
      "[data-capability-preview]"
    )
  ];

  const label =
    document.getElementById(
      "v3CapabilityLabel"
    );

  const title =
    document.getElementById(
      "v3CapabilityTitle"
    );

  const description =
    document.getElementById(
      "v3CapabilityDescription"
    );

  const pills =
    document.getElementById(
      "v3CapabilityPills"
    );

  const status =
    document.getElementById(
      "v3CapabilityStatus"
    );

  const data = {
    systems: {
      label:
        "01 / SISTEMAS PERSONALIZADOS",

      title:
        "Software que se adapta a tu operación.",

      description:
        "Organizamos procesos, usuarios, información, ventas y tareas alrededor de la forma real en la que trabaja tu negocio.",

      pills:
        ["Procesos","Usuarios","Inventarios","Reportes"],

      status:
        "OPERACIÓN CONECTADA"
    },

    web: {
      label:
        "02 / WEB & E-COMMERCE",

      title:
        "Una presencia digital preparada para convertir.",

      description:
        "Creamos sitios y tiendas pensados para comunicar con claridad, generar confianza y transformar visitas en oportunidades.",

      pills:
        ["Web","E-commerce","Catálogo","Pedidos"],

      status:
        "PRESENCIA ONLINE"
    },

    apps: {
      label:
        "03 / APLICACIONES",

      title:
        "Tu servicio también puede vivir en el bolsillo.",

      description:
        "Diseñamos aplicaciones para acercar procesos, servicios e información a clientes, equipos y usuarios desde el celular.",

      pills:
        ["Mobile","Usuarios","Servicios","Notificaciones"],

      status:
        "EXPERIENCIA MÓVIL"
    },

    automation: {
      label:
        "04 / IA & AUTOMATIZACIÓN",

      title:
        "Menos tareas repetitivas. Más tiempo para avanzar.",

      description:
        "Conectamos reglas, inteligencia artificial y automatizaciones para reducir trabajo manual y acelerar respuestas y procesos.",

      pills:
        ["IA","Chatbots","Flujos","Automatización"],

      status:
        "FLUJOS ACTIVOS"
    },

    integrations: {
      label:
        "05 / APIs & INTEGRACIONES",

      title:
        "Tus herramientas no tienen por qué trabajar aisladas.",

      description:
        "Integramos sistemas, aplicaciones, pagos y servicios para que la información pueda viajar entre ellos de forma útil.",

      pills:
        ["APIs","Pagos","Servicios","Sincronización"],

      status:
        "SERVICIOS CONECTADOS"
    },

    data: {
      label:
        "06 / DATOS & DASHBOARDS",

      title:
        "La información sirve más cuando puedes entenderla.",

      description:
        "Organizamos datos, indicadores y reportes para que puedas observar lo que ocurre y tomar mejores decisiones.",

      pills:
        ["Bases de datos","KPIs","Dashboards","Reportes"],

      status:
        "DATOS EN TIEMPO REAL"
    }
  };

  let active =
    "systems";

  let switchTimer =
    null;

  const setCapability =
    (key) => {

      if (
        !data[key] ||
        key === active
      ) {
        return;
      }

      active =
        key;

      core.dataset.capabilityActive =
        key;

      tabs.forEach(
        (tab) => {
          const selected =
            tab.dataset.capability ===
            key;

          tab.classList.toggle(
            "is-active",
            selected
          );

          tab.setAttribute(
            "aria-selected",
            selected
              ? "true"
              : "false"
          );
        }
      );

      if (switchTimer) {
        window.clearTimeout(
          switchTimer
        );
      }

      core.classList.add(
        "is-switching"
      );

      switchTimer =
        window.setTimeout(
          () => {

            previews.forEach(
              (preview) => {
                preview.classList.toggle(
                  "is-active",
                  preview.dataset.capabilityPreview ===
                    key
                );
              }
            );

            if (label) {
              label.textContent =
                data[key].label;
            }

            if (title) {
              title.textContent =
                data[key].title;
            }

            if (description) {
              description.textContent =
                data[key].description;
            }

            if (status) {
              status.textContent =
                data[key].status;
            }

            if (pills) {
              pills.innerHTML =
                data[key].pills
                  .map(
                    (item) =>
                      `<i>${item}</i>`
                  )
                  .join("");
            }

            core.classList.remove(
              "is-switching"
            );

          },
          120
        );
    };

  tabs.forEach(
    (tab) => {

      tab.addEventListener(
        "click",
        () => {
          setCapability(
            tab.dataset.capability
          );
        }
      );

    }
  );

  /*
   * Pequeño movimiento del núcleo con el mouse.
   * No se usa en touch.
   */
  const finePointer =
    window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;

  const reduceMotion =
    window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

  const orbit =
    section.querySelector(
      ".v3-core-orbit"
    );

  if (
    finePointer &&
    !reduceMotion &&
    orbit
  ) {
    let raf =
      0;

    core.addEventListener(
      "pointermove",
      (event) => {

        if (raf) {
          cancelAnimationFrame(
            raf
          );
        }

        raf =
          requestAnimationFrame(
            () => {

              const rect =
                core.getBoundingClientRect();

              const x =
                (
                  (event.clientX - rect.left) /
                  rect.width
                ) - .5;

              const y =
                (
                  (event.clientY - rect.top) /
                  rect.height
                ) - .5;

              orbit.style.translate =
                `${x * 5}px ${y * 4}px`;

            }
          );

      }
    );

    core.addEventListener(
      "pointerleave",
      () => {
        orbit.style.translate =
          "";
      }
    );
  }

  /*
   * Estado inicial.
   */
  core.dataset.capabilityActive =
    "systems";
})();

