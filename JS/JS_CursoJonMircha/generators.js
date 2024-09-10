
//Funcion que nos permite trabajar de manera más amigables con los iteradores


//yield es como un return pero para iteradores.
function* iterable(){
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Más instrucciones de nuestro codigo");
    yield "hola 3";
    yield "hola 4";


}


let iterador = iterable();

// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

console.log("");

for(let y of iterador){
    console.log(y);

}

const arr = [...iterable()]
console.log(arr);

function cuadrado(valor){
    setTimeout(()=>{return console.log({
        valor, 
        resultado: valor * valor
    });
},Math.random() * 1000)


}

function* generador(){
    console.log("inica generator");

    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);                                                                                   
    yield cuadrado(4);

    console.log("termina generator");
}


let gen = generador();

for(let y of gen){
    console.log(y);
}



