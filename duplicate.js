
function findDup(str) {
    let count = {}
    let res = []
    for (let i = 0; i < str.length; i++) {
        let strs = str[i]
        if (count[strs] === 1) {
            res[res.length] = strs
        }
        count[strs] = (count[strs] || 0) + 1
    }
    return res
}

console.log(findDup("hhheelll"))