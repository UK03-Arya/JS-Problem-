
//phle lower and upper ko alag karna hai, phir sort karna hai


function contactsOnly(arr) {
    let upper = [], lower = []
    for (let i = 0; i < arr.length; i++) {
        const name = arr[i]
        if (name[0] >= 'A' && name[0] <= ' Z') {
            upper[upper.length] = name
        }
        else {
            lower[lower.length] = name
        }
    }

    for (let i = 0; i < upper.length; i++) {
        for (let j = 0; j < upper.length - 1 - i; j++) {
            if (upper[j] > upper[j + 1]) {
                let temp = upper[j]
                upper[j] = upper[j + 1]
                upper[j + 1] = temp
            }
        }
    }

    for (let i = 0; i < lower.length; i++) {
        for (let j = 0; j < lower.length - 1 - i; j++) {
            if (lower[j] > lower[j + 1]) {
                let temp = lower[j]
                lower[j] = lower[j + 1]
                lower[j + 1] = temp
            }
        }
    }

    return [...upper, ...lower]
}