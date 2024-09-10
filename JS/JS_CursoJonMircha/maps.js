

let mapa = new Map();

mapa.set("nombre", "Liang");
mapa.set("apellido", "Alvarez");
mapa.set("edad", "Alvarez");

console.log(mapa);
console.log(mapa.size);
console.log(mapa.has("correo"));
console.log(mapa.has("edad"));
console.log(mapa.get("nombre"));
mapa.set("nombre", "Liang Camilo Alvarez");

mapa.delete("apellido");
mapa.delete("apellido");

mapa.set(19,"diecinueve");
mapa.set(false, "falso");
mapa.set({},{});


console.log(mapa);

for(let [key,value] of mapa){
    console.log(`Llave: ${key}, Valor: ${value}`);
}

const mapa2 = new Map([
    ["nombre","Akira"],
    ["edad", "1"],
    ["animal","gato"]
])

console.log(mapa2);

mapa2.forEach((key, value) => {
    console.log(`${key}: ${value}`);
})

const arrkeys = [...mapa2.keys()];
const arrValues = [...mapa2.values()];
console.log(arrkeys, arrValues);