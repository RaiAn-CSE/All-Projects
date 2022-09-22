function isEven(num) {
    const remainder = num % 2;
    // console.log(remainder);
    if (remainder == 0) {
        // console.log("It's Even");
        return true;
    }
    else {
        // console.log("It's Odd");
        return false;
    }
}
const number = isEven(48);
console.log('is it Even', number);