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

  const words = ['spray', 'limit', 'elite', 'exuberant']

  const wordsNew = [];
  for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if(element.length >= 6 ){
        wordsNew.push(element);
    }
  }

  const wordsFilter = words.filter(item => item.length >= 6);

  console.log('words Original', words);
  console.log('words for', wordsNew);
  console.log('words filter', wordsFilter);

  const ordersDelivered = orders.filter(order => order.delivered === true);
  const ordersDeliveredAndTotalMayor100 = orders.filter(order => order.delivered === true && order.total >= 100);

  const search = (query) =>{
    return orders.filter(order => {
        return order.customerName.toUpperCase().includes(query.toUpperCase());
    });
  }

const filterByLength = (array) => {
    return array.filter(word => word.length >= 4 );
  }
  
  

  console.log('orders Original', orders);
  console.log('orders Delivered ', ordersDelivered);
  console.log('orders ordersDeliveredAndTotalMayor100 ', ordersDeliveredAndTotalMayor100);
  console.log('search', search('em'));
  console.log('filterByLength ', filterByLength(['amor', 'sol', 'piedra', 'día']));