import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;

const Message = styled.h1`
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const LoaderWrapper = styled.div`
  width: 50px;
  height: 50px;
`;

const Loader = styled.div`
  width: 100%;
  height: 100%;
  border: 5px solid #e0e0e0;
  border-top: 5px solid #333;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const CountdownText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #666;
`;

const TransactionProcessing = () => {
  const [countdown, setCountdown] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(timer);
          navigate('/paymentSuccessful'); // Replace with your desired destination route
          return 0;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <Container>
      <Message>Transaction Processing</Message>
      <LoaderWrapper>
        <Loader />
      </LoaderWrapper>
      <CountdownText>Redirecting in {countdown} seconds...</CountdownText>
    </Container>
  );
};

export default TransactionProcessing;
