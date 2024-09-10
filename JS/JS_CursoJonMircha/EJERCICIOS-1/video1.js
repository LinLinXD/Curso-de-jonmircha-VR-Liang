
//EJERCICIO 1
function contadorCarac(cadena){
    if(typeof cadena ===  'string'){
    return `El numero de caractares de ${cadena} es de: ${cadena.length}`
    } else {
        console.log('Se debe colocar una CADENA DE TEXTO');
    }

}


console.log(contadorCarac("Hola"));

//EJERCICIO 2

function devolverCarac(cadena, numCarac){
    let result = ""
       if(typeof cadena ===  'string'){
            for(let i = 0; i < numCarac; i++ ){
                result += cadena[i]
            }
        return result    
    } else {
        console.log('Se debe colocar una CADENA DE TEXTO');
    }

}

console.log(devolverCarac("Hola mundo",4));

//EJERCICIO 3

function sepComas(cadena){
    return cadena.split(" ")
}

console.log(sepComas("Hola mundo"));

// EJERCICIO 4

function repetir(texto, num){
    for(let i = 1; i <= num; i++ ){
        console.log(texto);
    }
}

console.log(repetir("hola mundo",4));


const sentence = 'The quick brown fox jumps over the lazy dog.';
