


//Funcion que se va a ejecutar después de que otra se haga.

function cuadradoCallBack(value, callback){
    setTimeout(()=> {
        callback(value,value * value)
    }, 0 | Math.random()*100)
}




cuadradoCallBack(0,(value, result)=> {
    console.log("Inicia callback");
    console.log(`Callback: ${value}, ${result}`);
    cuadradoCallBack(1,(value, result)=> {
        console.log("Inicia callback");
        console.log(`Callback: ${value}, ${result}`);
        
        cuadradoCallBack(2,(value, result)=> {
            console.log("Inicia callback");
            console.log(`Callback: ${value}, ${result}`);
            
            cuadradoCallBack(3,(value, result)=> {
                console.log("Inicia callback");
                console.log(`Callback: ${value}, ${result}`);
                
                cuadradoCallBack(4,(value, result)=> {
                    console.log("Inicia callback");
                    console.log(`Callback: ${value}, ${result}`);
                    
                    cuadradoCallBack(5,(value, result)=> {
                        console.log("Inicia callback");
                        console.log(`Callback: ${value}, ${result}`);
                        
                        
                    })
                })
            })

            
        })
    })
})





