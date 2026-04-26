
function reverseWord(str) {
    let result = ""
    let word = ""
    for (let i = 0; i <= str.length; i++) {

        if (i < str.length && str[i] !== "") {
            word = str[i] + word
        }
        else {
            result += word + (i < str.length ? "" : "")
            word = ""
        }
    }
    return result
}

console.log(reverseWord("hgdg jehjhrf"))