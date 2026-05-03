function argumentsLength(...args) {
    let count = 0;
    for (let item of args) {
        count++;
    }
    return count;
}