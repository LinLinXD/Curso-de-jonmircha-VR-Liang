

/*
Una función es un bloque de codigo, autocontenido
que se puede definir una vez y ejecutar en cualquier momento. 
Opcionalmente, una función puede aceptar parametros y devolver un valor

Las funciones en JS son objetos, un tipo especial de objetos:

Se dice que las funciones son ciudadanos de primera clase porque
pueden asignarse a un valor, y pueden pasarse como argumentos y usarse
como un valor de retorno
*/



//Funciones
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

function unaFuncionQueDevuelveValor(){
 return "la función retorna una cadena de texto";
}

function saludar(nombre = "Anon", edad = undefined){
    console.log(`Hola, te saludo ${nombre}. Tu edad es de ${edad} años`);
}

//Invocación de funcion
estoEsUnaFuncion();
console.log(unaFuncionQueDevuelveValor());
console.log(saludar("Liang Camilo", 18));
console.log(saludar());

funcionAnonima = function () {
    console.log("Esto es una función anonima, o sea, declarada en una variable.");

}











