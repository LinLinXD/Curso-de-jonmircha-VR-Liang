// 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.



function decBin(num, base){

}


// 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.


function descuento(cant, desc){
    return `El descuento es de: ${cant * desc/100} \nEl precio total es de: ${cant - cant * desc/100}  `
}

function dolarPeso(dolar, peso){
    return `el precio en pesos colombianos es de: ${dolar * peso}`
}

console.log(descuento(58,5));
console.log(dolarPeso(58, 4043.32) );

// 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).


function tiempoPasado(fecha){
    return `Han pasado ${2024 - fecha.getFullYear()} años`
    
}

console.log(tiempoPasado(new Date(2006,2,25)));
