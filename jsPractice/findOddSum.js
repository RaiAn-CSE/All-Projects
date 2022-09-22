// var numbers = [12, 54, 24, 87, 23, 76, 13];

function getSum(numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        // console.log(i, element, sum);
    }
    return sum;
}

function getOdd(numbers) {
    const oddNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element % 2 !== 0) {
            console.log(i, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 54, 24, 87, 23, 76, 13];
getSum(myNumbers);
const oddNumbers = getOdd(myNumbers);