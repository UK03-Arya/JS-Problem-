const nestedArray = [1, [2, [3, [4]], 5]];

function flattenArray(arr) {
    let result = [];

    arr.forEach((element) => {
        if (Array.isArray(element)) {
            // Agar element khud ek array hai, to use phir se flatten karo
            result = result.concat(flattenArray(element));
        } else {
            // Agar element simple value hai, to result mein push kar do
            result.push(element);
        }
    });

    return result;
}

console.log(flattenArray(nestedArray));
// Output: [1, 2, 3, 4, 5]