const d = document,
  w = window;

export function responsiveTester(form, cerrarBtn) {
  const $form = d.getElementById(form),
    $cerrar = d.getElementById(cerrarBtn),
    $url = d.getElementById("url"),
    $height = d.getElementById("height"),
    $width = d.getElementById("width");
  let openedWindow;

  $form.addEventListener("submit", (e) => {
    e.preventDefault();

    let urlValue = $url.value,
      heightValue = $height.value,
      widthValue = $width.value,
      params = `width=${widthValue},height=${heightValue}`;
    openedWindow = w.open(urlValue, "_blank", params);
  });

  $cerrar.addEventListener("click", (e) => {
    openedWindow.close();
  });
}
