const botonAsignaturas = document.getElementById("btn-Asignaturas");
const vistaTareas = document.getElementById("vista-tareas");
const vistaAsignaturas = document.getElementById("vista-asignaturas");

const botonHistorial = document.getElementById("btn-Historial");
const vistaHistorial = document.getElementById("vista-historial");
const listaHistorial = document.getElementById("lista-historial");
const detalleHistorial = document.getElementById("detalle-historial");

const botonFiltro = document.getElementById("btn-filtro");

const botonEliminar = document.getElementById("btn-eliminar-tarea");
const botonEditar = document.getElementById("btn-editar-tarea");
const botonCompletar = document.getElementById("btn-completar-tarea");


const fechaActual = document.getElementById("fecha-actual");
const fecha = new Date();
fechaActual.textContent = fecha.toLocaleDateString("es-CL");


botonAsignaturas.addEventListener("click", function () {
    if (vistaTareas.style.display === "none") {
        vistaTareas.style.display = "grid";
        vistaAsignaturas.style.display = "none";
        vistaHistorial.style.display = "none";
        vistaNuevaTarea.style.display = "none";

        botonAsignaturas.textContent = "Asignaturas";
        botonHistorial.style.display = "inline-block";
        botonFiltro.style.display = "inline-block";
    } else {
        vistaTareas.style.display = "none";
        vistaAsignaturas.style.display = "block";
        vistaHistorial.style.display = "none";
        vistaNuevaTarea.style.display = "none";

        botonAsignaturas.textContent = "Tareas";
        botonHistorial.style.display = "none";
        botonFiltro.style.display = "none";
    }
});

const botonNuevaAsignatura = document.getElementById("btn-nueva-asignatura");
const formularioAsignatura = document.getElementById("form-asignatura");

botonNuevaAsignatura.addEventListener("click", function () {

    formularioAsignatura.style.display = "block";

});

const asignaturas = [
    "Redes",
    "Programación",
    "Base de Datos"
];

const nombreAsignatura = document.getElementById("nombre-asignatura");
const listaAsignaturas = document.getElementById("lista-asignaturas");

asignaturas.forEach(function (asignatura) {

    const nuevaAsignatura = document.createElement("li");

    const nombre = document.createElement("span");
    nombre.textContent = asignatura;

    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";

    nuevaAsignatura.appendChild(nombre);
    nuevaAsignatura.appendChild(botonEliminar);

    listaAsignaturas.appendChild(nuevaAsignatura);

    botonEliminar.addEventListener("click", function () {

        const posicion = asignaturas.indexOf(nombre.textContent);

        asignaturas.splice(posicion, 1);

        nuevaAsignatura.remove();

    });


    formularioAsignatura.addEventListener("submit", function (event) {

        event.preventDefault();

        if (nombreAsignatura.value === "") {
            alert("Debes ingresar un nombre para la asignatura");
            return;
        }

        asignaturas.push(nombreAsignatura.value);

        const nuevaAsignatura = document.createElement("li");

        const nombre = document.createElement("span");
        nombre.textContent = nombreAsignatura.value;

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";

        nuevaAsignatura.appendChild(nombre);
        nuevaAsignatura.appendChild(botonEliminar);

        listaAsignaturas.appendChild(nuevaAsignatura);

        botonEliminar.addEventListener("click", function () {

            const posicion = asignaturas.indexOf(nombreAsignatura.textContent);

            asignaturas.splice(posicion, 1);

            nuevaAsignatura.remove();

        });

        formularioAsignatura.style.display = "none";
        nombreAsignatura.value = "";

    });
});

const botonNuevaTarea = document.getElementById("btn-agregar-tarea");
const formularioTarea = document.getElementById("form-tarea");
const vistaNuevaTarea = document.getElementById("vista-nueva-tarea");
const asignaturaTarea = document.getElementById("asignatura-tarea");

botonNuevaTarea.addEventListener("click", function () {

    asignaturaTarea.innerHTML = "";

    const asignaturas = listaAsignaturas.querySelectorAll("li span");

    asignaturas.forEach(function (asignatura) {

        const opcion = document.createElement("option");

        opcion.textContent = asignatura.textContent;

        asignaturaTarea.appendChild(opcion);

    });

    vistaTareas.style.display = "none";
    vistaNuevaTarea.style.display = "block";

});

const botonCancelarTarea = document.getElementById("btn-cancelar-tarea");
botonCancelarTarea.addEventListener("click", function () {

    vistaNuevaTarea.style.display = "none";
    vistaTareas.style.display = "grid";

});

const tareas = [
    {
        nombre: "Informe de redes",
        descripcion: "Realizar informe sobre topologías de red",
        asignatura: "Redes",
        fecha: "2026-09-10",
        estado: "pendiente"
    }
];
const nombreTarea = document.getElementById("nombre-tarea");
const descripcionTarea = document.getElementById("descripcion-tarea");
const fechaTarea = document.getElementById("fecha-tarea");
const estadoTarea = document.getElementById("estado-tarea")

