


//Los sets solo aceptan valores unicos (en el caso de valores primitivos, en objetos es diferente)


const set = new Set([1,2,3,3,4,5,true, false, false, {},{},"hola", "HOLA"]);

console.log(set);
console.log(set.size);

const set2 = new Set()
set2.add(1)
set2.add(2)
set2.add(2)
set2.add(3)
set2.add(3)
set2.add(true)
set2.add(false)
set2.add(true)
set2.add(false)
set2.add({})

console.log(set2);
console.log(set2.size);


console.log(" Recorriendo set 1 ");
for(item of set){
    console.log(item);
}

console.log(" Recorriendo set 2 ");
set2.forEach(item => console.log(item))


console.log(" Accediendo a posiciones en set ");
console.log(Array.from(set));

let arr = Array.from(set);
console.log(arr[0]);

set.delete("HOLA")
console.log(set);

console.log(set.has("hola"));

set2.clear();
console.log(set2);

