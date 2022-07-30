import React from 'react';
import ProductCard from 'components/ProductCard';
import { ProductWrapper } from './ProductContainerStyles';
import { Container, Section } from 'styles/global';

const ProductsContainer = () => {
  return (
    <Section smPadding="50px 10px" position="relative" inverse id="about">
      <Container>
        <ProductWrapper>
          {Array.from(Array(8)).map((_, index) => (
            <ProductCard />
          ))}
        </ProductWrapper>
      </Container>
    </Section>
  )
};

export default ProductsContainer;