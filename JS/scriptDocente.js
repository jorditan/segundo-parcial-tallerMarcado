const usuarioNav = document.getElementById('nombreUser');
const botonesVerMaterial = document.querySelectorAll('.botonMaterial');

botonesVerMaterial.forEach(boton => { 
     boton.addEventListener('click', () => {
          alert('Usted ha accedido al material de la clase');
     })
})

document.addEventListener("DOMContentLoaded", function () {
     const urlParams = new URLSearchParams(window.location.search);
     const usuario = urlParams.get('docente');
     usuarioNav.innerText = 'Docente: ' + usuario;

     if (usuario) {
          document.getElementById("bienvenidaDocente").innerHTML = "Bienvenido Rodrigo Cianciulli";
     }
});