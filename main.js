const nuevaTareaInput = document.getElementById("nuevaTarea");
const agregarTareaButton = document.getElementById("agregarTarea");
const listaTareas = document.getElementById("listaTareas");

function agregarTarea() {
    const tareaTexto = nuevaTareaInput.value.trim();
    if (tareaTexto === "") return; 

    const tarea = {
        texto: tareaTexto,
        completada: false
    };

    let tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    tareas.push(tarea);
    localStorage.setItem("tareas", JSON.stringify(tareas));

    const tareaElement = document.createElement("li");
    tareaElement.textContent = tarea.texto;

    if (tarea.completada) {
        tareaElement.classList.add("completed");
    }

    tareaElement.addEventListener("click", function () {
        tarea.completada = !tarea.completada;
        if (tarea.completada) {
            tareaElement.classList.add("completed");
        } else {
            tareaElement.classList.remove("completed");
        }
        localStorage.setItem("tareas", JSON.stringify(tareas));
    });

    listaTareas.appendChild(tareaElement);

    nuevaTareaInput.value = "";
}

agregarTareaButton.addEventListener("click", agregarTarea);

const tareasAlmacenadas = JSON.parse(localStorage.getItem("tareas")) || [];
tareasAlmacenadas.forEach(function (tarea) {
    const tareaElement = document.createElement("li");
    tareaElement.textContent = tarea.texto;

    if (tarea.completada) {
        tareaElement.classList.add("completed");
    }

    tareaElement.addEventListener("click", function () {
        tarea.completada = !tarea.completada;
        if (tarea.completada) {
            tareaElement.classList.add("completed");
        } else {
            tareaElement.classList.remove("completed");
        }
        localStorage.setItem("tareas", JSON.stringify(tareasAlmacenadas));
    });
    listaTareas.appendChild(remove);
});