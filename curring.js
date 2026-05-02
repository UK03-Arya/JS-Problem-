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



function add(a) {
    // Yeh andar wala function 'b' argument lega
    return function (b) {
        if (b !== undefined) {
            // Agar 'b' mila hai, toh add(a + b) ko call karo (Recursion)
            // Taaki hum add(5)(4)... aise aage badh sakein
            return add(a + b);
        }
        // Agar 'b' nahi mila (matlab bracket khali hai), toh final total return kar do
        return a;
    };
}

// --- Use karne ka tarika ---
// Note: Is logic mein aakhri mein ek khali bracket () lagana padta hai result nikalne ke liye
console.log(add(2)(3)(4)()); // Output: 9