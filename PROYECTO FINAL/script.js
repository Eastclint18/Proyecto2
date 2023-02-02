
Favoritos = []
 let verFavCont;
const contenedorFavoritos = document.getElementById('favoritos-contenedor')

const apiRick = async (pagina) => {
    let url = "https://rickandmortyapi.com/api/character/?page="+pagina;
    const api = await fetch(url);
    const data = await api.json();
    console.log(data);
    divRes =document.querySelector("#resultado");
    divRes.innerHTML = '';
    data.results.map(item =>{
        divItem=document.createElement('div');
        divItem.innerHTML=`<article >
                  <div class="contenedor">
                         <img src="${item.image}" alt="personaje">
                         </div>
                        
                         <h2>${item.name}</h2>
                       <button type="button" id="agregar${item.name}" class="agregar"> <i class="fa fa-heart heart"> </i> </button>
                     </article>`
                    
                divRes.appendChild(divItem);

                const buttons = document.getElementById(`agregar${item.name}`);
                buttons.addEventListener 
                    ('click', () => {
                      
                        agregarFavoritos(item.name);
                        console.log(Favoritos)
                        actualizarFavoritos()
                        swal('agregado a favoritos','', 'success')
                        const heart = buttons.querySelector(".heart");
                        heart.classList.add("red");
                        console.log(heart)
                 
                       
            
                    })
       
    })
     
   
    const agregarFavoritos = (perName) =>{
        const item = data.results.find((per) => per.name === perName )
         Favoritos.push(item)
          console.log(item)
          actualizarFavoritos()
          incrementarFavoritos () 
       }
 
}


const actualizarFavoritos = () =>{
    contenedorFavoritos.innerHTML = ''
   

    

    Favoritos.forEach((per) => { 
        let div = document.createElement('div')
        div.className = ('personajeEnCarrito')
        div.innerHTML = `
       
        <img src="${per.image}" alt="personaje" class="rk">
                </div>
                <button onclick="eliminarFavoritos(${per.id})" id="borrar" class="quitar"><p>&#10006;</p></button>
                `;
                contenedorFavoritos.appendChild(div);
                
        
        
    })


}

const eliminarFavoritos = (perId) =>{
    const item = Favoritos.find((per) => per.id=== perId);
    const index = Favoritos.indexOf(item);
    Favoritos.splice(index, 1);
    menosFavoritos();

    actualizarFavoritos();

    const buttons = document.getElementById(`agregar${item.name}`);
    const heart = buttons.querySelector(".heart");
    heart.classList.remove("red");

  


}


var count = 0 ; 

function incrementarFavoritos () {
    count++;
    document.getElementById("ver").innerHTML = "Favoritos "+count;
}


function menosFavoritos () {
    count--;
    if (count > 0){
    document.getElementById("ver").innerHTML = count;
} else {
    document.getElementById("ver").innerHTML = "Favoritos";
}
}

 








verFavoritos = document.getElementById("ver");
verFavCont = document.getElementById('favoritos-contenedor')
verFavoritos.addEventListener("click", () =>{
    if (verFavCont.classList.contains("filtro2")){
        verFavCont.classList.remove('filtro2')
    } else { 
        verFavCont.classList.add('filtro2')
    }
    

  
})

apiRick()

document.addEventListener("keyup", e =>{

    if(e.target.matches("#buscador")){
        document.querySelectorAll("article").forEach(peliculas => {
           
            peliculas.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ?peliculas.classList.remove("filtro")
            :peliculas.classList.add("filtro")
       }) 
    }


})
