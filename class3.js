const numbers = [2, 4, 5, 9, 7, 3];
const output = [];

for (const number of numbers) {
    const doubled = number * 2;
    output.push(doubled);
}

// console.log(output);

const nums = [4, 3, 7, 9, 5, 2, 6, 8, 1];
const double = num => num * 2;

const result = nums.map(double);
console.log(result);
