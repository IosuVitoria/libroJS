// 59. Usa una cadena de if-else if para clasificar a un estudiante según su puntaje (A, B, C, etc.).

const clasificarEstudiante = (nota) => {
    if (nota >= 90 && nota <= 100) {
        return 'A';
    } else if (nota >= 80 && nota < 90) {
        return 'B';
    } else if (nota >= 70 && nota < 80) {
        return 'C';
    } else if (nota >= 60 && nota < 70) {
        return 'D';
    } else if (nota >= 0 && nota < 60) {
        return 'F';
    } else {
        return 'Introduce un puntaje válido (entre 0 y 100).';
    }
};


console.log(clasificarEstudiante(95)); 
console.log(clasificarEstudiante(82)); 
console.log(clasificarEstudiante(74)); 
console.log(clasificarEstudiante(68)); 
console.log(clasificarEstudiante(50)); 
console.log(clasificarEstudiante(110));
console.log(clasificarEstudiante(-5));
