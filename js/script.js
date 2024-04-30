let nombrecompleto = document.getElementById("NOM");
let telefono = document.getElementById("TE");
let correo = document.getElementById("CO");
let lugarderesidencia = document.getElementById("LR");
let habilidadespersonales = document.getElementById("HP");
let experiencialaboral = document.getElementById("EL");
let educacion = document.getElementById("ED");
let pasatiempos = document.getElementById("PA");
let boton = document.getElementById("boton");
let text = document.getElementById("texto");



boton.addEventListener("click", function(){
    
    alert("Datos ingresados con exito")
    localStorage.setItem('NombreCompleto', nombrecompleto.value )
    localStorage.setItem('Telefono', telefono.value )
    localStorage.setItem('Correo', correo.value )
    localStorage.setItem('LugarDeResidencia', lugarderesidencia.value )
    localStorage.setItem('HabilidadesPersonales', habilidadespersonales.value )
    localStorage.setItem('ExperienciaLaboral', experiencialaboral.value )
    localStorage.setItem('Educacion', educacion.value )
    localStorage.setItem('Pasatiempos', pasatiempos.value )
    
})