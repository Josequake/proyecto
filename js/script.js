let nombrecompleto = document.getElementById("NOM");
let telefono = document.getElementById("TE");
let correo = document.getElementById("CO");
let lugarderesidencia = document.getElementById("LR");
let experiencialaboral1 = document.getElementById("EL1");
let experiencialaboral2 = document.getElementById("EL2");
let experiencialaboral3 = document.getElementById("EL3");
let habilidadpersonal1 = document.getElementById("HP1");
let habilidadpersonal2 = document.getElementById("HP2");
let habilidadpersonal3 = document.getElementById("HP3");
let educacion1 = document.getElementById("ED1");
let educacion2 = document.getElementById("ED2");
let pasatiempo1 = document.getElementById("PA1");
let pasatiempo2 = document.getElementById("PA2");
let boton = document.getElementById("boton");
let text = document.getElementById("texto");
let porcentaje1 = document.getElementById("por1");
let porcentaje2 = document.getElementById("por2");
let porcentaje3 = document.getElementById("por3");
let porcentaje4 = document.getElementById("por4");
let porcentaje5 = document.getElementById("por5");



boton.addEventListener("click", function(){
    
    alert("Datos ingresados con exito")
    localStorage.setItem('NombreCompleto', nombrecompleto.value )
    localStorage.setItem('Telefono', telefono.value )
    localStorage.setItem('Correo', correo.value )
    localStorage.setItem('LugarDeResidencia', lugarderesidencia.value )
    localStorage.setItem('ExperienciaLaboral1', experiencialaboral1.value )
    localStorage.setItem('ExperienciaLaboral2', experiencialaboral2.value )
    localStorage.setItem('ExperienciaLaboral3', experiencialaboral3.value )
    localStorage.setItem('HabilidadPersonal1', habilidadpersonal1.value )
    localStorage.setItem('HabilidadPersonal2', habilidadpersonal2.value )
    localStorage.setItem('HabilidadPersonal3', habilidadpersonal3.value )
    localStorage.setItem('Educacion1', educacion1.value )
    localStorage.setItem('Educacion2', educacion2.value )
    localStorage.setItem('Pasatiempo1', pasatiempo1.value )
    localStorage.setItem('Pasatiempo2', pasatiempo2.value )
    localStorage.setItem('Porcentaje1', porcentaje1.value)
    localStorage.setItem('Porcentaje2', porcentaje2.value)
    localStorage.setItem('Porcentaje3', porcentaje3.value)
    localStorage.setItem('Porcentaje4', porcentaje4.value)
    localStorage.setItem('Porcentaje5', porcentaje5.value)
    
})