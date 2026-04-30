
function expect(n) {


    const toBe = function (val) {
        if (n == val) return true;
        throw new Error("Not Equal")
    }
    const notToBe = function (val) {
        if (n !== val) return true
        throw new Error("Equal")
    }
    return {
        toBe: toBe,
        notToBe: notToBe
    }
}

try {
    console.log("check", expect(5).toBe(5))
}
catch (err) {
    console.log("err", err)
}