var numbers = [12, 34, 56, 76, 34, 98, 56, 98];

var iF = numbers.indexOf(98);
console.log(iF);
numbers[1] = 43;

var length = numbers.length;
console.log(length);

for (var i = 0; i < numbers.length; i++) {
    var num = numbers[i];
    console.log(num);
    if (i == 4) {
        break;
    }
}