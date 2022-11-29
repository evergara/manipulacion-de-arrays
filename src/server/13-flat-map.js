const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"]},
    { userId: 2, username: "Mike", attributes: ["Lovely"]},
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"]},
  ]

  const calendars = {
    primaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 1, 15, 30),
        title: "Cita 1",
      },
      {
        startDate: new Date(2021, 1, 1, 17),
        endDate: new Date(2021, 1, 1, 18),
        title: "Cita 2",
      },
    ],
    secondaryCalendar: [
      {
        startDate: new Date(2021, 1, 1, 12),
        endDate: new Date(2021, 1, 1, 12, 30),
        title: "Cita 2",
      },
      {
        startDate: new Date(2021, 1, 1, 9),
        endDate: new Date(2021, 1, 1, 10),
        title: "Cita 4",
      },
    ],
  };


  const mapAndFlat = users.map(user => user.attributes).flat();
  console.log('map And Flat', mapAndFlat);

  console.log('flatMap: ', users.flatMap(user => user.attributes));
  console.log('flatMap calender: ', Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate);
  } ));

  function solution(lines) {
    return lines.flatMap(item => item.split(' ').length).reduce((sum, item) => sum += item, 0);
  }

  console.log(' retorne el número de palabras totales', solution([
    "Beautiful is better than ugly",
    "Explicit is better than implicit",
    "Simple is better than complex",
    "Complex is better than complicated",
  ]));