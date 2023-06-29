const products =
    [
        { id: 101, name: 'mobile', price: 14000 },
        { id: 102, name: 'laptop', price: 24480 },
        { id: 103, name: 'speaker', price: 2850 },
        { id: 104, name: 'earphone', price: 300 }
    ]

const productFilter = products.filter(product => product.price < 12000);
// console.log(productFilter);

const productFind = products.find(product => product.price > 12000)
console.log([productFind]);