formularioTarea.addEventListener("submit", function (event) {

    event.preventDefault();

    const nuevaTarea = {
        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        asignatura: asignaturaTarea.value,
        fecha: fechaTarea.value,
        estado: "Pendiente"
    };

    if (tareaSeleccionada === null) {
        tareas.push(nuevaTarea);
    } else {
        tareaSeleccionada.nombre = nuevaTarea.nombre;
        tareaSeleccionada.descripcion = nuevaTarea.descripcion;
        tareaSeleccionada.asignatura = nuevaTarea.asignatura;
        tareaSeleccionada.fecha = nuevaTarea.fecha;
        tareaSeleccionada.estado = nuevaTarea.estado;
    }

    mostrarTareas();

    detalleTarea.innerHTML = `
    <h3>${nuevaTarea.nombre}</h3>
    <p>${nuevaTarea.descripcion}</p>
    <p>Asignatura: ${nuevaTarea.asignatura}</p>
    <p>Fecha de entrega: ${nuevaTarea.fecha}</p>
    <p>Estado: ${nuevaTarea.estado}</p>
`;

    vistaNuevaTarea.style.display = "none";
    vistaTareas.style.display = "grid";

    tareaSeleccionada = null;

});

let tareaSeleccionada = null;

const listaTareas = document.getElementById("lista-tareas");
const detalleTarea = document.getElementById("detalle-tarea");
const accionesTarea = document.getElementById("acciones-tarea");

function mostrarTareas() {

    listaTareas.innerHTML = "";

    tareas.forEach(function (tarea) {
        if (tarea.estado !== "completada"){

        const boton = document.createElement("button");
        boton.textContent = tarea.nombre;

        boton.addEventListener("click", function () {
            detalleTarea.innerHTML = `
        <h3>${tarea.nombre}</h3>
        <p>${tarea.descripcion}</p>
        <p>Asignatura: ${tarea.asignatura}</p>
        <p>Fecha de entrega: ${tarea.fecha}</p>
        <p>Estado: ${tarea.estado}</p>
    `;
            accionesTarea.style.display = "block";
            tareaSeleccionada = tarea;
        });


        listaTareas.appendChild(boton);
        }

    });
}

botonEditar.addEventListener("click", function () {

    asignaturaTarea.innerHTML = "";

    const asignaturas = listaAsignaturas.querySelectorAll("li span");

    asignaturas.forEach(function (asignatura) {

        const opcion = document.createElement("option");

        opcion.textContent = asignatura.textContent;

        asignaturaTarea.appendChild(opcion);

    });

    vistaTareas.style.display = "none";
    vistaNuevaTarea.style.display = "block";

    nombreTarea.value = tareaSeleccionada.nombre;
    descripcionTarea.value = tareaSeleccionada.descripcion;
    asignaturaTarea.value = tareaSeleccionada.asignatura;
    fechaTarea.value = tareaSeleccionada.fecha;
    estadoTarea.value = tareaSeleccionada.estado;

});

botonEliminar.addEventListener("click", function () {

    const posicion = tareas.indexOf(tareaSeleccionada);

    tareas.splice(posicion, 1);

    mostrarTareas();

    detalleTarea.innerHTML = `
        <h3>Selecciona una tarea</h3>
        <p>Selecciona una actividad de la lista para ver su información.</p>
    `;

    accionesTarea.style.display = "none";
});

botonCompletar.addEventListener("click", function () {
    tareaSeleccionada.estado = "completada";

    mostrarTareas();
    mostrarHistorial();

    detalleTarea.innerHTML = `
        <h3>Selecciona una tarea</h3>
        <p>Selecciona una actividad de la lista para ver su información.</p>
    `;

    accionesTarea.style.display = "none";
    tareaSeleccionada = null;
});
mostrarTareas()


botonHistorial.addEventListener("click", function () {
    vistaTareas.style.display = "none";
    vistaAsignaturas.style.display = "none";
    vistaNuevaTarea.style.display = "none";
    vistaHistorial.style.display = "block";

    botonAsignaturas.textContent = "Tareas";

    mostrarHistorial();
});

function mostrarHistorial() {
    listaHistorial.innerHTML = "";

    tareas.forEach(function (tarea) {
        if (tarea.estado === "completada") {
            const boton = document.createElement("button");

            boton.textContent = tarea.nombre;

            boton.addEventListener("click", function () {
                detalleHistorial.innerHTML = `
                    <h3>${tarea.nombre}</h3>
                    <p>${tarea.descripcion}</p>
                    <p>Asignatura: ${tarea.asignatura}</p>
                    <p>Fecha de entrega: ${tarea.fecha}</p>
                    <p>Estado: ${tarea.estado}</p>
                `;
            });

            listaHistorial.appendChild(boton);
        }
    });
}