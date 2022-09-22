// Problem:2  isJavaScriptFile:
function isJavaScriptFile(String) {
    // If parameter is a string.
    if (typeof String === "string") {
        /*returns true if a string ends with a specified string 
        and converts a string to lowercase letters.*/
        const check = String.toLowerCase().endsWith('.js');
        return check;
    }
    // If parameter is not a string.
    else {
        // Error message.
        const wrongValue = "Please enter string-->"
        return wrongValue;  /*Return error message.*/
    }
}
// const result = isJavaScriptFile('image.jpg.js');
// console.log(result);