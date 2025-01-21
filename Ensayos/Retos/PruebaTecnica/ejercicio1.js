// Ejercicio 1: Escribe una función llamada invertirPalabrasLargas que reciba una cadena de texto como parámetro. 
// La función debe invertir las palabras que tengan más de 5 letras, dejando las demás sin cambios.

const invertirPalabrasLargas = (string) => {
    let palabrasArray = string.split(" ");
    let nuevasPalabras = [];

    for(let i = 0; i < palabrasArray.length; i++){
        if(palabrasArray[i].length < 5){
            nuevasPalabras.push(palabrasArray[i]);
        }else{
            nuevasPalabras.push(palabrasArray[i].split('').reverse().join(''));
        }

    }
    return nuevasPalabras.join(' ');
}

console.log(invertirPalabrasLargas('Esto es una pruebaza'));