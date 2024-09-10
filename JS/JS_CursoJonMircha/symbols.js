



let id = Symbol("id"); //Digamos que queremos crear propiedades privadas, así que generamos un simbolo.

let id2 = Symbol("id2");

console.log(id === id2);
console.log(typeof id,typeof id2);

const NAME = Symbol();
const SALUDAR = Symbol();

const person = {
    [NAME]: "liang",

}

person.NAME = "jonmircha";


person[SALUDAR] = function () {
    console.log(`Hola ${person[NAME]}`);
}

console.log("");

console.log(person);
console.log(person[NAME]);
console.log(person.NAME);
person[SALUDAR]();

console.log('');


for(propiedad in person){
    console.log(`${propiedad}: ${person[propiedad]}`);
}

console.log(Object.getOwnPropertySymbols(person));