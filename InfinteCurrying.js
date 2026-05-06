function sum(a) {
    return function (b) {
        // Agar 'b' exist karta hai, toh recursion chalao
        if (b !== undefined) {
            return sum(a + b);
        }
        // Agar argument nahi hai, toh total return karo
        return a;
    };
}

// Usage:
console.log(sum(1)(2)(3)(4)()); // Output: 10
console.log(sum(10)(20)());     // Output: 30 dwhiw