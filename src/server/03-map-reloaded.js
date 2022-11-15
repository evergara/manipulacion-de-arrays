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


  const products  = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20,
    },
  ];

  const totals = orders.map(item => item.total);
  const ordersTax = orders.map(item => {
    return {
        ...item,
        tax: 0.19
    }
  });

  const productsTax = products.map(product => {
    return {
        ...product,
        taxes: Math.trunc(0.19 * (product.price))
    }
  });

  console.log('Array original', orders);
  console.log('new Array totals', totals);
  console.log('new Array ordersTax', ordersTax);
  console.log('Array original products', products);
  console.log('new Array productsTax', productsTax);