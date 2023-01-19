const reinicio = document.getElementById("reiniciar");
const selecAtaque = document.getElementById("seleccionar-ataque");
const mascota = document.getElementById("mascota");

const reiniciar = document.getElementById("reiniciar");

const selecMascota = document.getElementById("selecconar-mascota");

const spamMascotaJugador = document.getElementById("mascota-jugador");

const spamMascotaEnemigo = document.getElementById("mascota-enemigo");

const spamVidasJugador = document.getElementById("vidas-jugador");
const spamVidasEnemigo = document.getElementById("vidas-enemigo");

const resultadojuego = document.getElementById("resultado-juego");
const ataquejugadora = document.getElementById("ataque-jugador");
const ataqueenemigob = document.getElementById("ataque-enemigo");

const sectionFinal = document.getElementById("resultado-juego");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");
const contenedorAtaques = document.getElementById("contenedorAtaques");

const sectionVerMapa = document.getElementById("ver-mapa");
const mapa = document.getElementById("mapa");
let jugadorId = null;
let enemigoId = null;
let pokemones = [];
let pokemonesEnemigos = [];
let ataqueJugador = [];
let ataqueEnemigo = [];
let imputbulbasor;
let imputdugtrio;
let imputcharmender;
let imputgolem;
let imputmewto;
let imputonix;
let vidasJugador = 5;
let vidasEnemigo = 5;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let resultado = "";
let opcionDePokemones;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataquesPokemon;
let ataquesPokemonEnemigo;
let agua;
let tierra;
let fuego;
let aguaFuego;
let aguaTierra;
let tierraFuego;
let botones = [];
let indexAtaqueEnemigo;
let indexAtaqueJugador;
let resultadoAtaque;
let lienzo = mapa.getContext("2d");
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = "./imagen/mapa.webp";
let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 350;

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20;
}

alturaQueBuscamos = (anchoDelMapa * 600) / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

class Pokemon {
  constructor(nombre, foto, vida, fotoMapa, id = null) {
    this.id = id;
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.ancho = 40;
    this.alto = 40;
    this.x = aleatorio(0, mapa.width - this.ancho);
    this.y = aleatorio(0, mapa.height - this.alto);
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarPokemon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

let bulbasor = new Pokemon(
  "Bulbasor",
  "./imagen/Bulbasaur.webp",
  5,
  "./imagen/bulbasorA.png"
);

let dugtrio = new Pokemon(
  "Dugtrio",
  "./imagen/dug.png",
  5,
  "./imagen/dugtrioA.png"
);

let charmender = new Pokemon(
  "Charmender",
  "./imagen/char.png",
  5,
  "./imagen/charmenderA.png"
);

let golem = new Pokemon(
  "Golem",
  "./imagen/golem.png",
  5,
  "./imagen/golemA.png"
);

let mewto = new Pokemon("Mewto", "./imagen/mew.webp", 5, "./imagen/mewtoA.png");

let onix = new Pokemon("Onix", "./imagen/onix.png", 5, "./imagen/onixA.png");

let ATAQUES = [
  { nombre: "agua", id: "agua" },
  { nombre: "fuego", id: "fuego" },
  { nombre: "tierra", id: "tierra" },
  { nombre: "agua y fuego", id: "agua-fuego" },
  { nombre: "agua y tierra", id: "agua-tierra" },
  { nombre: "tierra y fuego", id: "tierra-fuego" },
];

const BULBASOR_ATAQUES = [...ATAQUES];
BULBASOR_ATAQUES.push({ nombre: "agua", id: "agua" });
bulbasor.ataques.push(...BULBASOR_ATAQUES);

const DUGTRIO_ATAQUES = [...ATAQUES];
DUGTRIO_ATAQUES.push({ nombre: "tierra", id: "tierra" });
dugtrio.ataques.push(...DUGTRIO_ATAQUES);

console.log(ATAQUES);

const CHARMENDER_ATAQUES = [...ATAQUES];
CHARMENDER_ATAQUES.push({ nombre: "fuego", id: "fuego" });
charmender.ataques.push(...CHARMENDER_ATAQUES);

const GOLEM_ATAQUES = [...ATAQUES];
GOLEM_ATAQUES.push({ nombre: "agua y fuego", id: "agua-fuego" });
golem.ataques.push(...GOLEM_ATAQUES);

MEWTO_ATAQUES = [...ATAQUES];
MEWTO_ATAQUES.push({ nombre: "agua y fuego", id: "agua-fuego" });
mewto.ataques.push(...MEWTO_ATAQUES);

ONIX_ATAQUES = [...ATAQUES];
ONIX_ATAQUES.push({ nombre: "agua y tierra", id: "agua-tierra" });
onix.ataques.push(...ONIX_ATAQUES);

pokemones.push(bulbasor, dugtrio, charmender, golem, mewto, onix);

function iniciarJuego() {
  reinicio.style.display = "none";
  selecAtaque.style.display = "none";
  sectionVerMapa.style.display = "none";

  pokemones.forEach((Pokemon) => {
    opcionDePokemones = `
             <input type="radio" name="mascota" id=${Pokemon.nombre} />
            <label class="tarjeta-de-pokemon" for=${Pokemon.nombre}>
                <p>${Pokemon.nombre}</p>
                <img src=${Pokemon.foto} alt=${Pokemon.nombre}>
            </label>
        `;
    contenedorTarjetas.innerHTML += opcionDePokemones;

    imputbulbasor = document.getElementById("Bulbasor");
    imputdugtrio = document.getElementById("Dugtrio");
    imputcharmender = document.getElementById("Charmender");
    imputgolem = document.getElementById("Golem");
    imputmewto = document.getElementById("Mewto");
    imputonix = document.getElementById("Onix");
  });

  mascota.addEventListener("click", seleccionarMascota);

  reiniciar.addEventListener("click", reiniciarJuego);

  unirseAlJuego();
}

function unirseAlJuego() {
  fetch("http://localhost:8080/unirse").then(function (res) {
    if (res.ok) {
      res.text().then(function (respuesta) {
        console.log(respuesta);
        jugadorId = respuesta;
      });
    }
  });
}

function seleccionarMascota() {
  const inputs = document.querySelectorAll("#contenedorTarjetas input");
  let selected = null;
  for (const item of inputs) {
    if (item.checked) {
      selected = item;
      break;
    }
  }
  if (selected) {
    spamMascotaJugador.innerHTML = selected.id.toUpperCase();
    mascotaJugador = selected.id;
  } else {
    alert("SELECCIONE UNA MASCOTA");
    return;
  }

  seleccionarPokemon(mascotaJugador);

  selecMascota.style.display = "none";
  sectionVerMapa.style.display = "flex";
  iniciarMapa();

  extraerAtaques(mascotaJugador);
}

function seleccionarPokemon(mascotaJugador) {
  fetch(`http://localhost:8080/pokemon/${jugadorId}`, {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      pokemon: mascotaJugador,
    }),
  });
}

