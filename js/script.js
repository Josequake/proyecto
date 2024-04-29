let nombre = document.getElementById("NOM");
let primerapellido= document.getElementById("1A");
let segundoapellido = document.getElementById("2A");
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
    
    localStorage.setItem('Nombre', nombre.value )
    localStorage.setItem('PrimerApellido', primerapellido.value )
    localStorage.setItem('SegundoApellido', segundoapellido.value )
    localStorage.setItem('Telefono', telefono.value )
    localStorage.setItem('Correo', correo.value )
    localStorage.setItem('LugarDeResidencia', lugarderesidencia.value )
    localStorage.setItem('HabilidadesPersonales', habilidadespersonales.value )
    localStorage.setItem('ExperienciaLaboral', experiencialaboral.value )
    localStorage.setItem('Educacion', educacion.value )
    localStorage.setItem('Pasatiempos', pasatiempos.value )


   /*nombre.innerHTML=nombre
    primerapellido.innerHTML=primerapellido
    segundoapellido.innerHTML=texto.innerHTML
    habilidadespersonales.innerHTML=texto.innerHTML
    experiencialaboral.innerHTML=texto.innerHTML
    educacion.innerHTML=texto.innerHTML
    pasatiempos.innerHTML=texto.innerHTML*/
    
    
})