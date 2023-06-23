let estudiantes = [
    { legajo: 48000, apellido: "Márquez", nombre: "Luis", nota: 6 },
    { legajo: 49000, apellido: "Valenzuela", nombre: "Jazmín", nota: 4 },
    { legajo: 44000, apellido: "Zapata", nombre: "Rosa", nota: 8 }
];

const render = () => {
    const cuerpoTablaEstudiantes = document.getElementById("cuerpoTablaEstudiantes");
    cuerpoTablaEstudiantes.innerHTML = '';
    estudiantes.forEach(e => {
        cuerpoTablaEstudiantes.innerHTML += `
        <td>${e.legajo}</td>
        <td>${e.apellido}</td>
        <td>${e.nombre}</td>
        <td>${e.nota}</td>
        <td><button class="btn btn-danger" onclick="borrar(this)" data-legajo='${e.legajo}' >Eliminar</button></td>
        `
    })
};

function borrar(e) {

    const legajo= e.getAttribute("data-legajo")
    estudiantes= estudiantes.filter(estudiante => estudiante.legajo != legajo);
    render();
};

window.addEventListener("DOMContentLoaded", () => {

    const formEstudiante = document.getElementById("formEstudiante");
    formEstudiante.addEventListener("submit", evt => {
        evt.preventDefault();
        const txtLegajo = document.getElementById("txtLegajo");
        const txtApellido = document.getElementById("txtApellido");
        const txtNombre = document.getElementById("txtNombre");
        const txtNota = document.getElementById("txtNota");

        const est = {
            legajo: txtLegajo.value,
            apellido: txtApellido.value,
            nombre: txtNombre.value,
            nota: txtNota.value
        };

        estudiantes.push(est);
        txtLegajo.value = "";
        txtApellido.value = "";
        txtNombre.value = "";
        txtNota.value = "";

        render();
    });


    render();
})