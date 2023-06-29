const numbers = [1, 3, 5, 7, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    output.push(number + 1)
}
console.log(output);

const result = numbers.map(number => number + 1);
console.log(result);