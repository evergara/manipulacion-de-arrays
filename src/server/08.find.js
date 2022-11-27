const numbers = [1, 30, 41, 29, 50, 60];
const products = [
    {
      name: "Pizza",
      price: 12,
      id: '🍕'
    },
    {
      name: "Burger",
      price: 23,
      id: '🍔'
    },
    {
      name: "Hot dog",
      price: 34,
      id: '🌭'
    },
    {
      name: "Hot cakes",
      price: 355,
      id: '🥞'
    },
  ];
  



let responseFor = undefined
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        responseFor = element
        break
    }
}

console.log('Encontrado ', responseFor);

const responseFind = numbers.find(item => item >= 40)
console.log('Encontrado ', responseFind);

console.log('Productoa de 12 pesos ', products.find(item => item.price = 12));