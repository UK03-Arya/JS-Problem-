function getFrequency(str) {
    let frequency = {};

    // String ke har character par loop chalayein
    for (let char of str) {
        // Agar character pehle se object mein hai, to count +1 karein
        // Agar nahi hai, to use 1 se initialize karein
        frequency[char] = (frequency[char] || 0) + 1;
    }

    return frequency;
}

const result = getFrequency("apple");
console.log(result);
// Output: { a: 1, p: 2, l: 1, e: 1 }