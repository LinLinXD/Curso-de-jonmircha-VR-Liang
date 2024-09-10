

const arreglo = [];

arreglo[0] =  3; 
arreglo[1] =  5; 
arreglo[2] = 6;

console.log(arreglo.length);
console.log(arreglo);

const arregloConstructor = Array.of(1,2,3,4,5,"hola","adios","Retrete");
console.log(arregloConstructor);

const arrayLleno = Array(100).fill(false);
console.log(arrayLleno);

const colores = ["Amarillo", "Azul", "Rojo"];
console.log(colores);

colores.push("Verde"); //AÑADIR VALORES CON PUSH 
console.log(colores);
colores.pop() //ELIMINAR VALORES 

console.log(colores);

colores.forEach(function (i, indice){
    console.log((indice + 1) + ": " + i); //ESCRIBE EL VALOR DIRECTAMENTE, NO EL INDICE 
})












