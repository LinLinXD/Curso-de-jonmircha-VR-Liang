


console.log(console);
console.error("Esto es un error")
console.warn("Esto es una advertencia")
console.info("Esto es un mensaje informativo")
console.log("Un registro de lo que ha pasado en nuestra aplicación");

let nombre = 'jon', apellido = 'mircha', edad = 35; 

console.log(nombre,apellido,edad);
console.log(`Hola, mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);

console.clear()

console.log(window);
console.log(document);

console.dir(window)
console.dir(document)

console.clear()

//Grupos en JS

console.group("Cursos de @Jonmircha en youtube")

console.log("Curso de JavaScript");
console.log("Curso de NodeJS");
console.log("Curso de PWA");
console.log("Curso de FlexBox");
console.log("Curso de Diseño y prog web");

console.groupEnd()

console.clear()

//Representar a manera de tabla
console.log(console);
console.table(Object.entries(console).sort())



console.clear()
//REPORTAR TIEMPO 

console.time("Tiempo")

const arreglo = Array(100000)

for(let i = 0; i < arreglo.length; i++){
    arreglo[i] = i;
}

console.timeEnd("Tiempo")

console.clear()

for(let i = 0; i <= 100; i++){
    console.log('codigo for: ', i);
    console.count("cod-for")
}

console.clear()

let x = 4, y = 2, pruebaXY = "se espera que X siempre sea menor que Y"

console.assert(x < y, {x,y}, pruebaXY)