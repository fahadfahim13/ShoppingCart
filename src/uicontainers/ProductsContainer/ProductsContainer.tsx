import React from 'react';
import ProductCard from 'components/ProductCard';
import { ProductWrapper } from './ProductContainerStyles';
import { Container, Section } from 'styles/global';
import { ALL_PRODUCTS } from 'data/products';

const ProductsContainer = () => {
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <ProductWrapper>
          {ALL_PRODUCTS.map((product) => (
            <ProductCard
              id={product.id}
              name={product.name}
              rating={product.rating}
              onRatingChange={product.onRatingChange}
              type={product.type}
              curPrice={product.curPrice}
              prevPrice={product.prevPrice}
              onSale={product.onSale}
              isFavorite={product.isFavorite}
              onFavoriteChange={product.onFavoriteChange}
              image={product.image}
            />
          ))}
        </ProductWrapper>
      </Container>
    </Section>
  )
};

export default ProductsContainer;