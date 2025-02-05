// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

const listaFiltrada = (lista) => {
    let listaFiltrada =[];
    
    for(let i = 0; i < lista.length; i++){
        if(typeof lista[i] === 'number'){
            listaFiltrada.push(lista[i]);
        }
    }

    return listaFiltrada;
}

// const listaFiltrada = (lista) => {
//     return lista.filter((elemento) => typeof elemento === 'number');
// };


console.log(listaFiltrada([1,'a','b',0,15]));

