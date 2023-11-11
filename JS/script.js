const formulario = document.getElementById('formularioLogin');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');
const alertaUsuario = document.getElementById('alertaUsuario');
const alertaContraseña = document.getElementById('alertaContraseña');

const usuarioCorrecto = 'Agustina'
const contraseñaCorecta = 'SwiftiesPower'

formulario.addEventListener('submit', function(e){ 
    e.preventDefault() 
    let usuarioIngresado = usuario.value;
    let contraseñaIngresada = contraseña.value;

    ingresarAlumnoSiEsValido(usuarioIngresado, contraseñaIngresada); 
})

function ingresarAlumnoSiEsValido (usuarioIngresado, contraseñaIngresada) {
    if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorecta) {
        window.location.href = './alumno.html';
        usuario.value = '';
        contraseña.value = '';
    }
    else {
        validarUsuario(usuarioIngresado, usuarioCorrecto);
        validarContraseña(contraseñaIngresada, contraseñaCorecta);
    }
}

function validarUsuario(usuarioIngresado, usuarioCorrecto) {
    if (usuarioIngresado == '') {
        alertaUsuario.innerHTML = 'Porfavor, ingrese un usuario'
        setTimeout(() => {
            alertaUsuario.innerHTML = ''
        }, 3000);
    }
    else if (usuarioIngresado !== usuarioCorrecto) {
        alertaUsuario.innerHTML = 'Ese usario es inexistente, porfavor ingrese otro'
        setTimeout(() => {
            alertaUsuario.innerHTML = ''
        }, 3000);
    }
}

function validarContraseña(contraseñaIngresada, contraseñaCorecta) {
    if (contraseñaIngresada == '') {
        alertaContraseña.innerHTML = 'Porfavor, ingrese una contraseña'
        setTimeout(() => {
            alertaContraseña.innerHTML = ''
        }, 3000);
    }
    else if (contraseñaIngresada != contraseñaCorecta) {
        alertaContraseña.innerHTML = 'Esa contraseña no es la correcta, porfavor ingrese otra'
        setTimeout(() => {
            alertaContraseña.innerHTML = ''
        }, 3000);
    }
}
