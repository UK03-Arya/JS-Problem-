Array.prototype.myMap = function (callback) {
    const result = new Array(this.length);

    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            result[i] = callback(this[i], i, this);
        }
    }
    return result;
};

const numbers = [1, 2, 3];
const doubled = numbers.myMap((num) => num * 2);



console.log(doubled);