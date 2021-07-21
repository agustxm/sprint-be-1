const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const pais = document.getElementById("pais");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const form = document.getElementById("form");
const parrafo = document.getElementById("parrafo");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña debe tener un mínimo de 8 caracteres <br>`
        entrar = true
    }
    if(pass.value !== pass2.value){
        warnings += `Las contraseñas no coinciden <br>`
        entrar = true
    }
    if ((nombre.value == "") || (apellido.value == "") || (pais.value == "")){
        warnings += `Todos los campos son obligatorios`
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
        nuevoUsuario()
    }
})

let usuarios = new Array();

var nuevoUsuario = function (){
    let newUsuario = {
        nombre : nombre.value,
        apellido :apellido.value,
        email : email.value,
        pais : pais.value,
        pass : pass.value,
    }
    usuarios.push(newUsuario);
    console.log(usuarios);
    console.log(newUsuario); //estas dos expresiones dan los mismo
    console.log(usuarios[0]); // ^^^^^^
    let emailDuplicado = usuarios.includes(newUsuario.email,0);
    console.log(emailDuplicado);
    console.log(newUsuario.email)//estas dos expresiones dan los mismo
    console.log(email.value)// ^^^^^^

}
