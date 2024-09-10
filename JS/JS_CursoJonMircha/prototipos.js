

//POO 

/* 
Clases- Modelo a seguir (Un esquema para basarnos y generar instancia).
Objetos - Es una instancia de una clase.
    Atributos - Es una caracteristica o propiedad del objeto (Son variables dentro de un objeto).
    Metodos - Son las acciones que un objeto puede realizar.

*/

const animal = {
    nombre: "Akira",
    sonar: () => console.log("Mia miau"),


}

console.log(animal)

//Funcion constructora

function Animales(nombre,genero){
    this.nombre = nombre;
    this.genero = genero;

    
}


Animales.prototype.sonar= function(){ console.log(`Sueno y me llamo ${this.nombre}`);}

const snoopy = new Animales("Snoopy","Macho")

console.log(snoopy.sonar());