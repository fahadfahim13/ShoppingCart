import React from 'react'
import { Col, Container, Row, Section, SimpleButton } from 'styles/global';
import airpods from 'media/images/airpods.jpg';
import { CartItemCategoryTitle, CartItemImage, CartItemTitle } from './CartItemStyles';
import { Delete } from '@styled-icons/material-outlined/Delete';
import {Minus} from '@styled-icons/boxicons-regular/Minus';
import {Plus} from '@styled-icons/boxicons-regular/Plus';

const CartItem = () => {
  return (
    <Section smPadding="10px 10px" position="relative" inverse id="about">
        <Row style={{ marginTop: '2%', width: '98%', paddingLeft: '20px' }}>
            <Col style={{ alignItems: 'self-start', maxWidth: '112px' }}><CartItemImage src={airpods} /></Col>
            <Col>
                <Row style={{ paddingLeft: '10px' }}>
                    <Col style={{ alignItems: 'self-start'}}><CartItemTitle style={{marginBottom: '0px'}}>Apple Airpods 2nd Gen</CartItemTitle></Col>
                    <Col style={{ maxWidth: '30px'}}> <Delete style={{ alignItems: 'self-end', width: '30px', cursor: 'pointer' }} /> </Col>
                </Row>
                <Row style={{ paddingLeft: '10px' }}>
                    <CartItemCategoryTitle color='#161D25'>Size: </CartItemCategoryTitle> 
                    <CartItemCategoryTitle style={{ paddingLeft: '1%' }}>Medium</CartItemCategoryTitle>
                </Row>
                <Row style={{ paddingLeft: '10px' }}>
                    <Col style={{ padding: '0px' }}><b><CartItemCategoryTitle color='#161D25' fontSize='16px'>$1795.00</CartItemCategoryTitle></b></Col>
                    <Col style={{ padding: '0px' }}><s><CartItemCategoryTitle style={{ paddingLeft: '1%' }} fontSize='16px'>$1795.00</CartItemCategoryTitle></s></Col>
                    <Col></Col>
                    <Col>
                        <SimpleButton>
                            <Row style={{ alignItems: 'center' }}>
                                <Col onClick={() => console.log("- clicked")} style={{ alignItems: 'center' }}> <Minus style={{width: '16px', alignItems: 'self-start' }} /> </Col>
                                <Col onClick={() => console.log("01 clicked")} style={{alignItems: 'center' }} >01</Col>
                                <Col onClick={() => console.log("+ clicked")} style={{ alignItems: 'center' }}><Plus style={{width: '16px'}} /></Col>
                            </Row>
                        </SimpleButton>
                    </Col>
                </Row>
            </Col>
        </Row>
        <hr style={{ width: '92%', border: '1px solid #E9E9E9' }} />
    </Section>
  )
}

export default CartItem;