const d = document;
function setResponsiveContent(selector) {
  const $container = d.querySelector(selector);

  if (window.matchMedia("(min-width: 500px)").matches) {
    $container.innerHTML = `<iframe
          class="responsive"
          width="665"
          height="480"
          src="https://www.youtube.com/embed/YYbsoBtXEEc"
          title="La vez que casi me mata un tío - Soy Una Pringada"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe
        >
        <iframe
          class="responsive"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4748.139502086159!2d-58.520981113202545!3d-34.60092365260503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7cd94d6d3e5%3A0xe340dcd012c8d71!2sEsquina%20Diego%20Armando%20Maradona%20%7C%20Segurola%20y%20Habana!5e0!3m2!1ses!2ses!4v1691410019308!5m2!1ses!2ses"
          width="665"
          height="480"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>`;
  } else {
    $container.innerHTML = `
    <a class="responsive-anchor" href="https://youtu.be/YYbsoBtXEEc">Video</a>
    <a class="responsive-anchor" href="https://www.google.com/maps/place/Esquina+Diego+Armando+Maradona+%7C+Segurola+y+Habana,+Av.+Segurola+4310,+Buenos+Aires,+Argentina/@-34.6007557,-58.5184228,16z/data=!4m6!3m5!1s0x95bcb7cd94d6d3e5:0xe340dcd012c8d71!8m2!3d-34.6007557!4d-58.5184228!16s%2Fg%2F11qk9fthk1">Mapa</a>
    `;
  }
}

export function responsiveSection(selector) {
  window.addEventListener("resize", () => setResponsiveContent(selector));
  window.addEventListener("load", () => setResponsiveContent(selector));
}
