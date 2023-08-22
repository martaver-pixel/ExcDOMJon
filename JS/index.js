import hamburgerMenu from "./burguer_menu.js";
import { digitalClock, alarm } from "./reloj.js";
import { focusingCircle } from "./moving_circle.js";
import { countdown } from "./countdown.js";
import { arrowBtn } from "./arrow_button.js";
import { changeMode } from "./dark_mode.js";
import { responsiveSection } from "./responsive.js";
import { responsiveTester } from "./responsive_tester.js";
import userDeviceInfo from "./device_detector.js";
import status from "./internet_status.js";
import webCam from "./webcam.js";
import geolocation from "./geolocation.js";
import breedFilter from "./breed_filter.js";
import digitalRaffle from "./digital_raffle.js";
import slider from "./slider.js";
import scrollSpy from "./scroll_listener.js";
import videoPlayer from "./video.js";
import contactFromValidations from "./validaciones_form.js";
import speechReader from "./narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock(".reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/gatito.mp3", "#activar-alarma", "#desactivar-alarma");
  focusingCircle(".circle");
  countdown(".countdown", "TENES TRABAJO?");
  arrowBtn(".arrowButton");
  responsiveSection(".responsive-container");
  responsiveTester("form", "close");
  userDeviceInfo("user-device");
  status();
  webCam("webcam");
  geolocation("geo");
  breedFilter("searchInput", ".card");
  digitalRaffle("sorteo-container", "sorteo-btn");
  slider();
  scrollSpy();
  videoPlayer("video");
  contactFromValidations();
});

changeMode(".dark-mode", ".light-mode", "body");
speechReader();
