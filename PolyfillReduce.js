// 1. Array ke prototype mein 'myReduce' function add kiya.
// Isme do inputs hote hain: 'callback' (kaam kya karna hai) aur 'initialValue' (shuruati value).
Array.prototype.myReduce = function (callback, initialValue) {

    // 2. Accumulator (acc) ko set karna:
    // Agar user ne 'initialValue' di hai (!== undefined), toh use hi accumulator banao.
    // Agar nahi di, toh array ke pehle element (this[0]) ko accumulator bana do.
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    // 3. Loop shuru karne ki jagah (Index) tay karna:
    // Agar initialValue di hai, toh hum 0th index se loop shuru karenge.
    // Agar nahi di, toh 0th index toh pehle hi accumulator ban chuka hai, isliye loop 1st index se shuru hoga.
    let startIndex = initialValue !== undefined ? 0 : 1;

    // 4. Poore array par loop chalaya ja raha hai.
    for (let i = startIndex; i < this.length; i++) {

        // 5. Callback ko call karke accumulator ko update karna:
        // 'accumulator' purani jama-punji hai, 'this[i]' naya element hai.
        // In dono par operation karke jo result aayega, wo naya 'accumulator' ban jayega.
        accumulator = callback(accumulator, this[i], i, this);
    }

    // 6. Sab kuch calculate hone ke baad, final result return kar diya.
    return accumulator;
};

// --- Example Use Case ---
const num = [1, 2, 3, 4];

// Sum nikalna: yahan 0 'initialValue' hai aur (acc, curr) => acc + curr 'callback' hai.
const sum = num.myReduce((acc, curr) => acc + curr, 0);

console.log(sum); // Output: 10