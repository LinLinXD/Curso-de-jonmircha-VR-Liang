



/*
Son una secuencia de caracteres que forma un patrón de busqueda, principalmente utilizado para la busqueda de patrones
de cadenas de caracteres
*/

let cadena = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus excepturi ex assumenda dicta! Voluptas, soluta aliquam dolorum, cumque accusantium nemo mollitia at animi, possimus magni facere fugiat maxime reprehenderit doloribus. lorem";

let expReg = new RegExp("Lorem", "ig"); 

let expReg2 = /Lorem/ig; 

console.log(expReg.exec(cadena))
console.log(expReg.test(cadena))

expReg2 = /lorem{1,2}/ig

console.log(expReg2.exec(cadena))
console.log(expReg2.test(cadena))
