const botonAsignaturas = document.getElementById("btn-Asignaturas");
const vistaTareas = document.getElementById("vista-tareas");
const vistaAsignaturas = document.getElementById("vista-asignaturas");

const botonHistorial = document.getElementById("btn-Historial");
const vistaHistorial = document.getElementById("vista-historial");
const listaHistorial = document.getElementById("lista-historial");
const detalleHistorial = document.getElementById("detalle-historial");

const botonFiltro = document.getElementById("btn-filtro");
const panelFiltro = document.getElementById("panel-filtro");
const filtroAsignatura = document.getElementById("filtro-asignatura");
const filtroEstado = document.getElementById("filtro-estado");

const botonEliminar = document.getElementById("btn-eliminar-tarea");
const botonEditar = document.getElementById("btn-editar-tarea");
const botonCompletar = document.getElementById("btn-completar-tarea");


const fechaActual = document.getElementById("fecha-actual");
const fecha = new Date();
fechaActual.textContent = fecha.toLocaleDateString("es-CL");

const textoProgreso = document.getElementById("texto-progreso");
const barraProgreso = document.getElementById("barra-progreso");

let tareaSeleccionada = null;
let editandoTarea = false;

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

        const posicion = asignaturas.indexOf(nombre.textContent);

        asignaturas.splice(posicion, 1);

        nuevaAsignatura.remove();

    });

    formularioAsignatura.style.display = "none";
    nombreAsignatura.value = "";

});

const botonNuevaTarea = document.getElementById("btn-agregar-tarea");
const formularioTarea = document.getElementById("form-tarea");
const vistaNuevaTarea = document.getElementById("vista-nueva-tarea");
const asignaturaTarea = document.getElementById("asignatura-tarea");

botonNuevaTarea.addEventListener("click", function () {
    tareaSeleccionada = null;
    editandoTarea = false;
    formularioTarea.reset();

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
        fecha: "2026-09-04",
        estado: "pendiente"
    },
    {
        nombre: "Configuración Packet Tracer",
        descripcion: "Configurar la red del laboratorio",
        asignatura: "Redes",
        fecha: "2026-09-07",
        estado: "en-progreso"
    },
    {
        nombre: "Prueba de programación",
        descripcion: "Estudiar para la prueba de programación",
        asignatura: "Programación",
        fecha: "2026-09-05",
        estado: "pendiente"
    },
    {
        nombre: "Ejercicio Java",
        descripcion: "Resolver ejercicios de Java",
        asignatura: "Programación",
        fecha: "2026-09-08",
        estado: "en-progreso"
    },
    {
        nombre: "Modelo entidad relación",
        descripcion: "Crear modelo de la base de datos",
        asignatura: "Base de Datos",
        fecha: "2026-09-20",
        estado: "pendiente"
    },
    {
        nombre: "Consulta SQL",
        descripcion: "Realizar consultas SQL para el proyecto",
        asignatura: "Base de Datos",
        fecha: "2026-09-18",
        estado: "en-progreso"
    }
];
const nombreTarea = document.getElementById("nombre-tarea");
const descripcionTarea = document.getElementById("descripcion-tarea");
const fechaTarea = document.getElementById("fecha-tarea");
const estadoTarea = document.getElementById("estado-tarea")

