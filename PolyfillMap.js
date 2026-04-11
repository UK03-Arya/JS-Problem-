
Array.prototype.myMap = function (callback) {
    const result = new Array(this.length)
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback(this[i], i.this)
        }
    }
    return result
}


const numb = [1, 2, 34, 4]

const double = numb.myMap((numb) => numb * 2)

console.log(double)