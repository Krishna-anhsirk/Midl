// SaleSection.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const shine = keyframes`
  0% {
    background-position: -100% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const HeroSection = styled.section`
  position: relative;
  width: 100vw;
  height: 60vh;
  min-height: 500px;
  margin-left: calc(-50vw + 50%);
  margin-right: calc(-50vw + 50%);
  background: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 4rem;
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(255, 255, 255, 0.03) 50%,
    transparent 100%
  );
  background-size: 200% 200%;
  animation: ${shine} 15s linear infinite;
`;

const ContentWrapper = styled.div`
  position: relative;
  text-align: center;
  z-index: 2;
  padding: 0 1rem;
`;

const MainHeading = styled.h2`
  font-size: clamp(2.5rem, 8vw, 5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1rem;
  line-height: 1.1;
  letter-spacing: -0.02em;

  span {
    display: block;
    color: #ff3366;
    animation: ${float} 3s ease-in-out infinite;
  }
`;

const Subheading = styled.p`
  font-size: clamp(1rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const Timer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const TimeUnit = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 8px;
  min-width: 80px;
  backdrop-filter: blur(10px);

  .number {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
    font-weight: 700;
    color: white;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  .label {
    font-size: 0.875rem;
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`;

const ShopNowButton = styled.button`
  background: #ff3366;
  color: white;
  font-size: 1.125rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &:hover {
    background: #ff1f59;
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(255, 51, 102, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

const SaleSection = () => {
  // Countdown timer state (you can implement actual countdown logic)
  const timeLeft = {
    days: '02',
    hours: '18',
    minutes: '45',
    seconds: '30',
  };

  return (
    <HeroSection>
      <BackgroundPattern />
      <ContentWrapper>
        <MainHeading>
          BLACK FRIDAY
          <span>UP TO 70% OFF</span>
        </MainHeading>

        <Subheading>
          Don't miss out on our biggest sale of the year. Limited time offers on
          premium brands.
        </Subheading>

        <Timer>
          <TimeUnit>
            <div className="number">{timeLeft.days}</div>
            <div className="label">Days</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.hours}</div>
            <div className="label">Hours</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.minutes}</div>
            <div className="label">Minutes</div>
          </TimeUnit>
          <TimeUnit>
            <div className="number">{timeLeft.seconds}</div>
            <div className="label">Seconds</div>
          </TimeUnit>
        </Timer>

        <ShopNowButton>Shop Now</ShopNowButton>
      </ContentWrapper>
    </HeroSection>
  );
};

export default SaleSection;
