let letters = ['a', 'b', 'c', 'd', 'e'];
let numbers = [2, 4, 5, 6, 8]

const newArray = [];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    newArray.push(element + "++");
}

// FOR vs MAP

let arrayMap = letters.map((item) => item + '++');
let arrayMapMayuscula = letters.map((item) => item.toUpperCase());
let numbersNew = numbers.map(number =>{
    return number * 2;
})

console.log('Array original ', letters);
console.log('New Array ', newArray);
console.log('New Array map ', arrayMap);
console.log('New Array map ', arrayMapMayuscula);
console.log('New Array numbers ', numbersNew);


const products = [
    { title: 'Burger', price: 60},
    { title: 'Pizza', price: 100},
    { title: 'Hot dog', price: 50},
];

const app = document.getElementById('map');
let productsView = products.map(product =>{
    return `<li>${product.title} - ${product.price}</li>`
})

app.innerHTML = productsView.join('');
