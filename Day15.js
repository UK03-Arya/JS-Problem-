// 1. Check: Kya browser ke paas includes hai?
if (!Array.prototype.myIncludes) {

    // 2. Assignment: Agar nahi hai toh apna function banao
    Array.prototype.myIncludes = function (searchElement) {

        // 3. Logic: Manual loop chalao
        for (let i = 0; i < this.length; i++) {
            if (this[i] === searchElement) {
                return true; // Mil gaya!
            }
        }
        return false; // Nahi mila
    };
}

// Ab aap ise use kar sakte ho
const arr = [1, 2, 3];
console.log(arr.myIncludes(2)); // true