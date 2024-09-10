

function cuadradoPromise(value){
    if(typeof value !== "number") 
        return Promise.reject(`Error, el valor ${value} ingresado no es un numero`);
    
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve({
                value,
                result: value * value
            });


        }, 0 | Math.random()*100)
    }
    )

}



async function funcionAsyncDeclarada(){
    try {
        console.log("Inicio Async function");
        let obj = await cuadradoPromise(0);
            console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(1);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)        
            
        obj = await cuadradoPromise(2);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)   

        obj = await cuadradoPromise(3);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)   

        obj = await cuadradoPromise(4);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)

        
    } catch (err){
        console.error(err)
    }



}

funcionAsyncDeclarada()

console.log("");


const funcionAsyncAnon = async () => {    
    
    try {
        console.log("Inicio Async function");
        let obj = await cuadradoPromise(5);
            console.log(`Async Function: ${obj.value}, ${obj.result}`);
        
        obj = await cuadradoPromise(6);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)        
            
        obj = await cuadradoPromise(7);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)   

        obj = await cuadradoPromise(8);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)   

        obj = await cuadradoPromise(9);
            console.log(`Async Function: ${obj.value}, ${obj.result}`)

        } catch (err){
            console.error(err)
            }

}


funcionAsyncAnon()




