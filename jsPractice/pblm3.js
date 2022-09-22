// Problem 3: oilPrice:
function oilPrice(diesel, petrol, octane) {
    // If the parameters are numbers and positive values.
    if (typeof diesel === "number" &&
        typeof petrol === "number" &&
        typeof octane === "number" &&
        diesel >= 0 &&
        petrol >= 0 &&
        octane >= 0) {
        const dieselCal = diesel * 114; /*Diesel cost*/
        const petrolCal = petrol * 130; /*Petrol cost*/
        const octaneCal = octane * 135; /*Octane cost*/
        const totalCost = dieselCal + petrolCal + octaneCal; /*Total cost*/
        return totalCost; /*Return total cost*/
    }
    // If parameters are not a number.
    else {
        // Error message.
        const wrongValue = "Please enter three positive number-->"
        return wrongValue;  /*Return error message.*/
    }
}
// const result = oilPrice(0, 2, 3);
// console.log(result);