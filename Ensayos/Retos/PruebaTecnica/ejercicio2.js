// Ejercicio 2: Crea una función llamada sumarDigitos que reciba un número entero como parámetro y devuelva la suma de todos sus dígitos.
//  Si el número es negativo, ignora el signo.

const sumarDigitos = (numero) => {
    let suma = 0;
    let numeroC = Math.abs(numero).toString();
    let numeros = numeroC.split('');
    for(let i = 0; i < numeros.length; i++){
        suma += parseInt(numeros[i]);
    }
    
    return suma;
}

console.log(sumarDigitos(125478));
console.log(sumarDigitos(-125));