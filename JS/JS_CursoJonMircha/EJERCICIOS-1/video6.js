// 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.




function vocCons(texto){
    const regVoc = /[aeiou]/gi;
    const regCons = /[bcdfghjklmnpqrstvwxyz]/gi;

    const cantVoc = [...texto.matchAll(regVoc)];
    const cantCons = [...texto.matchAll(regCons)];

    return `vocales: ${cantVoc.length} - Consonantes: ${cantCons.length} `

}



// 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.

function nombreVerdadero(nombre){ 
    const regNombre = new RegExp(`^[A-Za-z]{1,10} [A-Za-z]{1,10}`)

    return regNombre.test(nombre); 

}


console.log(nombreVerdadero("Liang Camilo"));
 
// 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.

function emailVeridico(email){
    const regEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

    return regEmail.test(email);
}

console.log(emailVeridico("liangCamilo2006@gmail.com"));
