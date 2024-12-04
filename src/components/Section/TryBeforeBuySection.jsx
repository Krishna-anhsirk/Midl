import React from 'react';
import styled from 'styled-components';
import { Package, Clock, CreditCard, ArrowRightCircle } from 'lucide-react';

const SectionWrapper = styled.div`
  width: 100%;
  height: 70vh;
  background: linear-gradient(to right, #f8fafc, #ffffff);
  position: relative;
  overflow: hidden;
`;

const BackgroundCircle1 = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 25rem;
  height: 25rem;
  background-color: rgba(241, 245, 249, 0.7);
  border-radius: 50%;
  margin-right: -12rem;
  margin-top: -12rem;
`;

const BackgroundCircle2 = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 20rem;
  height: 20rem;
  background-color: rgba(226, 232, 240, 0.7);
  border-radius: 50%;
  margin-left: -10rem;
  margin-bottom: -10rem;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 4rem;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const LeftSection = styled.div`
  grid-column: span 5;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  top: -80px;
  right: -40px;
  width: 180px;
  height: 180px;
  z-index: 1;
  overflow: hidden;
  border-radius: 12px;
  transform: rotate(12deg);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
    0 8px 10px -6px rgba(0, 0, 0, 0.1);
`;

const RightSection = styled.div`
  grid-column: span 7;

  @media (max-width: 768px) {
    grid-column: span 12;
  }
`;

const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: bold;
  color: #1e293b;
  line-height: 1.1;
`;

const Description = styled.p`
  color: #64748b;
  font-size: 1.25rem;
  line-height: 1.6;
  max-width: 90%;
`;

const Button = styled.button`
  background-color: #334155;
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 9999px;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  transition: transform 0.2s, box-shadow 0.2s;
  font-size: 1.25rem;
  width: fit-content;
  cursor: pointer;

  &:hover {
    background-color: #1e293b;
    transform: translateY(-1px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  }
`;

const StepCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02), 0 1px 3px rgba(0, 0, 0, 0.03);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.03), 0 2px 4px rgba(0, 0, 0, 0.04);
  }
`;

const StepIcon = styled.div`
  color: #475569;
  margin-bottom: 1.25rem;
`;

const StepTitle = styled.h3`
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 0.75rem;
  font-size: 1.5rem;
`;

const StepDescription = styled.p`
  font-size: 1.125rem;
  color: #64748b;
  line-height: 1.5;
`;

const TryBeforeBuySection = () => {
  return (
    <SectionWrapper>
      <BackgroundCircle1 />
      <BackgroundCircle2 />

      <Container>
        <Grid>
          <LeftSection>
            {/* <ImageContainer>
              <img
                src="/api/placeholder/180/180"
                alt="Fashion items"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </ImageContainer> */}
            <Title>Try Before You Buy</Title>
            <Description>
              Experience sustainable fashion with our curated surplus
              collection. Try clothes in the comfort of your home and only pay
              for what you love.
            </Description>
            <Button>
              Start Shopping <ArrowRightCircle size={24} />
            </Button>
          </LeftSection>

          <RightSection>
            <StepsGrid>
              <StepCard>
                <StepIcon>
                  <Package size={32} />
                </StepIcon>
                <StepTitle>Select Items</StepTitle>
                <StepDescription>Choose from our collection</StepDescription>
              </StepCard>

              <StepCard>
                <StepIcon>
                  <Clock size={32} />
                </StepIcon>
                <StepTitle>7 Days Trial</StepTitle>
                <StepDescription>
                  Try your items at home with no upfront payment
                </StepDescription>
              </StepCard>

              <StepCard>
                <StepIcon>
                  <CreditCard size={32} />
                </StepIcon>
                <StepTitle>Pay Later</StepTitle>
                <StepDescription>
                  Only pay for the items you decide to keep
                </StepDescription>
              </StepCard>
            </StepsGrid>
          </RightSection>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default TryBeforeBuySection;
