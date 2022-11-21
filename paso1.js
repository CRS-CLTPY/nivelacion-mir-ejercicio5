//Crea una función sum que reciba un arreglo de números y retorne la suma de todos los elementos:

function sum(array){
    let suma = 0;
    for( let i=0; i<array.length; i++){
        suma += array[i];
    }
    return console.log(`${suma}`)
}
sum([1, 2, 3])
sum([10, 8, 12, 5])
sum([])