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
    constructor(nombre, genero, tamanio){
        super(nombre,genero)

        this.raza = null;
        this.tamanio = tamanio;

    }
    sonar(){
        console.log('Guauuu Guauuu Gonorrea');
    }

    //Metodo estatico

    static queSoy(){
        console.log("Los perros somos animales mamiferos de cuatro patas pertenecientes a la familia de los caninos somos considerados los mejores amigos del hombre");
    }

    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }


}


let coco = new Perro('Mesie coco', 'Macho', 'Pequeño');

coco.setRaza = 'pincher';
console.log(coco.getRaza);