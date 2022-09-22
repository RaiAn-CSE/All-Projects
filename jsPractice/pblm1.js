// Problem:1  radianToDegree:
function radianToDegree(radian) {
    // If parameter is a number.
    if (typeof radian === "number") {
        // Convert from radian to degree.
        const result = (180 * radian) / Math.PI;
        // Convert into string and rounded two decimal digits.
        const resultRounded = result.toFixed(2);
        // Convert string to float.
        return parseFloat(resultRounded);
    }
    // If parameter is not a number.
    else {
        // Error message.
        const wrongValue = "Please enter a number-->"
        return wrongValue;  /*Return error message.*/
    }
}
// const degree = radianToDegree(199);
// console.log(degree);