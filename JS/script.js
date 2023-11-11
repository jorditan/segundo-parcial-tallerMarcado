const formulario = document.getElementById('formularioLogin');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const alertaUsuario = document.getElementById('alertaUsuario');
const alertaContraseña = document.getElementById('alertaContraseña');

const usuarioCorrectoAlumno = 'agustina'
const usuarioCorrectoDocente = 'rodrigo'
const contraseñaCorrecta = '123'

formulario.addEventListener('submit', function(e){ 
    e.preventDefault() 
    let usuarioIngresado = usuario.value;
    let contraseñaIngresada = contraseña.value;

    ingresarAlumnoSiEsValido(usuarioIngresado, contraseñaIngresada); 
    ingresarDocenteSiEsValido(usuarioIngresado, contraseñaIngresada);
})

function ingresarAlumnoSiEsValido (usuarioIngresado, contraseñaIngresada) {
    if (usuarioIngresado === usuarioCorrectoAlumno && contraseñaIngresada === contraseñaCorrecta) {
        window.location.href = './alumno.html?usuario=' + usuarioIngresado;
    }
    else {
        validarUsuario(usuarioIngresado, usuarioCorrectoAlumno);
        validarContraseña(contraseñaIngresada, contraseñaCorrecta);
    }
}

function validarUsuario(usuarioIngresado, usuarioCorrectoAlumno) {
    if (usuarioIngresado == '') {
        alertaUsuario.innerHTML = 'Porfavor, ingrese un usuario'
        setTimeout(() => {
            alertaUsuario.innerHTML = ''
        }, 3000);
    }
    else if (usuarioIngresado !== usuarioCorrectoAlumno) {
        alertaUsuario.innerHTML = 'Ese usario es inexistente, porfavor ingrese otro'
        setTimeout(() => {
            alertaUsuario.innerHTML = ''
        }, 3000);
    }
}

function validarContraseña(contraseñaIngresada, contraseñaCorrecta) {
    if (contraseñaIngresada == '') {
        alertaContraseña.innerHTML = 'Porfavor, ingrese una contraseña'
        setTimeout(() => {
            alertaContraseña.innerHTML = ''
        }, 3000);
    }
    else if (contraseñaIngresada != contraseñaCorrecta) {
        alertaContraseña.innerHTML = 'Esa contraseña no es la correcta, porfavor ingrese otra'
        setTimeout(() => {
            alertaContraseña.innerHTML = ''
        }, 3000);
    }
}

function ingresarDocenteSiEsValido(usuarioIngresado, usuarioCorrectoDocente, contraseñaIngresada) {
    if (usuarioIngresado === usuarioCorrectoDocente && contraseñaIngresada === contraseñaCorrecta) {
        window.location.href = './docente.html?usuario=' + usuarioIngresado;
    }
}
