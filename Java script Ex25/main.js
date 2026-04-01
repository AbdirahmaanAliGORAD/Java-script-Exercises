const number = [1,2,3,4,5];
const newNumber =[...number, 6,7,8,9,10];
console.log(newNumber);


function sum (numbers) {
    return numbers.reduce((number, total) => number * total);
}
console.log(sum([5,5]));