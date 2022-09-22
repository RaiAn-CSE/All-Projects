var numbers = [12, 34, 56, 76, 34, 98, 56, 98];

numbers.unshift(14);
numbers.splice(3, 0, 100);
numbers.shift();
console.log(numbers);