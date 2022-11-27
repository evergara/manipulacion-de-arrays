const numbers = [1, 30, 41, 29, 10, 13]
const numbers2 = [2, 4, 6, 8, 10];

const team = [
    {
      name: "Nicolas",
      age: 12,
    },
    {
      name: "Andrea",
      age: 8,
    },
    {
      name: "Zulema",
      age: 2,
    },
    {
      name: "Emerson",
      age: 18,
    },
  ];

let responseFor = true
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element >= 40) {
        responseFor = false
        break
    }
}

console.log('Todos los elementos cumplen con la condicion?', responseFor) // false

const responseEvery = numbers.every(item => item < 40)
console.log('Todos los elementos cumplen con la condicion?', responseEvery) // true

console.log('Todos son mayor de edad?', team.every(item => item.age >= 18)) // true

const checkArray = (array) => {
    if(array.length === 0) return false;
    return array.every( item => item % 2 === 0);
}
 
console.log('Todos son pares?',checkArray(numbers));
console.log('Todos son pares?',checkArray(numbers2));
console.log('Todos son pares?',checkArray([]));