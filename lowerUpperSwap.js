function sortContacts(arr) {
    let n = arr.length;

    // 1. Single Nested Loop for Sorting
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - 1; j++) {
            let a = arr[j], b = arr[j + 1];

            // Logic: Agar pehla letter cases alag hain, toh Uppercase ko pehle rakho
            // Agar same case hain, toh normal alphabetical order
            let shouldSwap = (a[0] > b[0] && !((a[0] <= 'Z') && (b[0] >= 'a'))) ||
                (a[0] >= 'a' && b[0] <= 'Z');

            if (shouldSwap) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Test
console.log(sortContacts(["Alice", "bob", "Eve", "dave", "Bob", "alice", "eve"]));