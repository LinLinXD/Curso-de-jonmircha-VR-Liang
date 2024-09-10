



const obj_json = {
    cadena: "Jon",
    numero: 35,
    booleano: true,
    arreglo: ["correr", "programar", "cocinar"],
    objeto: {
        twitter:"@jonmircha",
        email: "jonmircha@gmail.com"
    },
    nulo: null
}




console.log(obj_json);


console.log(JSON);
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("false"));


console.log(JSON.stringify({}));
console.log(JSON.stringify(obj_json));
console.log(JSON.parse('{"cadena": "Jon","numero": "35","booleano": "true","arreglo": ["correr", "programar", "cocinar"],"objeto": {"twitter":"@jonmircha","emai": "jonmircha@gmail.com"},"nulo": null}'));









