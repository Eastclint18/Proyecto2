// let saludo = document.getElementById("saludo"');

// let seccion = prompt('Ingrese la seccion a visitar'); 


// if(seccion === "carrito"){
//     saludo.innerHTML = "Hola bienvenido al Carrito";
// } else if (seccion === "Home"){
//     saludo.innerHTML = "Hola bienvenido a el Homepage";
// } else {
//     saludo.innerHTML = "Ingrese una seccion correcta a visitar";
    
// }

let parrafo = document.createElement("p");

parrafo.innerHTML = "<h1>Hola a Todos </h1>";

document.body.append(parrafo);