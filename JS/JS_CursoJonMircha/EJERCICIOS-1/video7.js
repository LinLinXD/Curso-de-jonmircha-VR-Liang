// 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].



const mi_funcion =  (arr) => {
    
    for(let i = 0; i < arr.length ; i++){
        arr[i] = Math.pow(arr[i],2)
    }

    return arr;
}


console.log(mi_funcion([1,2,3,4,5]));

// 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].


const mi_funcion2 = (arr) => {
    let numMen = Math.min(...arr);
    let numMay = Math.max(...arr);


    return [numMay, numMen]
}

console.log(mi_funcion2([1,2,3,4,5]));

// 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.


const mi_funcion3 = (arr) => {
    let arrPares = [...arr.filter(num => num % 2 == 0)];
    let arrImpares = [...arr.filter(num => num % 2 != 0)];


    return `pares: ${arrPares} impares ${arrImpares}`


}

console.log(mi_funcion3([1,2,3,4,5]));

