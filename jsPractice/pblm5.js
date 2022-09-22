// Problem 5: isBestFriend:
function isBestFriend(firstFriend, secondFriend) {
    // If parameters are an object.
    if (typeof firstFriend === "object" &&
        typeof secondFriend === "object") {
        /*First parameter property name is equal to second parameter property friend
        and also First parameter property friend is equal to second parameter property name*/
        if (firstFriend.name === secondFriend.friend &&
            firstFriend.friend === secondFriend.name) {
            return true; /*Return Boolean*/
        }
        else {
            return false; /*Return Boolean*/
        }
    }
    // If parameters are not an object.
    else {
        // Error message.
        const wrongValue = "Please enter an object-->"
        return wrongValue;  /*Return error message.*/
    }
}
const firstFriend = { name: "asfhakaul", friend: "babul" };
const secondFriend = { name: "babul", friend: "abul" };
const result = isBestFriend(firstFriend, secondFriend);
console.log(result);