let nombrecompleto = document.getElementById("nombrecompleto")
let telefono = document.getElementById("telefono")
let correo = document.getElementById("correo")
let lugarderesidencia = document.getElementById("lugarderesidencia")
let experiencialaboral1 = document.getElementById("experiencialaboral1")
let experiencialaboral2 = document.getElementById("experiencialaboral2")
let experiencialaboral3 = document.getElementById("experiencialaboral3")
let habilidadpersonal1= document.getElementById("habilidadpersonal1")
let habilidadpersonal2= document.getElementById("habilidadpersonal2")
let habilidadpersonal3= document.getElementById("habilidadpersonal3")
let educacion1 = document.getElementById("educacion1")
let educacion2 = document.getElementById("educacion2")
let pasatiempo1 = document.getElementById("pasatiempo1")
let pasatiempo2 = document.getElementById("pasatiempo2")
let porcentaje1 = document.getElementById("porcentaje1")
let porcentaje2 = document.getElementById("porcentaje2")
let porcentaje3 = document.getElementById("porcentaje3")
let porcentaje4 = document.getElementById("porcentaje4")
let porcentaje5 = document.getElementById("porcentaje5")

function llamar() {

    let nombrecompletoL = localStorage.getItem("NombreCompleto")
    nombrecompleto.innerHTML= nombrecompletoL;

    let telefonoL = localStorage.getItem("Telefono")
    telefono.innerHTML = telefonoL;

    let correoL = localStorage.getItem("Correo")
    correo.innerHTML = correoL;

    let lugarderesidenciaL = localStorage.getItem("LugarDeResidencia")
    lugarderesidencia.innerHTML = lugarderesidenciaL;
    
    let experiencialaboral1L = localStorage.getItem("ExperienciaLaboral1")
    experiencialaboral1.innerHTML = experiencialaboral1L;
    
    let experiencialaboral2L = localStorage.getItem("ExperienciaLaboral2")
    experiencialaboral2.innerHTML = experiencialaboral2L;
   
    let experiencialaboral3L = localStorage.getItem("ExperienciaLaboral3")
    experiencialaboral3.innerHTML = experiencialaboral3L;

    let habilidadpersonal1L = localStorage.getItem("HabilidadPersonal1")
    habilidadpersonal1.innerHTML = habilidadpersonal1L;
    
    let habilidadpersonal2L = localStorage.getItem("HabilidadPersonal2")
    habilidadpersonal2.innerHTML = habilidadpersonal2L;
    
    let habilidadpersonal3L = localStorage.getItem("HabilidadPersonal3")
    habilidadpersonal3.innerHTML = habilidadpersonal3L;

    let educacion1L = localStorage.getItem("Educacion1")
    educacion1.innerHTML = educacion1L;

    let educacion2L = localStorage.getItem("Educacion2")
    educacion2.innerHTML = educacion2L;

    let pasatiempo1L = localStorage.getItem("Pasatiempo1")
    pasatiempo1.innerHTML = pasatiempo1L;

    let pasatiempo2L = localStorage.getItem("Pasatiempo2")
    pasatiempo2.innerHTML = pasatiempo2L;

    let porcentaje1L = localStorage.getItem("Porcentaje1")
    porcentaje1.innerHTML = porcentaje1L;
    
    let porcentaje2L = localStorage.getItem("Porcentaje2")
    porcentaje2.innerHTML = porcentaje2L;
   
    let porcentaje3L = localStorage.getItem("Porcentaje3")
    porcentaje3.innerHTML = porcentaje3L;
   
    let porcentaje4L = localStorage.getItem("Porcentaje4")
    porcentaje4.innerHTML = porcentaje4L;
   
    let porcentaje5L = localStorage.getItem("Porcentaje5")
    porcentaje5.innerHTML = porcentaje5L;
}


llamar();
