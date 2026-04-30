function memoize(fn) {
    // 1. Ek 'cache' object banayein jisme hum results save karenge
    const cache = {};

    // 2. Ek naya function return karein jo arguments lega
    return function (...args) {
        // 3. Arguments ko 'key' ki tarah use karne ke liye string mein badlein
        const key = JSON.stringify(args);

        // 4. Check karein: Kya yeh result pehle se hamare cache mein hai?
        if (key in cache) {
            console.log("Fetching from Cache (Purana result):", key);
            return cache[key];
        }

        // 5. Agar nahi hai, toh asli function (fn) ko call karein
        console.log("Calculating New Result (Naya kaam):", key);
        const result = fn(...args);

        // 6. Result ko cache mein save kar lein agli baar ke liye
        cache[key] = result;

        return result;
    };
}

// --- Test karke dekhte hain ---

// Ek heavy calculation wala function (Example ke liye)
const add = (a, b) => a + b;

// Normal function ko Memoized banayein
const memoizedAdd = memoize(add);

console.log(memoizedAdd(10, 20)); // Pehli baar: Calculation hogi (Naya kaam)
console.log(memoizedAdd(10, 20)); // Dusri baar: Cache se aayega (Fast!)
console.log(memoizedAdd(5, 5));   // Alag arguments: Phir se calculation hogi