function sum(a) {
    return function (b) {
        if (b) {
            return sum(a + b); // Agar agla argument hai, toh fir se function return karo
        }
        return a; // Agar argument nahi hai (empty call), toh total return karo
    };
}

// Is case mein humein end mein ek khali function call deni hogi
console.log(sum(2)(3)(4)()); // Output: 9