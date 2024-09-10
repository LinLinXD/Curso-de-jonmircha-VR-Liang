

let numeros = [1,2,3];

//sin destructuración
let uno = numeros[0], dos = numeros[1], tres = numeros[2];

//con destructuración

const [one, two, three] = numeros;

console.log(one, two, three);

let persona = {
    nombre:"Juan", 
    apellido: "Alvarez",
    edad: 18
}

const {nombre, apellido, edad} = persona

console.log(nombre, apellido, edad);