function seleccionarMascotaEnemigo(enemigo) {
  let ataqueAleatorio = aleatorio(0, pokemones.length - 1);
  //spamMascotaEnemigo.innerHTML = pokemones[ataqueAleatorio].nombre.toUpperCase()
  spamMascotaEnemigo.innerHTML = enemigo.nombre.toUpperCase();
  ataquesPokemonEnemigo = pokemones[ataqueAleatorio].ataques;

  secuenciaAtaque();
}

function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < pokemones.length; i++) {
    if (mascotaJugador == pokemones[i].nombre) {
      ataques = pokemones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    ataquesPokemon = `
        <button id="${
          ataque.id
        }" class="botonAtaque BAtaque">${ataque.nombre.toUpperCase()}</button>
        `;
    contenedorAtaques.innerHTML += ataquesPokemon;
  });

  botones = document.querySelectorAll(".BAtaque");
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      ataqueJugador.push(e.target.textContent);
      boton.disabled = true;
      boton.style.background = "#112f58";
      if (ataqueJugador.length == 7) {
        enviarAtaques();
      }
    });
  });
}

function enviarAtaques() {
  fetch(`http:/localhost:8080/pokemon/${jugadorId}/ataques`, {
    method: "post",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify({
      ataques: ataqueJugador,
    }),
  });

  intervalo = setInterval(obtenerAtaques, 1000);
}

function obtenerAtaques() {
  fetch(`http:/localhost:8080/pokemon/${enemigoId}/ataques`).then(function (
    res
  ) {
    if (res.ok) {
      res.json().then(function ({ ataques }) {
        if (ataques.length == 7) {
          ataqueEnemigo = ataques;
          enfrentamientos();
        }
      });
    }
  });
}

// function generarAtaqueEnemigo() {
//   let ataqueAleatorio = aleatorio(0, ataquesPokemonEnemigo.length - 1);

