// // setTimeout(()=>{
// //     console.log('actuando');
// // },2000);


// console.log('inicio');

// setTimeout(()=>{
//     console.log('intermedio');
// },2000);

// console.log('final');
// const boton = document.getElementById('boton');
// const mensaje = document.getElementByID('mensaje');

// boton.addEventListener('click',()=> {
//     mensaje.classList.add('color');

//     setTimeout(()=>{
//         mensaje.classlist.remove('color');
//     },2000);
// });

// for(let letra of "hola"){
//     setTimeout(()=>{
//         console.log(letra);

//     },1000);
// }

// for(let letra of "mundo"){
//     setTimeout(()=>{
//         console.log(letra);

//     },3000);
// }


// // setInterval(function, tiempo)'

// setInterval(()=>{
//     console.log('hola');
    
// },1000);

new Promise((rosolve,reject) =>{
})

const futuro = (value) => {
    return new Promise((resolve,reject)=>{
        value ? resolve("promesa resuelta") : reject("Promesa rechazada")
    });


};

console.log(futuro(true));

const productos  = [
{id:1, nombre: "raton" , precio:6000 },
{id:2 , nombre : "Teclado ", precio :7000},
{id:3 , nombre : "Monitor", precio : 20000}
];

const traerProductos = () => { 
    return new Promise (( resolve ,reject) =>{
        setTimeout(() => {
            let div = doctument.createElement("div");
            div.innerHTML = `
            <h2>ID: ${producto.id}</h2>
            <p>Nombre: ${producto.nombre}</p>
            <b>$${producto.precio}</b>`;
            
            document.body.append(div);
            
             
        })
    })
}