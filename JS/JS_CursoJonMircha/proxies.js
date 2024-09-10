

const valNomAp = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/


const persona = {
    nombre:"",
    apellido:"",
    edad: 0

}

const manejador = {
    set(obj,prop,valor){
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad ${prop} no existe en el obj persona`)
        }

        if(prop === "nombre" || prop === "apellido"){
            if(!valNomAp.test(valor))
            return console.error(`La propiedad ${prop} de valor ${valor} es invalido`);
        }

        
        obj[prop] = valor;
    }
}



const jon = new Proxy(persona, manejador)
jon.nombre = "Jon tilin";
jon.apellido = "mircha";
jon.edad = 35;
jon.twitter = "@jonmircha"


console.log(jon);
console.log(persona);









