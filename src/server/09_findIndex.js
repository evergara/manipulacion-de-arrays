const numbers = [1, 30, 41, 29, 50, 60];

const respuesta = numbers.findIndex(item => item >= 40)

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
  

console.log(respuesta) // 2
console.log('Producto de 12 pesos, necesito el indice', products.findIndex(item => item.price = 12));