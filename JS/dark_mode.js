const d = document,
  ls = localStorage;

export function changeMode(moonBtn, sunBtn, body) {
  const $moon = d.querySelector(moonBtn),
    $sun = d.querySelector(sunBtn),
    $bodyStyle = d.querySelector(body);

  function toggle() {
    $bodyStyle.classList.toggle("is-active");
    $moon.classList.toggle("is-active");
    $sun.classList.toggle("is-active");
    d.querySelector(".cuadrado").classList.toggle("is-active");
  }

  d.addEventListener("click", (e) => {
    if (e.target.matches(sunBtn) || e.target.matches(moonBtn)) {
      toggle();
    }
    if (e.target.matches(moonBtn)) {
      ls.removeItem("darkmode");
      ls.setItem("darkmode", "true");
      console.log(ls.getItem("darkmode"));
    }
    if (e.target.matches(sunBtn)) {
      ls.removeItem("darkmode");
      ls.setItem("darkmode", "false");
      console.log(ls.getItem("darkmode"));
    }
  });
  window.addEventListener("load", () => {
    if (ls.getItem("darkmode") === null) {
      ls.setItem("darkmode", "false");
    }
    if (ls.getItem("darkmode") === "true") {
      toggle();
    }
  });
}
