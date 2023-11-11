const botonesCancelar = document.querySelectorAll('.botonCancelar');
const usuarioNav = document.getElementById('nombreUser');
const formularioSeminario = document.getElementById('formularioSeminario');
const alertaCorreo = document.getElementById('alertaCorreo');
const alertaObservaciones = document.getElementById('alertaObservaciones');
const alertaHorario = document.getElementById('alertaHorario');
const alertaSeminario = document.getElementById('alertaSeminario');
const correo = document.getElementById('correo');
const observaciones = document.getElementById('observaciones');
const seleccionHorario = document.getElementById('seleccionHorario');
const seleccionSeminario = document.getElementById('seleccionSeminario');

const correoUsuario = 'agustina.gomez@estudiantes.unahur'

formularioSeminario.addEventListener('submit', (e) => {
    e.preventDefault()

    const correoIngresado = correo.value;
    const observacionesIngresadas = observaciones.value;
    const seminarioSeleccionado = seleccionSeminario.value
    const horarioSeleccionado = seleccionHorario.value

    validarCorreo(correoIngresado)
    validarObservaciones(observacionesIngresadas)
    validarSeleccionHorario(horarioSeleccionado);
    validarSeleccionSeminario(seminarioSeleccionado);

    if (alertaCorreo.innerHTML === '' && alertaObservaciones.innerHTML === '' && alertaHorario.innerHTML === '' && alertaSeminario.innerHTML === '') {
        alert('Formulario enviado correctamente');
    }

    observaciones.value = '';
    correo.value = '';
    seleccionHorario.value = 'Seleccione una opción';
    seleccionSeminario.value = 'Seleccione un seminario';
})

function validarCorreo(correoIngresado) {
    if (correoIngresado != correoUsuario) {
        alertaCorreo.innerHTML = 'El email no existe en la base, porfavor pruebe con otro';
        setTimeout(() => {
            alertaCorreo.innerHTML = "";
        }, 3000);
    }
}

function validarObservaciones(observacionesIngresadas) {
    if (observacionesIngresadas == '') {
        alertaObservaciones.innerHTML = 'Porfavor, ingrese alguna observacion';
        setTimeout(() => {
            alertaObservaciones.innerHTML = '';
        }, 3000);
    }
}

function validarSeleccionHorario (unHorario) {
    if (unHorario == 'Selecciona una opción') {
        alertaHorario.innerHTML = "Porfavor, seleccione un horario";
        setTimeout(() => {
            alertaHorario.innerHTML = '';
        }, 3000);
    }
}

function validarSeleccionSeminario (unSeminario) {
    if (unSeminario == 'Seleccione un seminario') {
        alertaSeminario.innerHTML = 'Porfavor, ingrese un seminario';
        setTimeout(() => {
            alertaSeminario.innerHTML = ""
        }, 3000);
    }
}

botonesCancelar.forEach(boton => {
    boton.addEventListener('click', () => {
        alert('Usted canceló la clase')
    })
})

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const usuario = urlParams.get('usuario');
    usuarioNav.innerText = 'Usuario: ' + usuario ;

    if (usuario) {
        document.getElementById("nombreAlumno").innerText = "Bienvenid@ " + usuario;
    }

});


