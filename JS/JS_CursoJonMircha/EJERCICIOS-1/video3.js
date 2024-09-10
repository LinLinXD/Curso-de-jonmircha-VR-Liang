/*

9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

*/


function randomNum(){
    let num = (Math.trunc((Math.random() + 5.01) * 100));

    if(num == 501){
        return `ES EL ${num} PAPU`
    }
    else{
    return num
    }
}

//console.log(randomNum());

function capicua(capiNum){
    


}










function factorial(facNum) {
    if (facNum < 0) {
        return "Factorial no definido para números negativos";
    } else if (facNum === 0 || facNum === 1) {
        return 1;
    } else {
        return facNum * factorial(facNum - 1);
    }
}


//console.log(factorial(4)); 


