// Problem 4: publicBusFare:
function publicBusFare(totalPassengers) {
    // If parameter is a number.
    if (typeof totalPassengers === "number") {
        // <=================>Reserve bus<====================>
        const numberOfBuses = totalPassengers / 50; /*Number of buses*/
        const busNumRounded = Math.floor(numberOfBuses); /*Rounded number of buses*/
        const busPassengers = busNumRounded * 50;   /*Total bus passenger*/
        const extraBusPassengers = totalPassengers - busPassengers;
        // <================>Reserve Microbus<=====================>
        const numberOfCars = extraBusPassengers / 11;   /*Number of cars*/
        const CarNumRounded = Math.floor(numberOfCars); /*Rounded number of cars*/
        const carPassengers = CarNumRounded * 11; /*Total car passenger*/
        const publicBusPassengers = extraBusPassengers - carPassengers; /*Public bus passengers*/
        // <===================>Public Bus<===================>
        const publicBusFare = (publicBusPassengers * 250); /*Public bus fare*/
        return publicBusFare; /*Return public bus fare*/
    }
    // If parameter is not a number.
    else {
        // Error message.
        const wrongValue = "Please enter the number of passengers-->"
        return wrongValue;  /*Return error message.*/
    }
}
const result = publicBusFare(335);
console.log(result);