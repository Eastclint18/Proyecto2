// let parrafo = document.createElement("p");

// parrafo.innerHTML = "<h1>Hola a Todos </h1>";

// document.body.append(parrafo);

// let saludo = document.getElementById("saludo");



let boton = document.getElementById("boton");
boton.addEventListener("click", () => {
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    )
  }); 