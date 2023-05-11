/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Javascript Solution
function maxFraction (numerators, denominators){
    let maxFraction = 0;
    for (let i = 1; i < numerators.length; i++){
        if (numerators[maxFraction] * denominators[i] < numerators[i] * denominators[maxFraction]){
            maxFraction = i;
        }
    }
    
    return maxFraction;
}

/* C# Solution */
// int MaxFraction(int[] numerators, int[] denominators)
// {
//     int cs = 0;

//     for (int i= 1; i < numerators.Length; i++){
//         if(numerators[cs] * denominators[i] < numerators[i] * denominators[cs]){
//             cs = i;
//         }
//     }
//     return cs;
// }

// Test Case

console.log(maxFraction([5,2,5], [6,3,4])); //2
console.log(maxFraction([1,2,3,10], [1,3,4,11])); //0
console.log(maxFraction([1,2], [4,3])); // 1
console.log(maxFraction([1,9,2,5], [4,2,3,6])); // 1

