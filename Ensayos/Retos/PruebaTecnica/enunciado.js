// Escribe una función en JavaScript que encuentre el número máximo de cada sub-lista en una lista multidimensional. 
// El programa debe tomar una lista de listas como entrada y retornar una lista con los máximos de cada sub-lista. 
// No se permite utilizar la función “Math.max()”. 
// const lista = [[4, 2, 9],[6,1,8],[3, 7, 5]]; 
// [9,8,7] 


const mayoresLista = (lista) => {
    let seleccionArray = [];
    for(let i = 0; i < lista.length; i++){
        let mayor = lista[i][0];
        for(let k = 0; k < lista[i].length; k++){
            if(mayor < lista[i][k]){
                console.log(mayor < lista[i][k]);
                mayor = lista[i][k];
            }    
        }
        seleccionArray.push(mayor);
    }
    return seleccionArray;
}

const lista = [[4, 2, 9],[6,1,8],[3, 7, 5]]
console.log(mayoresLista(lista));