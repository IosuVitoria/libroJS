const traducirADN = (adn) => {
 
    const codigoGenetico = {
      "UUU": "F", "UUC": "F",
      "UUA": "L", "UUG": "L",
      "CUU": "L", "CUC": "L", "CUA": "L", "CUG": "L",
      "AUU": "I", "AUC": "I", "AUA": "I",
      "AUG": "M", 
      "GUU": "V", "GUC": "V", "GUA": "V", "GUG": "V",
      "UCU": "S", "UCC": "S", "UCA": "S", "UCG": "S",
      "CCU": "P", "CCC": "P", "CCA": "P", "CCG": "P",
      "ACU": "T", "ACC": "T", "ACA": "T", "ACG": "T",
      "GCU": "A", "GCC": "A", "GCA": "A", "GCG": "A",
      "UAU": "Y", "UAC": "Y",
      "UAA": "STOP", "UAG": "STOP", "UGA": "STOP",
      "CAU": "H", "CAC": "H",
      "CAA": "Q", "CAG": "Q",
      "AAU": "N", "AAC": "N",
      "AAA": "K", "AAG": "K",
      "GAU": "D", "GAC": "D",
      "GAA": "E", "GAG": "E",
      "UGU": "C", "UGC": "C",
      "UGG": "W",
      "CGU": "R", "CGC": "R", "CGA": "R", "CGG": "R",
      "AGU": "S", "AGC": "S",
      "AGA": "R", "AGG": "R",
      "GGU": "G", "GGC": "G", "GGA": "G", "GGG": "G",
    };
  
    
    if (!/^[ATCG]+$/i.test(adn)) {
      throw new Error("La secuencia de ADN contiene caracteres no válidos");
    }
  
    
    const arn = adn.replace(/T/g, "U");
  
  
    const inicio = arn.indexOf("AUG");
    if (inicio === -1) {
      throw new Error("No se encontró un codón de inicio (AUG) en la secuencia de ARN");
    }
  
   
    let proteina = "";
    for (let i = inicio; i < arn.length; i += 3) {
      const codon = arn.substring(i, i + 3);
      if (codigoGenetico[codon] === "STOP") break; 
      if (codigoGenetico[codon]) proteina += codigoGenetico[codon]; 
    }
  
    return proteina;
};
  

const adn = "ATGGCCATTGTAATGGGCCGCTGAAAGGGTGCCCGATAG";
console.log(traducirADN(adn));

  