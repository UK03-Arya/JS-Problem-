function isPalindrome(str) {
    // 1. String ko reverse karo
    const reversedStr = str.split('').reverse().join('');

    // 2. Original string se compare karo
    return str === reversedStr;
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false