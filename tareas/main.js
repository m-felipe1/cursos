const d = document;
const fecha = d.querySelector("#fecha"),
  lista = d.querySelector("#lista"),
  input = d.querySelector("#input"),
  botonEnter = d.querySelector("#enter"),
  check = "fa-check-circle",
  uncheck = "fa-circle",
  lineThrough = "line-through";
let id = 0;

let LIST;

const FECHA = new Date();
fecha.innerHTML = FECHA.toDateString("es-MX", {
  weekday: "long",
  month: "short",
  day: "numeric",
});

function agregarTarea(tarea, id, realizado, eliminado) {
  if (eliminado) return;

  const REALIZADO = realizado ? check : uncheck;
  const LINE = realizado ? lineThrough : "";

  const elemento = `
  	<li id="elemento">
    	<i class="far ${REALIZADO}" data="realizado" id="${id}"></i>
    	<p class="text ${LINE}">${tarea}</p>
    	<i class="fas fa-trash de" data="eliminado" id="${id}"></i> 
    </li>
    `;

  lista.insertAdjacentHTML("beforeend", elemento);
}

function tareaRealizada(element) {
  element.classList.toggle(check);
  element.classList.toggle(uncheck);
  element.parentNode.querySelector(".text").classList.toggle(lineThrough);

  LIST[element.id].realizado = LIST[element.id].realizado ? false : true;
}

function tareaEliminada(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].eliminado = true;
  const newList = LIST.filter((li) => li.eliminado !== true).map((el, i) => ({...el, id: i}) );
  localStorage.setItem("TODO", JSON.stringify(newList));
  init()
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });
  }
  localStorage.setItem("TODO", JSON.stringify(LIST));
  input.value = "";
  id++;
});

d.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      LIST.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      });
    }
    localStorage.setItem("TODO", JSON.stringify(LIST));
    input.value = "";
    id++;
  }
});

lista.addEventListener("click", (e) => {
  const element = e.target;
  let elementData;
  if (element.tagName === "I") {
    elementData = element.attributes.data.value;
  }
  if (elementData === "realizado") {
    tareaRealizada(element);
  } else if (elementData === "eliminado") {
    tareaEliminada(element);
  }
  localStorage.setItem("TODO", JSON.stringify(LIST));
});

function init() {
  let data = localStorage.getItem("TODO");
  if (data) {
    LIST = JSON.parse(data);
    id = LIST.length;
  } else {
    LIST = [];
    id = 0;
  }
}
init()
cargarLista(LIST);

function cargarLista(DATA) {
  DATA.forEach((i) => {
    agregarTarea(i.nombre, i.id, i.realizado, i.eliminado);
  });
}
