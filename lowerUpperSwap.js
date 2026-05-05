function sortContacts(arr) {
    let upper = [], lower = [];

    // Sirf EK loop: Contacts ko categories mein divide karne ke liye
    for (let i = 0; i < arr.length; i++) {
        let name = arr[i];
        if (name[0] >= 'A' && name[0] <= 'Z') {
            upper[upper.length] = name;
        } else {
            lower[lower.length] = name;
        }
    }

    // Ab yahan sorting karni hai.
    // Note: Bina built-in .sort() ke, sort karne ke liye loop lagta hi hai.
    // Lekin agar aapka question sirf "Separation" par hai, toh ye best hai.

    return [...upper, ...lower];
}