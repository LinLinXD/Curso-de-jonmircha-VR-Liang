/*
27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
     7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos. YA ESTA
  - Valida que el país o paises sea introducidos en forma de arreglo. YA ESTA
  - Valida que los géneros sean introducidos en forma de arreglo. YA ESTA
  - Valida que los géneros introducidos esten dentro de los géneros 
     aceptados*. YA ESTA
  - Crea un método estático que devuelva los géneros aceptados*.
  - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
    decimal de una posición.
  - Crea un método que devuelva toda la ficha técnica de la película.
  - Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
*/




class Pelicula {
    
    constructor(id, titulo, director, estreno, pais, generos, calificacion) {
        this.id = id;
        this.titulo = titulo;
        this.director = director;
        this.estreno = estreno;
        this.pais = pais;
        this.generos = generos;
        this.calificacion = calificacion;

        this.generosAceptados = [
            "Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", 
            "Documentary", "Drama", "Family", "Fantasy", "Film Noir", "Game-Show", 
            "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", 
            "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"
        ];


        this.validarCadenas(this.titulo, this.director,this.id);

        this.validarCalificacion(this.calificacion);

        this.validarNumeros(this.estreno);

        this.validarFecha(this.estreno);

        this.validarIMDB(this.id);

        this.validarArreglos(this.pais, this.generos);

        this.validarGeneros(this.generos);


    }

    validarCadenas(cadena) {
        if (cadena === undefined) return console.warn("¡Se debe definir un valor!");
        if (typeof cadena !== "string") return console.warn("El valor debe ser una cadena de texto");
        else{
            console.log("La cadena es correcta");
        }
    }

    validarFecha(fecha) {
        if (fecha === undefined) return console.warn("¡Se debe definir un valor!");
        if (typeof fecha !== "number") return console.warn("La fecha debe ser un número");
        if (fecha < 1000 || fecha > 9999) return console.warn("La fecha no puede ser mayor a 4 dígitos o menor a 3")
        else{
            console.log("La fecha es correcta");
        }
    }

    validarNumeros(nums) {
        if (nums === undefined) return console.warn("¡Se debe definir un valor!");
        if (typeof nums !== "number") return console.warn("Debe ingresar un número");
    }

    validarCalificacion(calificacion){
        if (calificacion === undefined) return console.warn("¡Se debe definir un valor!");
        if (typeof calificacion !== "number") return console.warn("Debe ingresar un número");
        if (calificacion < 0 || calificacion > 10) return console.warn("La calificación debe estar entre 0 y 10");
        if (calificacion.toString().length > 3) return console.warn("La calificación no puede tener más de 1 decimal");
    }

    validarIMDB(imdb) {
        this.regex = /^[A-Za-z]{2}[0-9]{7}$/;

        if (this.regex.test(imdb)) return console.log("Es un ID válido");
        else return console.warn("El ID no es válido");
    }

    validarArreglos(arr) {
        if (!(arr instanceof Array)) return console.warn("Debe ingresar un arreglo");
        if (arr.length === 0) return console.warn("El arreglo debe tener al menos 1 dato");
    }

    validarGeneros(generos) {
        generos.forEach(genero => { 
            if (this.generosAceptados.includes(genero)){
                console.log(`El género ${genero} es correcto`);
            }
            else {
                console.warn(`El genero ${genero} no es correcto`);  
            }
            
        });
        }

    devolverGeneros(){
        console.log('Los generos aceptados son:  ');
        for(let i = 0; i < this.generosAceptados.length; i++){
            console.log(`    ${this.generosAceptados[i]}`);
        }


    }

    get fichaTecnica() {

        return `ID: ${this.id}\nTítulo: ${this.titulo}\nDirector: ${this.director}\nAño de estreno: ${this.estreno}\nPais: ${this.pais}\nGéneros: ${this.generos}\nCalificación: ${this.calificacion}`;

    }


}

const peliculas = [
    { id: "tt1234567", titulo: "Inception", director: "Christopher Nolan", estreno: 2010, pais: ["USA"], generos: ["Action", "Sci-Fi"], calificacion: 8.8 },
    { id: "tt7654321", titulo: "The Matrix", director: "Lana Wachowski", estreno: 1999, pais: ["USA"], generos: ["Action", "Sci-Fi"], calificacion: 8.7 },
    { id: "tt2345678", titulo: "Parasite", director: "Bong Joon-ho", estreno: 2019, pais: ["South Korea"], generos: ["Drama", "Thriller"], calificacion: 8.6 }
];


const { id, titulo, director, estreno, pais, generos, calificacion } = peliculas[0];


let pelicula1 = new Pelicula(id, titulo, director, estreno, pais, generos, calificacion);

pelicula1.devolverGeneros();
console.log(pelicula1.fichaTecnica);