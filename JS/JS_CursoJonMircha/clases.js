class Animal {
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    saludar(){
        console.log(`Hola, soy ${this.nombre}, un gusto!`);
    }
    sonar(){
        console.log(`Sueno porque soy un animal y existo`);
    }
}


class Perro extends Animal{
    constructor(nombre, genero, raza, tamanio){
        super(nombre,genero)

        this.raza = raza;
        this.tamanio = tamanio

    }
    sonar(){
        console.log('Guauuu Guauuu Gonorrea');
    }
}

let coco = new Perro('Mesie coco', 'Macho', 'Pincher', 'Pequenio')

console.log(coco);

coco.sonar()