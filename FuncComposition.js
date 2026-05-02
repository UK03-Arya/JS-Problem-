
function compose(fn) {
    return function (x) {
        let res = x
        for (let i = fn.length - 1; i >= 0; i--) {
            res = fn[i](res)
        }
        return res

    }
}