//   if (ataqueAleatorio == 0 || ataqueAleatorio == 1) {
//     ataqueEnemigo.push("AGUA");
//   } else if (ataqueAleatorio == 2) {
//     ataqueEnemigo.push("TIERRA");
//   } else if (ataqueAleatorio == 3) {
//     ataqueEnemigo.push("FUEGO");
//   } else if (ataqueAleatorio == 4) {
//     ataqueEnemigo.push("AGUA Y FUEGO");
//   } else if (ataqueAleatorio == 5) {
//     ataqueEnemigo.push("AGUA Y TIERA");
//   } else {
//     ataqueEnemigo.push("TIERRA Y FUEGO");
//   }
//   console.log(ataqueEnemigo);
// }

//function iniciarPelea() {
//if (ataqueJugador.length == 7) {
// enfrentamientos()
//}
//}
function indexAmbosOponentes(jugador, enemigo) {
  indexAtaqueJugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
  console.log(indexAtaqueJugador, indexAtaqueEnemigo);
}

let objEnfrentamientos = [
  { agua: { tierra: "perdi" } },
  { tierra: { fuego: "perdi" } },
  { fuego: { aguayfuego: "perdi" } },
  { agua: { fuego: "perdi" } },
  { aguayfuego: { aguaytierra: "perdi" } },
  { aguaytierra: { tierrayfuego: "perdi" } },
  { tierrayfuego: { agua: "perdi" } },
  { agua: { aguaytierra: "perdi" } },
  { fuego: { tierrayfuego: "perdi" } },
];

// El primer arguemnto es el ganador del enfrentamiento
function generarE(ataEnemigo, miAtaque) {
  try {
    ataEnemigo = ataEnemigo.toLowerCase().replaceAll(" ", "");
    miAtaque = miAtaque.toLowerCase().replaceAll(" ", "");

    let enemigo = objEnfrentamientos.filter(
      (y) => Object.keys(y)[0] === ataEnemigo
    );
    enemigo = enemigo.map((f) => f[ataEnemigo]);

    let mi = enemigo.filter((y) => Object.keys(y)[0] === miAtaque);

    console.log({ enemigo, mi });
    return mi[0][miAtaque] || null;
  } catch {
    return "gane";
  }
}

function enfrentamientos() {
  clearInterval(intervalo);

  for (let index = 0; index < ataqueJugador.length; index++) {
    let resultadoAtaque2 = generarE(ataqueEnemigo[index], ataqueJugador[index]);

    if (ataqueJugador[index] == ataqueEnemigo[index]) {
      resultadoAtaque = "empate";
      continue;
    } else if (resultadoAtaque2 === "perdi") {
      victoriasEnemigo++;
    } else {
      victoriasJugador++;
      resultadoAtaque2 = "gane";
      spamVidasJugador.innerHTML = victoriasJugador;
    }

    // if (ataqueJugador[index] == ataqueEnemigo[index]) {
    //   resultadoAtaque = "empate";
    // } else if (
    //   ataqueEnemigo[index] == "AGUA" &&
    //   ataqueJugador[index] == "TIERRA"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "TIERRA" &&
    //   ataqueJugador[index] == "FUEGO"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "FUEGO" &&
    //   ataqueJugador[index] == "AGUA Y FUEGO"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "AGUA" &&
    //   ataqueJugador[index] == "FUEGO"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "AGUA Y FUEGO" &&
    //   ataqueJugador[index] == "AGUA Y TIERRA"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "AGUA Y TIERRA" &&
    //   ataqueJugador[index] == "TIERRA Y FUEGO"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "TIERRA Y FUEGO" &&
    //   ataqueJugador[index] == "AGUA"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "AGUA" &&
    //   ataqueJugador[index] == "AGUA Y TIERRA"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else if (
    //   ataqueEnemigo[index] == "FUEGO" &&
    //   ataqueJugador[index] == "TIERRA Y FUEGO"
    // ) {
    //   victoriasEnemigo++;
    //   resultadoAtaque = "perdi";
    // } else {
    //   victoriasJugador++;
    //   resultadoAtaque = "gane";
    //   spamVidasJugador.innerHTML = victoriasJugador;
    // } //console.log(ataqueJugador[index],ataqueEnemigo[index])
    spamVidasEnemigo.innerHTML = victoriasEnemigo;
    indexAmbosOponentes(index, index);
    crearResultado();
  }

  quienGana();
}

function quienGana() {
  if (victoriasJugador == victoriasEnemigo) {
    crearMensaje("EMPATASTE");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensaje("FELICIDADES GANASTE");
  } else {
    crearMensaje("LO SIENTO PERDISTE");
  }
}

