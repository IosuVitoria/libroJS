**Reto 1: Transcripción de ADN a ARN**
*Escribe una función que convierta una cadena de ADN en ARN. Recuerda que:*

- En el ADN, las bases son: A, T, C, G.
- En el ARN, las bases son: A, U, C, G.
- La transcripción consiste en reemplazar todas las T en la cadena de ADN por U.

**Reto 2: Cálculo del GC% (Porcentaje de Bases Guanina y Citosina)**
*Escribe una función que calcule el porcentaje de bases G y C en una cadena de ADN. Esto es importante porque el GC% afecta la estabilidad del ADN.*

**Reto 3: Encuentra un Motivo en una Secuencia de ADN**
*Escribe una función que reciba dos cadenas: una secuencia de ADN y un motivo. El objetivo es devolver las posiciones donde el motivo aparece dentro de la secuencia.*

**Reto 4: Mutaciones Puntuales**
*Escribe una función que reciba dos cadenas de ADN de igual longitud y calcule cuántas mutaciones puntuales tienen (es decir, posiciones donde las bases son diferentes).*

**Reto 5: Generador de Secuencias Aleatorias**
*Crea una función que genere una secuencia de ADN aleatoria de longitud variable.*

**Reto 6: Traducción Completa de ADN a una Proteína**
*Implementa un programa que haga lo siguiente:*

1. Transcriba ADN a ARN.
2. Encuentre el codón de inicio (AUG) en la secuencia de ARN y comience la traducción desde allí.
3. Traduzca el ARN en una secuencia de aminoácidos usando el código genético completo.
4. Detenga la traducción en el primer codón de parada (UAA, UAG, UGA).
5. Maneje errores comunes como:
    - Si no hay codón de inicio, devolver un error.
    - Si la secuencia contiene caracteres no válidos, devolver un error.
