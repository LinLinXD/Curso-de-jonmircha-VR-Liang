
//Limitantes a comparación de los maps y sets.
// 1. No poseen propiedad Size
// 2. No se puede iterar sobre ellos
// 3. No podemos usar Clear.
/* 
  4. Tenemos que mandar los datos con el metodo add uno por un
  const ws = new WeakSet([1,2,3,4,3,3,true, false, true, "HOLA", "hola"]); (NO SE PUEDE HACER)
*/

const ws = new WeakSet();

let valor1,valor2,valor3;

valor1 = {"valor1": 1};
valor2 = {"valor2": 2};
valor3 = {"valor3": 3};


ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);

// setInterval(()=>{
//    console.log(ws); 
// },1000)

// setTimeout(()=>{
//  valor1 = null;
//  valor2 = null;
//  valor3 = null;


// },5000)

/*

NO SE PUEDE HACER 

        const wm = new WeakMap(
            ["nombre", "liang"],
            ["edad", "18"],
            ["profesion", "estudiante"],
            ["metas", "Ser desarrollador web"],
            

        );
*/


const wn = new WeakMap();
let llave1 = {};
let llave2 = {};
let llave3 = {};

wn.set(llave1,1);
wn.set(llave2,2);
wn.set(llave3,3);

console.log(wn);
console.log(wn.has(llave1));
console.log(wn.get(llave1))