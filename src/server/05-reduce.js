const totals = [1,2,3,4,5,6,7, 7];
const letters = ['e','m','e','r','s','o','n'];
const data = [
    {
      name: "Nicolas",
      level: "low",
    },
    {
      name: "Andrea",
      level: "medium",
    },
    {
      name: "Zulema",
      level: "hight",
    },
    {
      name: "Emerson",
      level: "hight",
    },
    {
      name: "Valentina",
      level: "medium",
    },
    {
      name: "Lucia",
      level: "low",
    },
    {
        name: "Brilis",
        level: "hight",
      },
  ];
const numbers = [1,2,3,3,4,5,2,1,1,3,4,5,6,7,5,5,4,7,8,9,8,7,5,4,5,8,9];

let sum = 0;
for (let index = 0; index < totals.length; index++) {
    const element = totals[index];
    sum = sum + element;
}


let sum2 = totals.reduce((sum, element) => sum + element, 0);

console.log('Array original ', totals);
console.log('Array for', sum);
console.log('Array reduce', sum2);
console.log('letters reduce', letters.reduce((accumulator, item) => accumulator + item , ''));
console.log('letters join', letters.join(''));

const reducerDataLevelToObjet = (array) =>{
   return array.map(item => item.level)
               .reduce((obj, element) => {
                    if(!obj[element]){
                        obj[element]  = 1;
                    } else {
                        obj[element] = obj[element] + 1;
                    }
                    return obj;
                }, {});
}

const reducerToObjet = (array) =>{
    return array.reduce((obj, element) => {
         if(!obj[element]){
             obj[element]  = 1;
         } else {
             obj[element] = obj[element] + 1;
         }
         return obj;
     }, {});
 }

 const reducerToObjet2 = (array, object) =>{
    return array.reduce((obj, element) => {
            if (element <= 5) {
                obj["1-5"] += 1;
            } else if (element >= 6 && element <= 8) {
                obj["6-8"] += 1;
            } else {
                obj["9-10"] += 1;
            }
            return obj;
          }, object);
 }

console.log('Array reduce to object ', reducerToObjet(totals));
console.log('Array reduce to object reducerDataLevelToObjet ', reducerDataLevelToObjet(data));
console.log('Array reduce to object ojo ', reducerToObjet(data.map(item => item.level)));
console.log('Array reduce to object reducerToObjet2 ', reducerToObjet2(numbers, {
    "1-5": 0,
    "6-8": 0,
    "9-10": 0,
  }));