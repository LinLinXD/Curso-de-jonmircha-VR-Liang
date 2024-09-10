


const iterable = new Map([
    ["num1", 1],
    ["num2", 2],
    ["num3", 3],
    ["num4", 4],
    ["num5", 5],
]
)
//Acedemos al iterador del iterable
const iterador = iterable[Symbol.iterator]();

console.log(iterable); 
console.log(iterador);


// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());
// console.log(iterador.next());

let next = iterador.next();


while(!next.done){
    console.log(next.value);
    next = iterador.next();
}