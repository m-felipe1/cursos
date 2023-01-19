import scrollTopBtn from "./boton_top.js";
import darkTheme from "./cambiar_tema.js";
import slider from "./carrusel.js";
import countdown from "./countdown.js";
import webCam from "./deteccion_camara.js";
import networkStatus from "./deteccion_conexion.js";
import userDeviceInfo from "./deteccion_dispositivis.js";
import { moveBall, shortcuts } from "./eventos_teclado.js";
import searchFilters from "./fittro_busqueda.js";
import getGeoLOcation from "./geolocalizacion.js";
import hamburgerMenu from "./menu_hambuerguesa.js";
import speechReader from "./narrador.js";
import narrador from "./narrador.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_resposive.js";
import { digitalClock, alarm } from "./reloj.js";
import scrollSpy from "./scroll_spy.js";
import sorteo from "./sorteo.js";
import contactFormVvalidations from "./validaciones_formulario.js";
import smatVideo from "./video_inteligente.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");

  alarm("./assets/jumpa.mp3", "#activar-alarma", "#desactivar-alarma");

  countdown("countdown", "April 29, 2023 16:29:00", "Feliz cumpleaños!!!");

  scrollTopBtn(".scroll-top-btn");

  responsiveMedia(
    "youtube",
    "(min-width: 1024px)",
    `<a href='https://youtu.be/VoN4x3R0TCQ' target='_blank' rel='noopener'>Ver Video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/VoN4x3R0TCQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width: 1024px)",
    `<a href='https://goo.gl/maps/qjYEy3yG89PuEe2F6' target='_blank' rel='noopener'>Ver Mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d996.1797538325551!2d-75.44014071626756!3d2.8970956309953952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sco!4v1673295117900!5m2!1sen!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  responsiveTester("responsive-tester");

  userDeviceInfo("user-device");

  webCam("webcam");

  getGeoLOcation("geolocation");

  searchFilters(".card-filter", ".card");

  sorteo("#winner-btn", ".player");

  slider();

  scrollSpy();

  smatVideo();

  contactFormVvalidations();

  narrador();
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");

networkStatus();

speechReader();