formularioTarea.addEventListener("submit", function (event) {

    event.preventDefault();
    if (nombreTarea.value === "") {
        alert("Debes ingresar un nombre para la tarea");
        return;
    }
    if (descripcionTarea.value === "") {
        alert("Debes ingresar una descripción para la tarea");
        return;
    }
    if (asignaturaTarea.value === "") {
        alert("Debes seleccionar una asignatura");
        return;
    }
    if (fechaTarea.value === "") {
        alert("Debes ingresar una fecha de entrega");
        return;
    }

    const nuevaTarea = {
        nombre: nombreTarea.value,
        descripcion: descripcionTarea.value,
        asignatura: asignaturaTarea.value,
        fecha: fechaTarea.value,
        estado: estadoTarea.value
    };
    console.log("Tarea seleccionada:", tareaSeleccionada);
    if (editandoTarea === false) {
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

    editandoTarea = false;
    actualizarProgreso();

});



const listaTareas = document.getElementById("lista-tareas");
const detalleTarea = document.getElementById("detalle-tarea");
const accionesTarea = document.getElementById("acciones-tarea");

function mostrarTareas() {

    listaTareas.innerHTML = "";
    const asignaturaSeleccionada = filtroAsignatura.value;
    const estadoSeleccionado = filtroEstado.value;

    tareas.forEach(function (tarea) {

        const coincideAsignatura =
            asignaturaSeleccionada === "todas" ||
            tarea.asignatura === asignaturaSeleccionada;

        const coincideEstado =
            estadoSeleccionado === "todos" ||
            tarea.estado === estadoSeleccionado;

        if (coincideAsignatura && coincideEstado && tarea.estado !== "completada") {

            const estadoFecha = revisarFecha(tarea.fecha);
            let claseFecha = "";

            if (estadoFecha === "Vencida") {
                claseFecha = "vencida";
            } else if (estadoFecha === "Se entrega hoy") {
                claseFecha = "hoy";
            } else if (estadoFecha === "Entrega próxima") {
                claseFecha = "proxima";
            } else {
                claseFecha = "normal";
            }

            const boton = document.createElement("button");
            boton.textContent = tarea.nombre;

            boton.addEventListener("click", function () {
                detalleTarea.innerHTML = `
        <h3>${tarea.nombre}</h3>
        <p>${tarea.descripcion}</p>
        <p>Asignatura: ${tarea.asignatura}</p>
        <p>Fecha de entrega: ${tarea.fecha}</p>
        <p>Estado: ${tarea.estado}</p>
        <p class="${claseFecha}">${estadoFecha}</p>
    `;
                accionesTarea.style.display = "block";
                tareaSeleccionada = tarea;
            });


            listaTareas.appendChild(boton);
        }

    });
}

botonEditar.addEventListener("click", function () {

    editandoTarea = true;

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
    actualizarProgreso();
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
    actualizarProgreso();
});

botonHistorial.addEventListener("click", function () {
    vistaTareas.style.display = "none";
    vistaAsignaturas.style.display = "none";
    vistaNuevaTarea.style.display = "none";
    vistaHistorial.style.display = "block";

    botonAsignaturas.textContent = "Tareas";

    mostrarHistorial();
});

botonFiltro.addEventListener("click", function () {
    if (panelFiltro.style.display === "none") {
        panelFiltro.style.display = "block";
    } else {
        panelFiltro.style.display = "none";
    }
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

function cargarFiltroAsignaturas() {

    filtroAsignatura.innerHTML = '<option value="todas">Todas</option>';

    asignaturas.forEach(function (asignatura) {

        const opcion = document.createElement("option");

        opcion.value = asignatura;
        opcion.textContent = asignatura;

        filtroAsignatura.appendChild(opcion);
    });
}

filtroAsignatura.addEventListener("change", mostrarTareas);
filtroEstado.addEventListener("change", mostrarTareas);

function actualizarProgreso() {

    const total = tareas.length;

    const completadas = tareas.filter(function (tarea) {
        return tarea.estado === "completada";
    }).length;

    let porcentaje = 0;

    if (total > 0) {
        porcentaje = (completadas / total) * 100;
    }

    textoProgreso.textContent =
        completadas + " de " + total + " tareas completadas";

    barraProgreso.style.width = porcentaje + "%";
}

function revisarFecha(fechaTarea) {

    const hoy = new Date();
    const fechaEntrega = new Date(fechaTarea);

    const diferencia = fechaEntrega - hoy;
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));

    if (dias < 0) {
        return "Vencida";
    }

    if (dias === 0) {
        return "Se entrega hoy";
    }

    if (dias <= 3) {
        return "Entrega próxima";
    }

    return "Normal";
}

mostrarTareas()
cargarFiltroAsignaturas();
actualizarProgreso();