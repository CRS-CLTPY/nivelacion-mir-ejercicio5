//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(array){
    let suma = 0;
    for( let i=0; i<array.length; i++){
        suma += array[i];
    }
    return suma;
}
console.log(sum([1, 2, 3]));
console.log(sum([10, 8, 12, 5]));
console.log(sum([]));