
const dbUrl = 'mongodb+srv://kensei:<maxiPRO123>@kensei.hx9sgyt.mongodb.net/test';


function agregarRegistro() {

  const nombre = document.getElementById('nombre').value;
  const correo = document.getElementById('correo').value;
  const fecha = document.getElementById('fecha').value;
  const estado = document.getElementById('estado').value;
  const medioContacto = document.getElementById('medio-contacto').value;


  const registro = { nombre, correo, fecha, estado, medioContacto };


  fetch(dbUrl, {
    method: 'POST',
    body: JSON.stringify(registro),
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => {

    document.getElementById('mensaje').innerHTML = 'Registro agregado correctamente.';
    document.getElementById('mensaje').classList.remove('text-danger');
    document.getElementById('mensaje').classList.add('text-success');
    
    
    document.getElementById('formulario').reset();
  })
  .catch(error => {
  
    document.getElementById('mensaje').innerHTML = 'Error al agregar el registro.';
    document.getElementById('mensaje').classList.remove('text-success');
    document.getElementById('mensaje').classList.add('text-danger');
  });
}


document.getElementById('formulario').addEventListener('submit', event => {
  event.preventDefault();
  agregarRegistro();
});

Swal.fire({
    icon: 'success',
    title: 'Registro exitoso',
    showConfirmButton: false,
    timer: 1500
  });
  
  Swal.fire({
    icon: 'success',
    title: 'Registro exitoso',
    showConfirmButton: false,
    timer: 1500
  });
  