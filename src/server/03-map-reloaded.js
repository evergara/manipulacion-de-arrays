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

  const totals = orders.map(item => item.total);
  const ordersTax = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
  });

  console.log('Array original', orders);
  console.log('new Array totals', totals);
  console.log('new Array ordersTax', ordersTax);