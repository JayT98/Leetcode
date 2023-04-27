/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function isPrime(nums) {
    if (nums <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nums); i++) {
        if (nums % i === 0) {
            return false;
        }
    }
    return true;
}

// Test Case
console.log(isPrime(47));
console.log(isPrime(4));
console.log(isPrime(133));
console.log(isPrime(120));