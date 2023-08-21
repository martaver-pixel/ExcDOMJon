const d = document,
  n = navigator;

export default function geolocation(id) {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };
  function success(pos) {
    const crd = pos.coords,
      $geo = d.getElementById(id),
      $maps = d.getElementById("maps");
    $maps.setAttribute(
      "href",
      `https://maps.google.com/?q=${crd.latitude},${crd.longitude}`
    );
    $geo.innerHTML = `<p><mark>Your current position is:</mark>
    <br> Latitude : ${crd.latitude} <br>Longitude: ${
      crd.longitude
    } <br>More or less ${Math.round(crd.accuracy)} meters.</p>`;
  }

  function error(err) {
    const $geo = d.getElementById(id),
      $maps = d.getElementById("maps");
    $maps.remove();
    $geo.innerHTML = `<p><mark>ERROR(${err.code}): ${err.message}</mark></p>`;
  }

  n.geolocation.getCurrentPosition(success, error, options);
}
