
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

// ALGo
// phle ek function bnynge
// ek count k lie object lnge
// ek res k lie array lenge jaha res store hoga
// frr ek for loop chlega
// str argument k index ko ek varible m stro krgneg 
// ek if condition aayga isme count m varible ko array m 1 k equal m check krnge
// res k andr res length m usko create variable se equal rkhnge
// count array varible ko equal m const array variable or 0 plus 1 rkhnge
// return kr dnge res ko