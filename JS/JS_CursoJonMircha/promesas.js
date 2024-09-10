




function cuadradoPromise(value){
    if(typeof value !== "number") 
        return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);

    
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve({
                value,
                result: value * value
            });


        }, 0 | Math.random()*100)
    }
    )

}

cuadradoPromise(0)
.then((obj)=>{
    console.log("Inicia promise");
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise(1);
})
.then((obj)=> {
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise(2);
})
.then((obj)=> {
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise("sdsdsd");
})
.then((obj)=> {
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise(4);
})
.then((obj)=> {
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise(5);
})
.then((obj)=> {
    console.log(`Valor: ${obj.value}, Cuadrado: ${obj.result}`);
    return cuadradoPromise(5);
})
.catch(err => console.error("Hubo un error: " + err));


