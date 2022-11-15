const letters = ['a', 'b', 'C', 'd'];
const products = [
    { title: 'Burger', price: 60},
    { title: 'Pizza', price: 100},
    { title: 'Hot dog', price: 50},
];

const tasks  = [
  { title:'Learn Englis', done: false},
  { title:'Learn Java', done: true},
  { title:'Learn Angular', done: false},
  { title:'Learn Typescript', done: false},
  { title:'Learn Vue', done: true},
];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(`Usando FOR Elemento ${element.toUpperCase} del index ${index}`);
}

letters.forEach(item => console.log(`Usando forEach Elemento ${item}`));

const app = document.getElementById('app');
products.forEach(product => {
    app.innerHTML += `<li>${product.title} - ${product.price}</li>`;
});

const task = document.getElementById('task');
tasks.forEach(item => {
    task.innerHTML += `<li>${item.title} - <input type="checkbox" ${item.done? 'checked':'unchecked'}></li>`;
});