//  12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.


function factorial(num_fac){
    if(num_fac == 1){
        return 1
    }
    if(num_fac != 1){
        return num_fac * factorial(num_fac-1)
    }
    if(num_fac == 0){
        return 1
    }
    if(num_fac < 0){
        return "ingrese un valor correcto"
    }
}

function primo(num){
    let rta;
    let numero = factorial(num-1);

    if((numero + 1)%num == 0){
        return `${num} es un numero primo`
    } else{
        return `${num} no es un numero primo`
    }
}

//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

function oddEven(num){
    if(num%2 == 0){
        return "par"
    }
    if(num%2 != 0){
        return "impar"
    }
}

// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

function tempConverter(temp,tempType){
    if(tempType == "C"){
        return `grados Celsius: ${temp} --- grados Fahrenheit: ${(temp * 9/5) + 32}`
    } else{
        return `grados Fahrenheit: ${temp} --- grados Celsius: ${(temp - 32) * 5/9}`
    }
}

console.log(tempConverter(0,"C"));