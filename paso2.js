//Crea una función max que reciba un arreglo de números y retorne el número máximo SIN USAR el método Math.max de JavaScript. Si el arreglo está vacío debe retornar undefined

function max(array){
    let maxValue = 0;
    for( let i=0; i<array.length; i++){
        if (maxValue < array[i]){
            maxValue = array[i];
        }
    }
    if (maxValue === 0 ){
        maxValue = undefined;
    }
    return console.log(`${maxValue}`);

}

max([1, 3, 2]);
max([10, 9, 8, 7, 6, 5, 4]);
max([]);