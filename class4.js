const names = ['arif', 'wasim', 'jasim', 'jasmin', 'salim']
const nameLetter = names.map(name => name[0])
console.log(nameLetter);
const nameLength = names.map(name => name.length)
console.log(nameLength);

const products =
    [
        { id: 101, name: 'mobile', price: 14000 },
        { id: 102, name: 'laptop', price: 24480 },
        { id: 103, name: 'speaker', price: 2850 },
        { id: 104, name: 'earphone', price: 300 }
    ]

const product = products.map(product => product.price)
console.log(product);

names.forEach(name => {
    console.log(name[1]);
});

