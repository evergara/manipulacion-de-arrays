const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
  ]

const matriz2 = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

let array_unitdimensional= [];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
        array_unitdimensional.push(matrix[i][j]); 
    }
}



console.log('For ', array_unitdimensional);
console.log('flat ', matrix.flat());

const array = [1,2,[3,4],5,6]
const result = array.flat() 
console.log('resultado flat', result)// [1,2,3,4,5,6]

const array2 = [1, 2, [3, 4, [5, 6]]];
const result2 = array2.flat() 
console.log('resultado flat', result2)// [1, 2, 3, 4, [5, 6]]

const array3 = [1, 2, [3, 4, [5, 6]]]
const result3 = array3.flat(2) 
console.log('resultado flat', result3)// [1, 2, 3, 4, 5, 6]

const array4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
const result4 = array4.flat(Infinity) 
console.log('resultado flat with Infinity', result4)// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
