function duplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.includes(element) === false) {
            unique.push(element);
        }
    }
    return unique;
}

const value = [12, 4, 65, 76, 23, 12, 65, 76];
const done = duplicate(value);
console.log(done);
