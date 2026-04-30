
function shallow(obj) {
    let copy = {}
    for (let key in obj) {
        copy[key] = obj[key]
    }
    return copy
}

let org = { name: 'babita', skill: { primary: 'js' } }

let copy = shallow(org)

copy.skill.primary = 'rn'

console.log(org.skill.primary)