function isEven(num) {
    const remainder = num % 4;
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
const number = isEven(1952);
console.log('is it LeapYear:', number);