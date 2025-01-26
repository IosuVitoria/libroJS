// 79. Crea un closure que calcule el cuadrado de un número.

const crearCalculadorCuadrado = () => {
    return function calcularCuadrado(numero) {
        return numero * numero;
    };
}

const calcularCuadrado = crearCalculadorCuadrado();
console.log(calcularCuadrado(4)); 
console.log(calcularCuadrado(7));
