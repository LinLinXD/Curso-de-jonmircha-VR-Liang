


(() => {
    console.log("codigo sincrono ");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("tres");
    }

    uno();
    console.log("Fin");

})();



(()=>{
    console.log("Inicio");

    function dos(){
        setTimeout(()=>{
            console.log("Dos");
        },1000)
    }

    function uno(){
        setTimeout(()=>{
            console.log("uno");
        },0)
        dos();
        console.log("tres");
    }

    uno();
    console.log("Fin");

}
)();



