import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Package, Truck, Home, CreditCard, RotateCcw } from 'lucide-react';
import Layout from '../../components/Layout/Layout';
import { useSpring, animated } from 'react-spring';
import Confetti from 'react-confetti';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10rem;
  margin-bottom: 12rem;
`;

const CongratsMessage = styled(animated.div)`
  text-align: center;
  margin-bottom: 2rem;
  padding: 1rem;
  background-color: #f0fff4;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CongratsTitle = styled.h2`
  color: #38a169;
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CongratsText = styled.p`
  color: #2f855a;
  font-size: 1rem;
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow-x: auto;
`;

const TimelineContent = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: max-content;
`;

const TimelineItem = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 40px;
  position: relative;
  min-width: 120px;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 20px;
    right: -40px;
    width: 40px;
    height: 2px;
    background-color: #e0e0e0;
  }

  &:last-child::after {
    display: none;
  }
`;

const IconContainer = styled(animated.div)`
  background-color: ${(props) => (props.active ? '#333' : '#e0e0e0')};
  color: ${(props) => (props.active ? '#fff' : '#333')};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

const Content = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  margin: 0 0 5px;
  color: #333;
  font-size: 14px;
`;

const DateText = styled.p`
  margin: 0;
  color: #666;
  font-size: 12px;
`;

const ReturnInfo = styled(animated.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 4rem;
  text-align: center;
  color: #666;
  font-size: 14px;
`;

const OrderSuccessful = () => {
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateWindowDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateWindowDimensions();
    window.addEventListener('resize', updateWindowDimensions);
    return () => window.removeEventListener('resize', updateWindowDimensions);
  }, []);

  const getDate = (daysToAdd = 0) => {
    try {
      const date = new Date();
      date.setDate(date.getDate() + daysToAdd);
      return date;
    } catch (error) {
      console.error('Error creating date:', error);
      return null;
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Date unavailable';
    try {
      return date.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Date formatting error';
    }
  };

  const stages = [
    { title: 'Ordered', icon: Package, date: getDate(0), active: true },
    { title: 'Processing', icon: Package, date: getDate(1), active: false },
    { title: 'Shipped', icon: Truck, date: getDate(3), active: false },
    { title: 'Delivered', icon: Home, date: getDate(5), active: false },
    { title: 'Payment', icon: CreditCard, date: getDate(12), active: false },
  ];

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  const congratsAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(-20px)' },
    delay: 500,
  });

  const itemAnimations = stages.map((_, index) =>
    useSpring({
      opacity: 1,
      transform: 'translateY(0px)',
      from: { opacity: 0, transform: 'translateY(50px)' },
      delay: 1500 + index * 200,
    })
  );

  const returnInfoAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    delay: 3000,
  });

  return (
    <Layout>
      <Confetti
        width={windowDimensions.width}
        height={windowDimensions.height}
        recycle={false}
        numberOfPieces={200}
        tweenDuration={10000}
      />
      <Root>
        <CongratsMessage style={congratsAnimation}>
          <CongratsTitle>You're a hero! 🦸‍♂️🦸‍♀️</CongratsTitle>
          <CongratsText>You've saved 2.5 kg of CO2 emissions.</CongratsText>
          <CongratsText>
            You've rescued a piece from being destroyed!
          </CongratsText>
        </CongratsMessage>
        <TimelineContainer style={fadeIn}>
          <TimelineContent>
            {stages.map((stage, index) => (
              <TimelineItem key={index} style={itemAnimations[index]}>
                <IconContainer active={stage.active}>
                  <stage.icon size={20} />
                </IconContainer>
                <Content>
                  <Title>{stage.title}</Title>
                  <DateText>{formatDate(stage.date)}</DateText>
                </Content>
              </TimelineItem>
            ))}
          </TimelineContent>
          <ReturnInfo style={returnInfoAnimation}>
            <IconContainer>
              <RotateCcw size={20} />
            </IconContainer>
            <Title>Return Product (if not satisfied)</Title>
          </ReturnInfo>
        </TimelineContainer>
      </Root>
    </Layout>
  );
};

export default OrderSuccessful;
