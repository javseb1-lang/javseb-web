(() => {
  "use strict";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const year = document.getElementById("playYear"); if (year) year.textContent = new Date().getFullYear();
  const progress = document.getElementById("playProgress"); let ticking = false;
  const updateProgress = () => { const top = window.scrollY || document.documentElement.scrollTop; const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight); if (progress) progress.style.transform = `scaleX(${Math.min(1, Math.max(0, top / max))})`; ticking = false; };
  window.addEventListener("scroll", () => { if (!ticking) { requestAnimationFrame(updateProgress); ticking = true; } }, { passive:true }); updateProgress();
  const items = document.querySelectorAll(".play-reveal");
  if (!reduceMotion && "IntersectionObserver" in window) { const obs = new IntersectionObserver((entries,o)=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("is-visible");o.unobserve(e.target);}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"}); items.forEach(i=>obs.observe(i)); } else { items.forEach(i=>i.classList.add("is-visible")); }
  const shell=document.getElementById("playVideoShell"), video=document.getElementById("playShowreel"); if(shell&&video){ const ready=()=>shell.classList.add("is-video-ready"); const fail=()=>shell.classList.remove("is-video-ready"); video.addEventListener("canplay",ready,{once:true}); video.addEventListener("loadeddata",ready,{once:true}); video.addEventListener("error",fail); if(video.readyState>=2) ready(); }
})();
