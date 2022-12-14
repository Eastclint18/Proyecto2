const peliculas = [
    {Nombre:"The shinning", Genero:"horror", Año: '1980'},
    {Nombre:"Infiltrados", Genero:"thriller", Año:'2006'},
    {Nombre:"trainspotting",Genero: "drama", Año:'1996'},
    {Nombre:"isla siniestra", Genero:"thriller", Año:'2010'}
]

let genero = (prompt('ingresa genero'));
let filtrados =  peliculas.find(item => item.Genero == genero);

alert(filtrados.Nombre);

