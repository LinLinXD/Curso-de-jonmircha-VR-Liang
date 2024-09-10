


/*

Cortocircuito OR || - Cuando el valor de la izquierda en la expresión siempre pueda validar
a true, es el valor que se cargará por defecto


Cortocircuito AND && - Cuando el valor de la izquierda en al expresión siempre pueda validar 
a false, es el valor que se cargará por defecto

*/




function saludar(nombre){
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

saludar()
saludar("Joto");


console.log("hola" || "valor de la derecha");
console.log(12 || "valor de la derecha");
console.log(0 || "Valor de la derecha");

console.log(0 && true)