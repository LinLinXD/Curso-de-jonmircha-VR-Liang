

//Función anonima autoejecutable 



(function(){
console.log("Mi primer IIFE");

})();

(function(d,w,c){
    console.log("Mi segunda IIFE");
    console.log(d);
    c.log("Este es un console.log")
})(document, window, console);



//VERSIONES DE FUNCIONES ANONIMAS AUTOEJECUTABLES

(function(c){
    c.log("Version clasica")
}(console));

((function(c){
    c.log("Version de Crockford")

})(console));

+function(c){
    c.log("Version unitaria")

}(console);

!function(c){
    c.log("Version Facebook")
}(console);