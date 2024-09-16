//Простые числа
function showPrimes(n) {

    for (let i = 2; i < n; i++) {
        if (!isPrime(i)) continue;
        console.log(i);
    }
}
function isPrime(m) {
    for (let i = 2; i < m; i++) {
        if (m % i == 0) return false;
    }
    return true;
}
showPrimes(10)