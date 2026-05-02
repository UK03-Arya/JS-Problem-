function myReduce(nums, fn, init) {
    // Ek variable banaya jo result ko track karega
    let result = init;

    // Array ke har element par ek-ek karke jayenge
    for (let i = 0; i < nums.length; i++) {
        // Purane result aur naye element ko milakar naya result banayenge
        result = fn(result, nums[i]);
    }

    // Saara calculation khatam hone ke baad final answer bhej denge
    return result;
}

// --- Use karne ka tarika ---
const numbers = [1, 2, 3, 4];
const sum = (acc, curr) => acc + curr;

console.log(myReduce(numbers, sum, 0)); // Output: 10