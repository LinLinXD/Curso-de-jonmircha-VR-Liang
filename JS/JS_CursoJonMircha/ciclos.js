


let contador = 0;

console.log(`Empieza ciclo do while`);

do{

    console.log(contador);
    contador++
}while(contador <= 100);


console.log(`Empieza ciclo for`);

for (let i = 0; i <= 100; i++) {
    console.log(i);
    
}


const numeros = [10,20,30,40,50,60,70]

const persona = {
    nombre:"Liang Camilo",
    apellido:"Alvarez Tierradentro",
    edad:18,
    hobby:"Programar",
}

console.log(``);
console.log(`Empieza ciclo for in`);


for(const propiedad in persona){
    console.log(persona[propiedad]);
}

console.log(``);
console.log(`Empieza ciclo for of`);

let texto = "hola mundo"

for(const key of texto){
    console.log(key);
}