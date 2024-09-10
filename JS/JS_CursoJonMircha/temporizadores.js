

//Se ejecuta solo una vez, se maneja una arroz function

console.log("empieza la vaina");

// setTimeout(() => {
// console.log("hola mundo");
// }, 3000)


//Se ejecutara varias veces

// setInterval(() => {
// console.log("Ejecuta indefinidamente cada intervalo de tiempo");
// }, 1000
// );


let reloj = setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000
)

clearTimeout(reloj)


let intervalo = set