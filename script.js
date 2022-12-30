const peliculas = [
    {Nombre:"The shinning", Genero:"horror", Año: '1980'},
    {Nombre:"Infiltrados", Genero:"thriller", Año:'2006'},
    {Nombre:"trainspotting",Genero: "drama", Año:'1996'},
    {Nombre:"isla siniestra", Genero:"thriller", Año:'2010'}
]






let usuario;
let usuarioStorage = localStorage.getItem("usuario");




if(usuarioStorage){
    usuario = usuarioStorage;
    let mensaje = `hola! ${usuario} Que vas a ver hoy?`;
    let saludo = document.getElementById("saludo");
   
    //  saludo.innerHTML = "mensaje";     NO SE PORQUE NO PUDE CAMbiAR  EL iNNER HTML DEL ELEMENT H2 POR ESO LO HICE POR ALERT DESPUES DE HORAS DE INTENTOS>
    alert(mensaje);
}else { 
    usuario = prompt("Hola! Ingresa tu nombre");
    localStorage.setItem("usuario",usuario);
    let mensaje = `hola! ${usuario} Que vas a ver hoy?`;
    alert(mensaje);
    }
    
   


document.addEventListener("keyup", e =>{

    if(e.target.matches("#buscador")){
        document.querySelectorAll(".peli").forEach(peliculas => {
           
            peliculas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?peliculas.classList.remove("filtro")
            :peliculas.classList.add("filtro")
       }) 
    }


})

