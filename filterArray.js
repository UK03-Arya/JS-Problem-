
function filter(arr, fn) {
    let newArray = []
    let size = 0
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray[size] = arr[i]
            size++
        }
    }
    return newArray
}

console.log(filter([1, 2, 3, 4, 4], (n) => n > 2))