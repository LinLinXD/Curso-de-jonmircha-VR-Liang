
const objeto1 = new Object();
console.log(objeto1);


const objeto2 = {}
console.log(objeto2);

/* Dentro de un objeto a las variables
 se le van a llamar atributos/propiedades 
 y a las funciones se les llama metodos */

const objeto3 = {
    nombre: "Liang Camilo",
    apellido: "Alvarez Tierradentro",
    edad : 18,
    pasatiempos: ["correr","ir al gym", "hacer ejercicio", "jugar videojuegos"],
    soltero: false,
    contacto: {gmail: "liangcamilo2006@gmail.com", tel:3183807486},

    saludar: function(){
        console.log(`¡Te manda saludo tu amigo ${this.nombre + " " + this.apellido}!`)
    }
}

//Recordar que nosotros no accedemos directamente a los valores, accedemos a las referencias

console.log(objeto3["nombre"]);
//Notación más utilizada es la del punto
objeto3.saludar()
console.log(objeto3.pasatiempos[3]);
console.log(Object.keys(objeto3));
console.log(Object.values(objeto3));
console.log(objeto3.hasOwnProperty("contacto"));

