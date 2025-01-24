const calcularMutaciones = (adn1, adn2) => {
    if (adn1.length !== adn2.length) {
      throw new Error("Las cadenas de ADN deben tener la misma longitud");
    }
  
    let mutaciones = 0;
  
    for (let i = 0; i < adn1.length; i++) {
      if (adn1[i] !== adn2[i]) {
        mutaciones++;
      }
    }
  
    return mutaciones;
};
  
const adn1 = "GAGCCTACTAACGGGAT";
const adn2 = "CATCGTAATGACGGCCT";
console.log(calcularMutaciones(adn1, adn2));