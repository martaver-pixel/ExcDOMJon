const d = document,
  w = window,
  n = navigator;

function isOnLine() {
  const div = d.createElement("div");
  div.classList.add("line-status");
  if (n.onLine) {
    const texto = d.createTextNode("Conexión a internet restablecida");
    div.classList.add("on");
    div.appendChild(texto);
    d.body.prepend(div);

    setTimeout(() => {
      div.remove();
    }, 4000);
  } else {
    const texto = d.createTextNode("Se ha perdido la conexión a internet");
    div.classList.add("off");
    div.appendChild(texto);
    d.body.prepend(div);

    setTimeout(() => {
      div.remove();
    }, 4000);
  }
}

export default function status() {
  w.addEventListener("online", isOnLine);
  w.addEventListener("offline", isOnLine);
}
