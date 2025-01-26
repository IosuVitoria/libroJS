// 60. Combina if y operadores lógicos para determinar si un año es bisiesto.

const esBisiesto = (anio) => {
    if(anio % 4 === 0 && typeof anio == 'number' && anio % 100 === 0){
        return 'El año es bisiesto.'
    }else{
        return 'El dato introducido no es un año bisiesto.'
    }
}

console.log(esBisiesto(2000));
console.log(esBisiesto(1985));
console.log(esBisiesto(null));