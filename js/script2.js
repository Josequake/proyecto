let nombre = document.getElementById("nombre")
let primerapellido = document.getElementById("primerapellido")
let segundoapellido = document.getElementById("segundoapellido")
let telefono = document.getElementById("telefono")
let correo = document.getElementById("correo")
let lugarderesidencia = document.getElementById("lugarderesidencia")
let habilidadespersonales= document.getElementById("habilidadespersonales")
let experiencialaboral = document.getElementById("experiencialaboral")
let educacion = document.getElementById("educacion")
let pasatiempos = document.getElementById("pasatiempos")

function llamar() {

    let nombreL = localStorage.getItem("Nombre")
    nombre.innerHTML= nombreL;

    let primerapellidoL = localStorage.getItem("PrimerApellido")
    primerapellido.innerHTML = primerapellidoL;

    let segundoapellidoL = localStorage.getItem("SegundoApellido")
    segundoapellido.innerHTML = segundoapellidoL;

    let telefonoL = localStorage.getItem("Telefono")
    telefono.innerHTML = telefonoL;

    let correoL = localStorage.getItem("Correo")
    correo.innerHTML = correoL;

    let lugarderesidenciaL = localStorage.getItem("LugarDeResidencia")
    lugarderesidencia.innerHTML = lugarderesidenciaL;

    let habilidadespersonalesL = localStorage.getItem("HabilidadesPersonales")
    habilidadespersonales.innerHTML = habilidadespersonalesL;

    let experiencialaboralL = localStorage.getItem("ExperienciaLaboral")
    experiencialaboral.innerHTML = experiencialaboralL;

    let educacionL = localStorage.getItem("Educacion")
    educacion.innerHTML = educacionL;

    let pasatiemposL = localStorage.getItem("Pasatiempos")
    pasatiempos.innerHTML = pasatiemposL;
}


llamar();
