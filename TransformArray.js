function map(arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = fn(arr[i], i)
    }
    return newArray
}

const num = [1, 2, 3, 4]
const plus = ((n) => n + 1)
const final = map(num, plus)
console.log(final)