function crearMensaje(resultadoFinal) {
  let parrafo = document.createElement("p");
  sectionFinal.innerHTML = resultadoFinal;

  /* botones.forEach(function (boton) {
        boton.disabled = true
        boton.style.background = '#CF0A0A'
    })*/

  reinicio.style.display = "block";
}

function reiniciarJuego() {
  location.reload();
}

function crearResultado() {
  let nuevoAtaqueEnemigo = document.createElement("p");
  let nuevoAtaqueJugador = document.createElement("p");
  if (resultadoAtaque == "gane") {
    nuevoAtaqueEnemigo.classList.add("gane");
    nuevoAtaqueJugador.classList.add("gane");
  } else if (resultadoAtaque == "perdi") {
    nuevoAtaqueEnemigo.classList.add("perdi");
    nuevoAtaqueJugador.classList.add("perdi");
  } else {
    nuevoAtaqueEnemigo.classList.add("empate");
    nuevoAtaqueJugador.classList.add("empate");
  }
  nuevoAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;
  nuevoAtaqueJugador.innerHTML = indexAtaqueJugador;
  ataquejugadora.appendChild(nuevoAtaqueJugador);
  ataqueenemigob.appendChild(nuevoAtaqueEnemigo);

  //let parrafo = document.createElement('p')
  //parrafo.innerHTML = "tu mascota ataco con " + ataqueJugador + " la mascota de tu enmigo ataco con " + ataqueEnemigo + ' tu ' + resultado
  //ultimoMensaje.appendChild(parrafo)
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function pintarCanvas() {
  mascotaJugadorObjeto.x =
    mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y =
    mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjeto.pintarPokemon();
  enviarPosicion(mascotaJugadorObjeto.x, mascotaJugadorObjeto.y);

  pokemonesEnemigos.forEach(function (pokemon) {
    pokemon.pintarPokemon();
    revisarColision(pokemon);
  });
}

function enviarPosicion(x, y) {
  fetch(`http://localhost:8080/pokemon/${jugadorId}/posicion`, {
    method: "post",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      x,
      y,
    }),
  }).then(function (res) {
    if (res.ok) {
      res.json().then(function ({ enemigos }) {
        pokemonesEnemigos = enemigos.map(function (enemigo) {
          let pokemonEnemigo = null;
          const pokemonNombre = enemigo.pokemon.nombre || "";
          if (pokemonNombre == "Bulbasor") {
            pokemonEnemigo = new Pokemon(
              "Bulbasor",
              "./imagen/Bulbasaur.webp",
              5,
              "./imagen/bulbasorA.png",
              enemigo.id
            );
          } else if (pokemonNombre == "Dugtrio") {
            pokemonEnemigo = new Pokemon(
              "Dugtrio",
              "./imagen/dug.png",
              5,
              "./imagen/dugtrioA.png",
              enemigo.id
            );
          } else if (pokemonNombre == "Charmender") {
            pokemonEnemigo = new Pokemon(
              "Charmender",
              "./imagen/char.png",
              5,
              "./imagen/charmenderA.png",
              enemigo.id
            );
          } else if (pokemonNombre == "Golem") {
            pokemonEnemigo = new Pokemon(
              "Golem",
              "./imagen/golem.png",
              5,
              "./imagen/golemA.png",
              enemigo.id
            );
          } else if (pokemonNombre == "Mewto") {
            pokemonEnemigo = new Pokemon(
              "Mewto",
              "./imagen/mew.webp",
              5,
              "./imagen/mewtoA.png",
              enemigo.id
            );
          } else if (pokemonNombre == "Onix") {
            pokemonEnemigo = new Pokemon(
              "Onix",
              "./imagen/onix.png",
              5,
              "./imagen/onixA.png",
              enemigo.id
            );
          }

          pokemonEnemigo.x = enemigo.x;
          pokemonEnemigo.y = enemigo.y;

          return pokemonEnemigo;
        });
      });
    }
  });
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}
function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}
function sePresionoUnaTecla(event) {
  switch (event.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener("keydown", sePresionoUnaTecla);

  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota() {
  for (let i = 0; i < pokemones.length; i++) {
    if (mascotaJugador == pokemones[i].nombre) {
      return pokemones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;

  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  clearInterval(intervalo);

  enemigoId = enemigo.id;
  selecAtaque.style.display = "flex";
  sectionVerMapa.style.display = "none";
  seleccionarMascotaEnemigo(enemigo);
  //console.log(enemigo)
}

window.addEventListener("load", iniciarJuego);
