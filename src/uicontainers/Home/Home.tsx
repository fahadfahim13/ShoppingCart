import React, { useState } from 'react';

import ProductsContainer from 'uicontainers/ProductsContainer';
import CartContainer from 'uicontainers/CartContainer';

const Home = () => {
  const [openCart, setOpenCart] = useState(true);
  return (
    <>
      {/* ProductCards List */}
      <ProductsContainer />
      {/* Shopping Cart */}
      <CartContainer open={openCart} onclose={() => setOpenCart(false)} />
    </>
  );
};

export default Home;
