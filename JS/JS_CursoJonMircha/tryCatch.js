
try{

    console.log("hola");
    noExiste;
}
catch(error){
    console.log("no se pudo producir el 'hola'");
    console.log(error);
}
finally{
    console.log("siempre se ejecuta al final del try-catch");
}

try{
    let numero = "lasjkd"; 
    if(isNaN(numero)){
       throw new Error("¡No es un numero!")
    }
    console.log(numero*numero);
}catch (error){
console.log(`Se produjo el siguiente ${error}`);
}

