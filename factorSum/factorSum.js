function solve(nums) {
    let k = 2;
    let sum = 0;
    while (nums > 1) {
        while (nums % k == 0) {
            sum += k;
            nums /= k;
        }
        k++;
    }
    return sum;
}

function factorSum(n) {
    while (n != solve(n))
    {
        n = solve(n);
    }
    return n;
}

// Test Case
console.log(factorSum(24));
console.log(factorSum(35));
console.log(factorSum(156));
console.log(factorSum(99));