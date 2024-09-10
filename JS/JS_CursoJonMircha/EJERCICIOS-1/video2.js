
//EJERCICIO 5
function inver(){
    let texto = prompt("Pasa texto, pe");
    let result = "";

    for(let i = -1; i >= -(texto.length); i-=1 ){
        result += texto.at(i)
    }
    return result
}

//console.log(inver());


//EJERCICIO 6

function contarPal(){
    let Newtexto = prompt("Pasa texto, pe");
    let palabraRep = prompt("Pasa palabra que se repite peeeeeee");

    let arr = [...Newtexto.matchAll(palabraRep)]
    console.log(arr);
    return `Se repite una cantidad de: ${arr.length} vez/veces`

}

//console.log(contarPal());


//EJERCICIO 7



function palindromo(){
    let palabra = prompt("Escribe una palabra")
    let cont = palabra.length - 1;
    let answer = true;
    
    for(let i = 0; i < parseInt(palabra.length/2); i++){
        if(palabra[i] !== palabra[cont-i]){
            answer = false;
            break;
        }     
    }

    if(answer == false){
        console.log(`la palabra "${palabra}" no es palindromo`);
    } else{
        console.log(`la palabra "${palabra}" si es palindromo`);
    }



}

//palindromo()


//EJERCICIO 8 

function eliminarPatron(){
    let texto = prompt("Ingrese texto cualquiera");
    let secuencia = prompt("Ingrese la palabra que requiera eliminar");
    return  texto.replaceAll(secuencia, '');
}

console.log(eliminarPatron());


