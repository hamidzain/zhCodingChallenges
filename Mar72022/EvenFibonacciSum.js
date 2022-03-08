
class EvenFibonacciSum {

    upperBound = 4000000;

    // Zain Hamid - Mar 7, 2022
    // Quick mathematical note
    // The naive application of this (generate nth Fibonacci, check even/odd, sum if even) will be inefficient
    // It will run O(n) where n is the nth Fibonacci less than the upper bound (in this case 4 million)
    // Instead, we note that every 3rd Fibonacci is even: even more generally, gcd(F_a, F_b, F_c...) = F_gcd(a, b, c...)
    // Thus, we can instantly cut this to O(n/3) by taking advantage of this and writing a new recurrence relation that only deals with the evens
    // Given by F_n = 4*F_n-3 + F_n-6

    // However, we can actually cut this down to O(1), but at the expense of introducing floating-point errors
    // A smart mathematician out there will realize that the Fibonacci sequence is a constant-recursive sequence, which always has a closed form
    // In particular, the Fibonacci closed-form expression is known as Binet's formula
    // F_n = (phi^n - psi^n) / sqrt(5) (phi is the golden ratio, psi is its conjugate)
    // We can simply calculate the sum, as it is a geometric series
    // To retrieve the index of the element that exceeds the upper bound, we use the reverse formula
    // n = log_phi((F_n*sqrt(5) + sqrt(5*(F_n)^2) - 4) / 2)
    // As our upper bound is not necessarily a Fibonacci number, the last even Fibonacci below this is floor(n/3)
    // This implementation results in floating-point rounding errors however (due to log, phi, and psi)



    // Both implementations are given below
    // Can you tell that I have a math degree? :)


    evenFibonacciSum() {
        f_nm3 = 2;
        f_nm6 = 8;
        sum = 10;
        belowUpperBound = true;
        while(belowUpperBound) {
            f_n = 4*f_nm3 + f_nm6;
            if(f_n > this.upperBound) {
                belowUpperBound = false;
            }
            sum += f_n;
            f_nm6 = f_nm3;
            f_nm3 = f_n;
        }
        return sum;
    }

    evenFibonacciSumBinet() {
        phi = (1 + sqrt(5)) / 2;
        psi = (1 - sqrt(5)) / 2;
        phi3 = Math.pow(phi, 3);
        psi3 = Math.pow(psi, 3);

        lastIndex = Math.floor((Math.log((this.upperBound * Math.sqrt(5) + Math.sqrt(5 * (Math.pow(this.upperBound, 2)) - 4)) / 2)/ Math.log(phi)) / 3);
        return Math.round((1 / Math.sqrt(5)) * (
            phi3 * ((1 - Math.pow(phi3, lastIndex)) / (1 - phi3)) - 
            psi3 * ((1 - Math.pow(psi3, lastIndex)) / (1 - psi3))
        ));
    }

}