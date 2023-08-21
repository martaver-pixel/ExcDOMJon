const d = document;

export default function digitalRaffle(sorteoContainer, sorteoBtn) {
  const $sorteoContainer = d.getElementById(sorteoContainer),
    $sorteoChildren = $sorteoContainer.children,
    nodeLenght = $sorteoContainer.children.length,
    $sorteoBtn = d.getElementById(sorteoBtn);

  for (let i = 0; i < nodeLenght; i++) {
    $sorteoChildren[i].setAttribute("id", [i]);
  }

  $sorteoBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * nodeLenght);
    for (let i = 0; i < nodeLenght; i++) {
      $sorteoChildren[i].style.backgroundColor = null;
    }
    $sorteoChildren[random].style.backgroundColor = `var(--${$sorteoChildren[
      random
    ].innerText.toLowerCase()})`;
  });
}
