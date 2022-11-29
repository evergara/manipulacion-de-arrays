const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
  ];
  
  const update = {
    id: '🥞',
    changes: {
        price: 200,
        description: 'delicioso'
    }
  };
  
  const productIndex = products.findIndex(item => item.id === update.id);
  // Solo agrego esto
  const newProduct = [...products] 
  
  // Cambio product por newProduct
  newProduct[productIndex] = {   ...products[productIndex],
    ...update.changes
  };
  
  console.log('---'.repeat(10),'products','---'.repeat(10),products)
  console.log('---'.repeat(10),'newProducts','---'.repeat(10),newProduct)