import React from 'react';
import styled from 'styled-components';
import { Recycle, Heart, Globe } from 'lucide-react';
import storyimg from '../../assets/storyimg.png';

const StoryContainer = styled.section`
  max-width: 1200px;
  margin: 4rem auto;
  padding: 2rem;
  background: white;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  color: #333;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 800;
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1.2rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin: 2rem 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const StoryContent = styled.div`
  color: #444;
`;

const Mission = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ImpactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  margin-top: 2rem;
`;

const ImpactItem = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  background: #333;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const ImpactTitle = styled.h3`
  color: #333;
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const ImpactText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Story = () => {
  return (
    <StoryContainer>
      <Header>
        <Title>Our Story, The Villagers</Title>
        <Subtitle>
          Transforming fashion waste into sustainable opportunities in Ireland
          and across Europe
        </Subtitle>
      </Header>

      <ContentGrid>
        <ImageContainer>
          <Image
            src={storyimg}
            alt="Our team working together to reduce fashion waste"
          />
        </ImageContainer>

        <StoryContent>
          <Mission>
            We're a passionate team of students who recognized a critical issue
            in the fashion industry: the destruction of unsold clothing across
            Ireland and Europe. What others saw as waste, we saw as an
            opportunity to make a difference.
          </Mission>
          <Mission>
            Our mission is simple but impactful: we rescue quality unsold
            clothing that would otherwise be destroyed and give these pieces a
            second chance to be loved and worn. Through our platform, we're not
            just selling clothes; we're promoting sustainable fashion and
            reducing waste in the industry.
          </Mission>

          <ImpactGrid>
            <ImpactItem>
              <IconWrapper>
                <Recycle size={24} />
              </IconWrapper>
              <ImpactTitle>Reduce Waste</ImpactTitle>
              <ImpactText>
                Saving clothing from destruction and landfills
              </ImpactText>
            </ImpactItem>
            <ImpactItem>
              <IconWrapper>
                <Heart size={24} />
              </IconWrapper>
              <ImpactTitle>Quality Fashion</ImpactTitle>
              <ImpactText>
                Providing access to premium unsold clothing
              </ImpactText>
            </ImpactItem>
            <ImpactItem>
              <IconWrapper>
                <Globe size={24} />
              </IconWrapper>
              <ImpactTitle>Local Impact</ImpactTitle>
              <ImpactText>
                Supporting sustainable fashion across Ireland & Europe
              </ImpactText>
            </ImpactItem>
          </ImpactGrid>
        </StoryContent>
      </ContentGrid>
    </StoryContainer>
  );
};

export default Story;
