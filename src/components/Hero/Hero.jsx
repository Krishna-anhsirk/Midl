import React from 'react';
import styled from 'styled-components';
import banner from '../../assets/Hero.png';

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  min-height: 600px;
  overflow: hidden;
`;

const HeroImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: 60% 60%;
  filter: brightness(0.85);
`;

const ContentWrapper = styled.div`
  position: relative;
  height: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const Tagline = styled.p`
  color: #fff;
  font-size: 1rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Title = styled.h1`
  color: #fff;
  font-size: 3.5rem;
  font-weight: 600;
  margin: 0 0 2rem 0;
  max-width: 600px;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CTAButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  width: fit-content;

  &:hover {
    background-color: #f8f8f8;
    transform: translateY(-2px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroImage imageUrl={banner} />
      <ContentWrapper>
        <Tagline>Sustainable Fashion, Smart Prices</Tagline>
        <Title>New Winter Collection</Title>
        <CTAButton>Shop Now</CTAButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default Hero;
