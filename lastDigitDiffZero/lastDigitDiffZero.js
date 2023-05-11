/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function lastDigitDiffZero(n) {
    let res = 1;

    for (let i = 2; i <= n; i++) {
        res *= i;
        while (res % 10 === 0) {
            res /= 10;
        }
        res %= 100;
    }

    while (res % 10 === 0) {
        res /= 10;
    }

    return res % 10;
}

// Test Case
console.log(lastDigitDiffZero(5));
console.log(lastDigitDiffZero(6));
console.log(lastDigitDiffZero(8));
console.log(lastDigitDiffZero(10));
console.log(lastDigitDiffZero(15));
console.log(lastDigitDiffZero(20));
