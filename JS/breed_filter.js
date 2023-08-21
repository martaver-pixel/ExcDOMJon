const d = document;

export default function breedFilter(searchInp, card) {
  const $input = d.getElementById(searchInp),
    $card = d.querySelectorAll(card);

  $input.addEventListener("input", (e) => {
    $card.forEach((node) => {
      const $figcaption = node.querySelector("figcaption"),
        figLowerCase = $figcaption.innerText.toLowerCase();
      $figcaption.setAttribute("id", `${figLowerCase}`);
      if (!$figcaption.id.includes($input.value)) {
        node.classList.add("hiddenCard");
      } else {
        node.classList.remove("hiddenCard");
      }
    });
  });
}
