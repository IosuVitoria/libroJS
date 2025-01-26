// 72. Crea una función que sume un número arbitrario de valores usando ...rest.

const sumar = (...numeros) => {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}

console.log(sumar(1, 2, 3, 4));
console.log(sumar(5, 10, 15));