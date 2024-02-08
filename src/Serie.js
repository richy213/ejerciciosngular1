// Serie.jsx
import React from 'react';

class Serie {
    fibonacci(n) {
        if (n <= 0) {
            return 0;
        } else if (n === 1) {
            return 1;
        } else {
            let a = 0, b = 1;
            for (let i = 2; i <= n; i++) {
                let temp = b;
                b = a + b;
                a = temp;
            }
            return b;
        }
    }

    triangular(n) {
        return n * (n + 1) / 2;
    }

    esPrimo(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }

    terminoN(n) {
        const fib = this.fibonacci(n + 1);
        const tri = this.triangular(n);
        const prim = this.getNextPrime(n + 1);
        return fib -(2*tri) + prim;
    }

    getNextPrime(n) {
        while (true) {
            if (this.esPrimo(n)) return n;
            n++;
        }
    }
}

export default Serie;
