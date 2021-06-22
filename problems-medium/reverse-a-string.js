const solve = (inputString) => {
    let arr = [];
    for (const i of inputString) {
        arr.unshift(i)
    }

    return "".concat(...arr);
}

solve("Hello World");