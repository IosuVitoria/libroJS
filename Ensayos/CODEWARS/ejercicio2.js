// Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

var summation = function (num) {
    let total = 0;
    
    for(let i = num; i > 0; i--){
      total += i;
    }
    return total;
}

console.log(summation(8));
console.log(summation(2));