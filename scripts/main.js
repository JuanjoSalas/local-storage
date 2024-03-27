const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputText = document.getElementById("text");
const btn = document.getElementById("btn");
const rst = document.getElementById("clear")
const p = document.querySelector("p") 

/*
function printName() {
    let object = JSON.parse(localStorage.getItem("Usuario"));
    p.innerText = object.name +" "+ object.email+" "+ object.text+" "
    for (const key in object) {
    if (object.hasOwnProperty(key)) {
        p.innerText += `${key} = ${object[key]}`;
    console.log(`${key} = ${object[key]}`);
    }
   }
}

function enviar(e) {
    e.preventDefault()
    let name = inputName.value
    let email = inputEmail.value
    let text = inputText.value
    let usuario = {
        name,
        email,
        text,
    }
    localStorage.setItem("Usuario", JSON.stringify(usuario));
    printName()
    console.log(usuario);
}
printName()
btn.addEventListener('click',enviar)
*/

// Extra
let usuarios = [];
function printName() {
    let object = JSON.parse(localStorage.getItem("usuarios"));
   p.innerText=object;

let listaUsuarios = []; 
function enviar(e) {
    e.preventDefault()
    let name = inputName.value
    let email = inputEmail.value
    let text = inputText.value
    let usuario = {
        name,
        email,
        text,
    }
    listaUsuarios.push(usuario)
    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios));
    printName()
    console.log("Usuarios",listaUsuarios);
}
printName()
btn.addEventListener('click',enviar)

function reset(e) {
    e.preventDefault()
   localStorage.clear();
}
rst.addEventListener('click',reset);