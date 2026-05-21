//deep copy of an object
function deepCopy(obj) {
    if (obj === null || typeof obj !== 'object')
        return obj;
    let copy = (obj.constructor === Array) ? [] : {}
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key])
        }
    }
    return copy
}