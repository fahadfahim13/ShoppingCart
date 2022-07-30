import React from 'react';

import ProductsContainer from 'uicontainers/ProductsContainer';
import CartContainer from 'uicontainers/CartContainer';
import useCartOptions from './hooks';

const Home = () => {
  const { openCart, handleAddtoCart, handleCloseCart } = useCartOptions();

  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer handleAddtoCart={handleAddtoCart} />
      {/* Shopping Cart */}
      <CartContainer open={openCart} onclose={handleCloseCart} />
    </>
  );
};

export default Home;
