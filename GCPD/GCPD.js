let arr = new Array(1000001).fill(0);
// The snt function appears to be an implementation of the Sieve of Eratosthenes algorithm,
// which is a method for finding all prime numbers up to a given limit.
function snt(n) {
    for (let i = 2; i <= n; i++) {
        arr[i] = 1;
    }
    arr[0] = arr[1] = 0;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (arr[i]) {
            for (let j = 2 * i; j <= n; j += i) {
                arr[j] = 0;
            }
        }
    }
}
function greatestCommonPrimeDivisor(a, b) {
    function min(a, b) {
        return a < b ? a : b;
    }
    snt(min(a, b));
    for (let i = min(a, b); i >= 2; i--) {
        if (arr[i] && a % i == 0 && b % i == 0) {
            return i;
        }
    }
    return -1;
}

// Test Case
console.log(greatestCommonPrimeDivisor(12, 18));
console.log(greatestCommonPrimeDivisor(12, 13));
console.log(greatestCommonPrimeDivisor(100, 140));
console.log(greatestCommonPrimeDivisor(24, 48));
console.log(greatestCommonPrimeDivisor(2, 3));
