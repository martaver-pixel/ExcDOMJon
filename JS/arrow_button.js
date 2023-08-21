const d = document;

export function arrowBtn(cls) {
  const arrow = d.querySelector(cls);
  d.addEventListener("scroll", () => {
    if (window.scrollY > 160) {
      arrow.classList.add("is-active");
    }
    if (window.scrollY < 160) {
      arrow.classList.remove("is-active");
    }
  });

  arrow.addEventListener("click", (e) => {
    if (e.target.matches(cls)) {
      window.scrollTo({ behavior: "smooth", top: 0 });
    }
  });
}
