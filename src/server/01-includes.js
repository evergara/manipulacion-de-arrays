
const frutas = ["manzana", "pera", "piña", "uva"]
const saludo = "Hola mundo"
const pets = [ "cat", "dog", "bat" ]


let includeInArray = false
for (let i = 0; i < pets.length; i++){
    const item = pets[i]
    if (item === "cat"){
        includeInArray = true
        break
    }
}

console.log(includeInArray) // true
saludo.includes("Hola") // true
console.log('include cat', pets.includes("cat"));
saludo.includes("Hola") // true
saludo.includes("Mundo") // false
saludo.includes(" ") // true
saludo.includes("Hola", 1) // false
saludo.includes("mundo", -5) // true


frutas.includes("manzana") // true
frutas.includes("Pera") // false
frutas.includes("sandía") // false
frutas.includes("manzana", 1) // false
frutas.includes("piña", -1) // false
frutas[0].includes("man") // true

function solution(word, query){
    return word.toLowerCase()
    .includes(query.toLowerCase());
}; 
solution("Ana lava la tina", "ana");
solution("Sara esta en la costa", "cos");
solution("Nicolas", "ana");