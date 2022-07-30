import { Drawer } from '@mui/material';
import React from 'react';
import { Col, Row, Section } from 'styles/global';
import { Title } from './CartContainerStyles';
import { ShoppingBag } from '@styled-icons/material-outlined';
import { Close } from '@styled-icons/ionicons-outline';
import CartItem from 'components/CartItem';
import CheckoutSectionContainer from 'uicontainers/CheckoutSectionContainer';
import { CartProps } from './types';

const CartContainer = (props: CartProps) => {
  const { open, onclose } = props;
  return (
    <Drawer anchor="right" open={open} onClose={onclose}>
      <Section smPadding="10px 10px" position="relative" inverse id="about" width="610px">
        <Row style={{ paddingLeft: '0px' }}>
          <Col style={{ marginLeft: '20px', alignItems: 'self-start' }}>
            <Close onClick={onclose} style={{ width: '22px', height: '22px', cursor: 'pointer' }} />
          </Col>
          <Col></Col>
          <Col style={{ alignItems: 'center' }}>
            <Title>
              My Cart <ShoppingBag style={{ width: '20px' }} />
            </Title>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
        <hr style={{ border: '1px solid #E9E9E9' }} />

        {Array.from(Array(10)).map((_, index) => (
          <CartItem />
        ))}
      </Section>

      <CheckoutSectionContainer />
    </Drawer>
  );
};

export default CartContainer;
