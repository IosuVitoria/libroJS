// 81. Crea una calculadora básica que realice operaciones de suma, resta, multiplicación y división.

const calculadora = (operacion, num1, num2) => {
    switch (operacion) {
        case 'suma':
            return num1 + num2;
        case 'resta':
            return num1 - num2;
        case 'multiplicacion':
            return num1 * num2;
        case 'division':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Error: División por cero no permitida.';
            }
        default:
            return 'Operación no válida';
    }
}


console.log(calculadora('suma', 5, 3)); 
console.log(calculadora('resta', 5, 3)); 
console.log(calculadora('multiplicacion', 5, 3)); 
console.log(calculadora('division', 5, 3)); 
console.log(calculadora('division', 5, 0)); 