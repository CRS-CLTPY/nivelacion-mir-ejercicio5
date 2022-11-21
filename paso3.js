//Crea una función maxIndex que reciba una arreglo de números y retorne el índice donde se encuentra el mayor. Si el arreglo está vacío debe retornar -1.

function maxIndex( array ){
    let index = 0
    if (array.length >= 1 ){
        for( let i=0; i<array.length; i++){
            if (index < array[i]){
                index = array.indexOf(i);
            }
        }
    } else {
        index = -1;
    }

    return index
}

console.log(maxIndex([1, 3, 2]));
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]));
console.log(maxIndex([]));