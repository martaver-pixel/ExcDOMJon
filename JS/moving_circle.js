const d = document,
  circulo = d.querySelector(".circulo");
let style = getComputedStyle(circulo),
  topVh = parseInt(style.top),
  leftVh = parseInt(style.left);

export function focusingCircle() {
  d.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && topVh < 40) {
      circulo.style.top = `${(topVh += 1)}vh`;
      e.preventDefault();
    }
    if (e.key === "ArrowUp" && topVh > 0) {
      circulo.style.top = `${(topVh -= 1)}vh`;
      e.preventDefault();
    }
    if (e.key === "ArrowRight" && leftVh < 75) {
      circulo.style.left = `${(leftVh += 1)}vh`;
      e.preventDefault();
    }
    if (e.key === "ArrowLeft" && leftVh > -75) {
      circulo.style.left = `${(leftVh -= 1)}vh`;
      e.preventDefault();
    }
  });
}
