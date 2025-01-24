const buscarMotivo = (string, stringMotivo) => {
    const posiciones = [];
    let index = string.indexOf(stringMotivo);
  
    while (index !== -1) {
      posiciones.push(index);
      index = string.indexOf(stringMotivo, index + 1); 
    }
  
    return posiciones;
};
  
const adn = "ATGCGATACGCTTACG";
const motivo = "ACG";
  
console.log(buscarMotivo(adn, motivo)); 
