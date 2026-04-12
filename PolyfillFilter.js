// Pehle hum apna "Filter" wala manual (polyfill) likhenge
if (!Array.prototype.filter) {
    Array.prototype.filter = function (callback) {
        const filteredArray = [];
        for (let i = 0; i < this.length; i++) {
            // Agar callback TRUE bolega, tabhi naye array mein jayega
            if (callback(this[i], i, this)) {
                filteredArray.push(this[i]);
            }
        }
        return filteredArray;
    };
}

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