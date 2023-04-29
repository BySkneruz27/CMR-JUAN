const form = document.getElementById('registro');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const usuario = document.getElementById('usuario').value;
    const contrasena = document.getElementById('contrasena').value;
    
    
    console.log(`Usuario: ${usuario}, Contraseña: ${contrasena}`);
});
