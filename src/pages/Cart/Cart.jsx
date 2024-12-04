import React, { useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import nautica from '../../assets/nautica.webp';
import trousers from '../../assets/trousers.jpg';

import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
  margin-top: 2rem;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 3rem;
  letter-spacing: 0.1em;
  color: #333;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 4rem;
  }
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  background-color: #f8f8f8;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProductDetails = styled.div`
  flex: 1;
  margin-left: 1rem;

  h3 {
    font-size: 1rem;
    font-weight: 500;
    color: #333;
    margin: 0 0 0.25rem;
  }

  p {
    font-size: 0.875rem;
    color: #666;
    margin: 0;
  }
`;

const QuantityPriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const Price = styled.span`
  font-size: 1rem;
  font-weight: 500;
  color: #333;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5rem;

  button {
    background: none;
    border: 1px solid #333;
    color: #333;
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.25rem 0.75rem;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      background-color: #f8f8f8;
    }
  }

  span {
    margin: 0 0.75rem;
    font-size: 1rem;
    color: #333;
  }
`;

const TotalContainer = styled.div`
  margin-top: 2rem;
  text-align: right;

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    margin: 0;
    color: #333;
  }
`;

const CheckoutButton = styled.button`
  background: #333;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 1rem;

  &:hover {
    background-color: #444;
  }
`;

const Cart = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  const cartItems = [
    {
      id: 1,
      name: 'Casual Shirt | Nautica',
      subtext: '100% cotton',
      price: '€15.00',
      quantity: 2,
      image: nautica,
    },
    {
      id: 2,
      name: 'Trousers',
      subtext: 'Muddy waters',
      price: '€89.00',
      quantity: 1,
      image: trousers,
    },
  ];

  const total = cartItems.reduce(
    (acc, item) =>
      acc + parseFloat(item.price.replace('€', '')) * item.quantity,
    0
  );

  return (
    <Layout>
      <Container>
        <Title>Your Cart</Title>

        {cartItems.map((item) => (
          <CartItem key={item.id}>
            <ImageContainer>
              <img src={item.image} alt={item.name} />
            </ImageContainer>

            <ProductDetails>
              <h3>{item.name}</h3>
              <p>{item.subtext}</p>
            </ProductDetails>

            <QuantityPriceContainer>
              <Price>
                €
                {(
                  parseFloat(item.price.replace('€', '')) * item.quantity
                ).toFixed(2)}
              </Price>
              <Quantity>
                <button>-</button>
                <span>{item.quantity}</span>
                <button>+</button>
              </Quantity>
            </QuantityPriceContainer>
          </CartItem>
        ))}

        <TotalContainer>
          <h3>Total: €{total.toFixed(2)}</h3>
          <CheckoutButton>Proceed to Checkout</CheckoutButton>
        </TotalContainer>
      </Container>
    </Layout>
  );
};

export default Cart;
