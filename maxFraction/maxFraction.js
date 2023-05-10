/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function maxFraction (numerators, denominators){
    let max = 0;
    let maxIndex = 0;
    for (let i = 0; i < numerators.length; i++){
        if (numerators[i]/denominators[i] > max){
        max = numerators[i]/denominators[i];
        maxIndex = i;
        }
    }
    return [numerators[maxIndex], denominators[maxIndex]];
}

console.log(maxFraction([5,2,5], [6,3,4]));



