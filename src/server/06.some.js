const numbers = [1, 2, 3, 5];
const numbers2 = [1, 3, 5, 7, 10, 11];
const numbers3 = [1, 3, 5];
const dates = [
    {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: "Cita de trabajo",
    },
    {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: "Cita con mi jefe",
    },
    {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: "Cena",
    },
  ];

  const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Emerson",
      total: 300,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
  ];

let respuesta =  false;
for (let i=0; i < numbers.length; i++){
    const element = numbers[i]
    if (element % 2 === 0) {
        respuesta = true
        break
    }
}

console.log(respuesta) // true

const response = numbers.some(item => item % 2 === 0);
console.log('Al menos hay un par',response) // true

const newAppointment = {
    startDate: new Date (2021,1,1,8),
    endDate: new Date (2021,1,1,9,30),
};

const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) =>{
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start:date.startDate, end:date.endDate},
            {start:newDate.startDate,end:newDate.endDate}
        )
    })
}
console.log('Al menos alguna fecha se cruza', isOverlap(newAppointment));

console.log('Alguna orden fue entregada', orders.some(item => item.delivered));

const checkArray = (numbers) => {
    return numbers.some(item => item % 2 === 0);
}

console.log('Almenos hay un numero par', checkArray(numbers2));
console.log('Almenos hay un numero par', checkArray(numbers3));