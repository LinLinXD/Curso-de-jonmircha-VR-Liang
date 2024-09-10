



function suma(a,b,...c){

    resultado = a + b;

    c.forEach(function(n){
        resultado+= n
    });

}


const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,0];


const arr3 = [...arr1,...arr2]
console.log(arr3);
