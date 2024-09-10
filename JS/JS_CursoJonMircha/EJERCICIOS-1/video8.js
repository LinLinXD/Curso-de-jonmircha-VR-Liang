//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.


const funcion_1 = (arr) => { 
    let obj1 = {
        asc: [...arr].sort((a,b) => a - b),
        desc: [...arr].sort((a,b) => b - a),
    }

    return obj1;

}

console.log(funcion_1([1,2,3,4,5,6]));

// 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].

let funcion_2 = (arr) => {

    return arr.filter((value,index,self) => self.indexOf(value) === index);

}

console.log(funcion_2([1,2,3,1,1,1,"x","x","x"]));


// 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.

const funcion_3 = (arr) => {
    let suma = arr.reduce((sum, valor) => sum + valor)

    return suma/arr.length

}


console.log(funcion_3([1,2,3,4,55]));