import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Heart, Recycle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import mens_1 from '../../assets/mens_1.jpg';
import mens_2 from '../../assets/mens_2.jpg';
import mens_3 from '../../assets/mens_3.jpg';
import mens_4 from '../../assets/mens_4.jpg';
import mens_5 from '../../assets/mens_5.jpg';
import mens_6 from '../../assets/mens_6.jpg';
import mens_7 from '../../assets/mens_7.jpg';
import mens_8 from '../../assets/mens_8.jpg';
import { useLocation } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 4rem 1.5rem;

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  letter-spacing: 0.1em;
  color: #1a1a1a;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1rem;
  color: #666;
  margin-bottom: 3rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 4rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;

  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
`;

const WishlistButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 0.75rem;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  background-color: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 2;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: #1a1a1a;
    transition: color 0.2s ease-in-out;
  }
`;

const ProductCard = styled.div`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-4px);

    ${WishlistButton} {
      opacity: 1;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  aspect-ratio: 3/4;
  background-color: #f8f8f8;
  margin-bottom: 1.25rem;
  overflow: hidden;
  border-radius: 8px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.02);
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;

  ${ProductCard}:hover & {
    transform: scale(1.03);
  }
`;

const ProductInfo = styled.div`
  text-align: center;
  padding: 0 0.5rem;
`;

const ProductName = styled.h3`
  font-size: 0.9375rem;
  font-weight: 500;
  margin: 0;
  color: #1a1a1a;
  line-height: 1.4;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const ProductSubtext = styled.p`
  font-size: 0.875rem;
  color: #666;
  margin: 0.5rem 0;
  font-weight: 400;
`;

const PriceContainer = styled.div`
  font-size: 0.9375rem;
  margin-top: 0.75rem;
  font-weight: 500;
`;

const Price = styled.span`
  color: #1a1a1a;
`;

const OriginalPrice = styled.span`
  margin-left: 0.5rem;
  color: #666;
  text-decoration: line-through;
`;

const Badge = styled.span`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #4caf50;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.75rem;
  border-radius: 4px;
  font-weight: 500;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const AddToCartButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  color: #333;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background-color: #f8f8f8;
  }
`;

const MoreInfo = styled.div`
  font-weight: 500;
  font-size: 1.5rem;
  margin-top: 20rem;
  text-align: center;
  margin-bottom: 20rem;
`;

const BuyNowButton = styled.button`
  background: #333;
  border: none;
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background-color: #444;
  }
`;

const Kid = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  //   const products = [
  //     {
  //       id: 1,
  //       name: 'Premium Wool Overshirt',
  //       subtext: 'Rescued from a high-end retailer',
  //       price: '€89.99',
  //       originalPrice: '€299.99',
  //       image: mens_1,
  //       isSaved: true,
  //     },
  //     {
  //       id: 2,
  //       name: 'Sustainable Chinos',
  //       subtext: 'Eco-friendly fabric, saved from disposal',
  //       price: '€39.99',
  //       originalPrice: '€79.99',
  //       image: mens_2,
  //       isSaved: true,
  //     },
  //     {
  //       id: 3,
  //       name: 'Upcycled Ranch Jacket',
  //       subtext: 'Repurposed from unsold inventory',
  //       price: '€59.99',
  //       originalPrice: '€129.99',
  //       image: mens_3,
  //       isSaved: true,
  //     },
  //     {
  //       id: 4,
  //       name: 'Organic Cotton Polo',
  //       subtext: 'Sustainable brand',
  //       price: '€29.99',
  //       originalPrice: '€59.99',
  //       image: mens_4,
  //       // isSaved: true,
  //     },
  //     {
  //       id: 5,
  //       name: 'Reclaimed Leather Jacket',
  //       subtext: 'Saved from a luxury overstock',
  //       price: '€129.99',
  //       originalPrice: '€399.99',
  //       image: mens_5,
  //       isSaved: true,
  //     },
  //     {
  //       id: 6,
  //       name: 'Eco-Friendly Sneakers',
  //       subtext: 'Made from recycled materials',
  //       price: '€49.99',
  //       originalPrice: '€99.99',
  //       image: mens_6,
  //       // isSaved: true,
  //     },
  //     {
  //       id: 7,
  //       name: 'Recycled Fleece Hoodie',
  //       subtext: 'Created from plastic bottles',
  //       price: '€34.99',
  //       originalPrice: '€69.99',
  //       image: mens_7,
  //       // isSaved: true,
  //     },
  //     {
  //       id: 8,
  //       name: 'Sustainable Cargo Pants',
  //       subtext: 'Rescued from a closing warehouse',
  //       price: '€54.99',
  //       originalPrice: '€109.99',
  //       image: mens_8,
  //       // isSaved: true,
  //     },
  //   ];

  return (
    <Layout tab="kids">
      <MoreInfo>Coming soon....</MoreInfo>
    </Layout>
  );
};

export default Kid;
