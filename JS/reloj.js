const d = document;
export function digitalClock(clock, btnPlay, btnStop) {
  let clockTiempo;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      clockTiempo = setInterval(() => {
        let clockHour = new Date().toLocaleTimeString();
        d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
      }, 1000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearInterval(clockTiempo);
      d.querySelector(clock).innerHTML = null;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}

export function alarm(sound, btnPlay, btnStop) {
  const $alarm = d.createElement("audio");
  $alarm.src = sound;
  let alarma;
  d.addEventListener("click", (e) => {
    if (e.target.matches(btnPlay)) {
      console.log($alarm);
      alarma = setTimeout(() => {
        $alarm.play();
      }, 2000);
      e.target.disabled = true;
    }
    if (e.target.matches(btnStop)) {
      clearTimeout(alarma);
      $alarm.pause();
      $alarm.currentTime = 0;
      d.querySelector(btnPlay).disabled = false;
    }
  });
}
