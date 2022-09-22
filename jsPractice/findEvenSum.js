function sum(number) {
    let sum = 0;
    for (i = 0; i < number.length; i++) {
        const index = i;
        sum = sum + number[i];
    }
    return sum;
}

function evenFind(number) {
    var findEvenNum = [];
    for (i = 0; i < number.length; i++) {
        var element = number[i];
        if (element % 2 == 0) {
            findEvenNum.push(element);
        }
    }
    return findEvenNum;
}

const numbers = [12, 54, 23, 65, 23, 87, 23]
var even = evenFind(numbers);
console.log(even);
var find = sum(even);
console.log(find);