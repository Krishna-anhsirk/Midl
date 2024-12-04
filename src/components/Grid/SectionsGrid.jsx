import React from 'react';
import styled from 'styled-components';
import under100 from '../../assets/under-100.avif';
import newIn from '../../assets/new-in.jpg';
import winterSale from '../../assets/winter-sale.avif';
import blackFridaySale from '../../assets/black-friday-sale.avif';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 1rem;
  }
`;

const CategoryCard = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CategoryImage = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  transition: transform 0.3s ease;

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1),
      rgba(0, 0, 0, 0.6)
    );
  }

  ${CategoryCard}:hover & {
    transform: scale(1.05);
  }
`;

const TextContainer = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 1.5rem;
  right: 1.5rem;
  z-index: 1;
`;

const CategoryTitle = styled.h2`
  color: white;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const CategoryTagline = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.875rem;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
`;

const categories = [
  {
    id: 1,
    title: 'New In',
    tagline: 'Fresh arrivals for the season',
    imageUrl: newIn,
    link: '/new-in',
  },
  {
    id: 2,
    title: 'Local brands',
    tagline: 'Local Treasures, Handpicked for You',
    imageUrl: winterSale,
    link: '/winter-sale',
  },
  {
    id: 3,
    title: 'Under 20',
    tagline: 'Budget-friendly fashion finds',
    imageUrl: under100,
    link: '/under-100',
  },
  {
    id: 4,
    title: 'Black Friday Sale',
    tagline: 'Exclusive deals for a limited time',
    imageUrl: blackFridaySale,
    link: '/black-friday',
  },
];

const SectionsGrid = () => {
  return (
    <GridContainer>
      {categories.map((category) => (
        <CategoryCard key={category.id}>
          <CategoryImage imageUrl={category.imageUrl} />
          <TextContainer>
            <CategoryTitle>{category.title}</CategoryTitle>
            <CategoryTagline>{category.tagline}</CategoryTagline>
          </TextContainer>
        </CategoryCard>
      ))}
    </GridContainer>
  );
};

export default SectionsGrid;
