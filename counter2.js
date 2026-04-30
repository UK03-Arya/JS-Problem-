
var createCounter = function (n) {
    let curr = n;
    return {
        increment: function () {
            curr += 1;
            return curr;
        },
        reset: function () {
            curr = n;
            return curr;
        },
        decrement: function () {
            curr -= 1;
            return curr;
        }
    }
}

const counter = createCounter(5)
console.log(counter.increment())