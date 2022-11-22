//Crear una función join que reciba un arreglo y retorne un string con todos los elementos separados por espacio SIN USAR el método join de los arreglos.

function joinMethod( arrayStr ){
    let finalStr = '';
    if ( arrayStr.length >= 1){
        for( let i=0; i<arrayStr.length; i++){
            finalStr = finalStr + ' ' + arrayStr[i];
        }
    }
    else {
        finalStr = '';
    }
    return finalStr;
}

console.log(joinMethod(['Hola', 'mundo']));
console.log(joinMethod(['Make', 'it', 'real']));
console.log(joinMethod([]));