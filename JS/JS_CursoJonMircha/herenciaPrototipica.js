function Animal(nombre,genero) {
    this.genero = genero;
    this.nombre = nombre
}
Animal.prototype.saludar = function () {
    console.log(`Hola! Me llamo ${this.nombre}`); 
}
Animal.prototype.sonar = function () {
    console.log(`Me llamo ${this.nombre} y sueno porque existo y soy un animal`); 
}
function Perro(nombre, genero, tamanio, raza ){
    this.super = Animal;
    this.raza = raza
    this.tamanio = tamanio
    this.super(nombre,genero);
}
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;
Perro.prototype.sonar = function() {
    console.log(`Guau Guau, soy ${this.nombre}, Guau Guau.`);
}

let coco = new Perro('Mesie coco', 'Macho', 'Pequenio','Pincher')

console.log(coco);

coco.saludar();
