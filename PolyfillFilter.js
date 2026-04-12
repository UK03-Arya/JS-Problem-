Array.prototype.filter = function (callback) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
        // i in this: Sparse arrays (khaali slots) ko skip karne ke liye
        if (i in this) {
            if (callback(this[i], i, this)) {
                // Bina push ke: Current length ko hi index bana do
                result[result.length] = this[i];
            }
        }
    }
    return result;
};

// --- AB ISE TEST KARTE HAIN ---

const numb = [1, 2, 34, 4];

// Example 1: Humne rule banaya ki sirf wahi number do jo 10 se bade hain
const bigNumbers = numb.filter((n) => n > 10);

console.log("Big Numbers (Greater than 10):", bigNumbers);
// Output: [34]


// Example 2: Humne rule banaya ki sirf Even numbers (2 se katne wale) do
const evenNumbers = numb.filter((n) => n % 2 === 0);

console.log("Even Numbers:", evenNumbers);
// Output: [2, 34, 4]