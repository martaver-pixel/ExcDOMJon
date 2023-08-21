const d = document;

export function countdown(cls, msg) {
  const $cd = d.querySelector(cls),
    final = new Date(2023, 7, 10, 17).getTime();

  let intervalo = setInterval(() => {
    let start = new Date().getTime(),
      timeDifference = final - start,
      days = Math.floor(timeDifference / 1000 / 60 / 60 / 24),
      hours = (
        "0" +
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      minutes = (
        "0" + Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((timeDifference % (1000 * 60)) / 1000)).slice(
        -2
      );

    $cd.innerHTML = `<h3>Faltan ${days} días ${hours} horas ${minutes} minutos ${seconds} segundos para ver al pisculichi</h3>`;
    if (timeDifference < 0) {
      clearInterval(intervalo);
      $cd.innerHTML = `<h1> ${msg} </h1>`;
    }
  }, 1000);
}
