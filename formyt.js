const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const pais = document.getElementById("pais");
const pass = document.getElementById("password");
const pass2 = document.getElementById("password2");
const form = document.getElementById("form1");
const parrafo = document.getElementById("parrafo");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo.innerHTML = "";

    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if(pass.value.length < 8){
        warnings += `La contraseña debe tener un mínimo de 8 caracteres <br>`;
        entrar = true;
    }
    if(pass.value !== pass2.value){
        warnings += `Las contraseñas no coinciden <br>`;
        entrar = true;
    }
    if ((nombre.value == "") || (apellido.value == "") || (pais.value == "")){
        warnings += `Todos los campos son obligatorios`;
        entrar = true;
    }
    if(entrar){
        parrafo.innerHTML = warnings;
    }else{
        parrafo.innerHTML = "Enviado";
        nuevoUsuario();
    }
})  


let usuarios = new Array();

var nuevoUsuario = function (){
    var newUsuario = {
        nombre : nombre.value,
        apellido : apellido.value,
        email : email.value,
        pais : pais.value,
        pass : pass.value,
    }
    console.log(usuarios);
    console.log(newUsuario);
    
    const emailDuplicado = usuarios.find(Element => Element.email == email.value);
    console.log(emailDuplicado);
    if (emailDuplicado !== undefined){
        alert("El correo electrónico ya está en uso")
    }else{
        usuarios.push(newUsuario);
        
        console.log(usuarios);
    }
}


const email2 = document.getElementById("email2");
const pass3 = document.getElementById("password3");
const form2 = document.getElementById("form2");
const parrafo2 = document.getElementById("parrafo2");

form2.addEventListener("submit", i=>{
    i.preventDefault();
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    parrafo2.innerHTML = "";

    if (email2.value == ""){
        warnings += `Ingrese un correo electrónico <br>`;
        entrar = true;
    }else if(!regexEmail.test(email2.value)){
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (pass3.value == ""){
        warnings += `Ingrese su contraseña <br>`;
        entrar = true;
    }
    if(entrar){
        parrafo2.innerHTML = warnings;
    }else{
        parrafo2.innerHTML = "Enviado";
        verificarDatos();
    }
})

var verificarDatos = function(){
    const verificarEmail = usuarios.find(Element => Element.email == email2.value);
    console.log(verificarEmail);
    if (verificarEmail !== undefined){
        const verificarContraseña = verificarEmail.pass == pass3.value;
        console.log(verificarContraseña);
        console.log(verificarEmail.pass);
        console.log(pass3.value);
        if (verificarContraseña){
            alert(`Bienvenido ${verificarEmail.nombre} ${verificarEmail.apellido}`);
        }
    }
}