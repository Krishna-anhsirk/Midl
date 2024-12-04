import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Layout from '../../components/Layout/Layout';
import nautica from '../../assets/nautica.webp';
import sweatshirt from '../../assets/sweatshirt.jpg';
import jumpsuit from '../../assets/jumpsuit.jpg';
import tshirt from '../../assets/tshirt.webp';
import linenShorts from '../../assets/linen-shorts.png';
import summerDress from '../../assets/summer-dress.webp';
import trench from '../../assets/trench.webp';
import trousers from '../../assets/trousers.jpg';
import mens_1 from '../../assets/mens_1.jpg';
import mens_2 from '../../assets/mens_2.jpg';
import mens_3 from '../../assets/mens_3.jpg';
import mens_4 from '../../assets/mens_4.jpg';
import mens_5 from '../../assets/mens_5.jpg';
import mens_6 from '../../assets/mens_6.jpg';
import mens_7 from '../../assets/mens_7.jpg';
import mens_8 from '../../assets/mens_8.jpg';

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem auto;
  padding: 1rem;
  max-width: 900px;
  margin-top: 5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 2rem;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

const DetailsContainer = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin: 0;
`;

const Subtext = styled.p`
  font-size: 1rem;
  color: #777;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Price = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: #333;
`;

const MaxPrice = styled.span`
  font-size: 1rem;
  color: #999;
  text-decoration: line-through;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
`;

const Condition = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: ${(props) =>
    props.condition === 'Good'
      ? '#4CAF50'
      : props.condition === 'New'
      ? '#007BFF'
      : '#FF9800'};
`;

const OriginalPrice = styled.span`
  margin-left: 0.5rem;
  color: #666;
  text-decoration: line-through;
`;

const SourcedFrom = styled.p`
  font-size: 0.9rem;
  color: #777;
  font-style: italic;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  button {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }

  .add-to-cart {
    background: #f5f5f5;
    color: #333;

    &:hover {
      background: #e0e0e0;
    }
  }

  .buy-now {
    background: #333;
    color: #fff;

    &:hover {
      background: #444;
    }
  }
`;

const SingleProduct = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  const products = [
    {
      id: 1,
      name: 'Casual Shirt | Nautica',
      subtext: '100% cotton',
      price: '€15.00',
      originalPrice: '€20.00',
      image: nautica,
      isNew: true,
      condition: 'New',
      description:
        'A casual cotton shirt perfect for summer outings. Stylish and comfortable, sourced from sustainable cotton farms.',
      sourcedFrom: 'Sustainable Threads, Dublin, Ireland',
    },
    {
      id: 2,
      name: 'Trousers',
      subtext: 'Muddy waters',
      price: '€89.00',
      originalPrice: '€99.00',
      image: trousers,
      isNew: false,
      condition: 'New',
      description:
        'Premium quality trousers made from eco-friendly fabrics. Designed for durability and comfort.',
      sourcedFrom: 'EcoWear Boutique, Cork, Ireland',
    },
    {
      id: 3,
      name: 'Amelia Purple Trench',
      subtext: 'Surplus',
      price: '€15.00',
      originalPrice: '€20.00',
      image: trench,
      isNew: false,
      condition: 'New',
      description:
        'Elegant purple trench coat made from surplus fabric, perfect for autumn. Sustainably sourced and stylish.',
      sourcedFrom: 'Vintage Avenue, Galway, Ireland',
    },
    {
      id: 4,
      name: 'T-Shirt',
      subtext: 'Black',
      price: '€6.00',
      originalPrice: '€10.00',
      image: tshirt,
      isNew: true,
      condition: 'Slight scratches in some parts',
      description:
        'Classic black T-shirt made from organic cotton. A wardrobe essential, sourced responsibly.',
      sourcedFrom: 'Green Style Store, Limerick, Ireland',
    },
    {
      id: 5,
      name: 'Summer Dress',
      subtext: 'Floral Print',
      price: '€15.00',
      originalPrice: '€25.00',
      image: summerDress,
      isNew: false,
      condition: 'Good',
      description:
        'A breezy summer dress featuring vibrant floral prints. Perfect for sunny days and sourced locally.',
      sourcedFrom: 'Irish Trends Boutique, Kilkenny, Ireland',
    },
    {
      id: 6,
      name: 'Linen Shorts',
      subtext: 'Navy blue',
      price: '€12.00',
      originalPrice: '€18.00',
      image: linenShorts,
      isNew: false,
      condition: 'Slight scratches in some parts',
      description:
        'Lightweight linen shorts for casual wear. Comfortable and sourced from local artisans.',
      sourcedFrom: 'Handmade Delights, Waterford, Ireland',
    },
    {
      id: 7,
      name: 'Sweatshirt',
      subtext: 'White',
      price: '€24.00',
      originalPrice: '€30.00',
      image: sweatshirt,
      isNew: true,
      condition: 'Very good',
      description:
        'A cozy white sweatshirt with a minimalist design. Perfect for layering and made with sustainable fabrics.',
      sourcedFrom: 'The Cozy Corner, Dublin, Ireland',
    },
    {
      id: 8,
      name: 'Denim Jumpsuit',
      subtext: 'Light Wash',
      price: '€20.00',
      originalPrice: '€28.00',
      image: jumpsuit,
      isNew: false,
      condition: 'Good',
      description:
        'Chic denim jumpsuit with a light wash finish. Versatile and sourced from local designers.',
      sourcedFrom: 'Urban Finds, Belfast, Ireland',
    },
    {
      id: 9,
      name: 'Premium Wool Overshirt',
      subtext: 'Rescued from a high-end retailer',
      description:
        'Crafted from soft, high-quality wool, this overshirt is both stylish and versatile. Perfect for layering, it adds a touch of sophistication to any outfit.',
      price: '€89.99',
      condition: 'New',
      originalPrice: '€299.99',
      image: mens_1,
      isSaved: true,
    },
    {
      id: 10,
      name: 'Sustainable Chinos',
      subtext: 'Eco-friendly fabric, saved from disposal',
      description:
        'Made with eco-friendly materials, these chinos provide a perfect balance of comfort and style. A must-have for casual and formal occasions alike.',
      price: '€39.99',
      condition: 'Good',
      originalPrice: '€79.99',
      image: mens_2,
      isSaved: true,
    },
    {
      id: 11,
      name: 'Upcycled Ranch Jacket',
      subtext: 'Repurposed from unsold inventory',
      description:
        'This rugged ranch jacket is a sustainable style statement. Upcycled and durable, it’s perfect for outdoor adventures or urban casual looks.',
      price: '€59.99',
      condition: 'New',
      originalPrice: '€129.99',
      image: mens_3,
      isSaved: true,
    },
    {
      id: 12,
      name: 'Organic Cotton Polo',
      subtext: 'Sustainable brand',
      description:
        'Stay cool and comfortable with this polo made from 100% organic cotton. Ideal for those who value style and sustainability.',
      price: '€29.99',
      condition: 'New',
      originalPrice: '€59.99',
      image: mens_4,
      // isSaved: true,
    },
    {
      id: 13,
      name: 'Reclaimed Leather Jacket',
      subtext: 'Saved from a luxury overstock',
      description:
        'Elevate your wardrobe with this premium leather jacket. Crafted from reclaimed materials, it combines luxury and sustainability in one stunning piece.',
      price: '€129.99',
      condition: 'New',
      originalPrice: '€399.99',
      image: mens_5,
      isSaved: true,
    },
    {
      id: 14,
      name: 'Eco-Friendly Sneakers',
      subtext: 'Made from recycled materials',
      description:
        'Step into comfort and style with these eco-friendly sneakers. Made from recycled materials, they are perfect for everyday wear.',
      price: '€49.99',
      condition: 'Good',
      originalPrice: '€99.99',
      image: mens_6,
      // isSaved: true,
    },
    {
      id: 15,
      name: 'Recycled Fleece Hoodie',
      subtext: 'Created from plastic bottles',
      description:
        'This fleece hoodie redefines cozy. Made from recycled plastic bottles, it’s a sustainable choice for chilly days.',
      price: '€34.99',
      condition: 'New',
      originalPrice: '€69.99',
      image: mens_7,
      // isSaved: true,
    },
    {
      id: 16,
      name: 'Sustainable Cargo Pants',
      subtext: 'Rescued from a closing warehouse',
      description:
        'These cargo pants combine functionality and style, featuring multiple pockets and a durable build. Slight scratches add character without compromising quality.',
      price: '€54.99',
      condition: 'Slight scratches in some places',
      originalPrice: '€109.99',
      image: mens_8,
      // isSaved: true,
    },
  ];

  const { productId } = useParams();

  // Find the product based on the `productId`
  const product = products.find((item) => item.id === parseInt(productId));

  // If the product is not found, return a placeholder
  if (!product) {
    return <p>Product not found!</p>;
  }

  const {
    name,
    subtext,
    price,
    originalPrice,
    image,
    description,
    condition,
    sourcedFrom,
    isNew,
  } = product;

  return (
    <Layout>
      <Container>
        <ImageContainer>
          <img src={image} alt={name} />
        </ImageContainer>
        <DetailsContainer>
          <Title>{name}</Title>
          <Subtext>{subtext}</Subtext>
          <PriceContainer>
            <Price>{price}</Price>
            {originalPrice && <OriginalPrice>{originalPrice}</OriginalPrice>}
          </PriceContainer>
          <Condition condition={condition}>{condition}</Condition>
          <Description>{description}</Description>
          <SourcedFrom>{sourcedFrom}</SourcedFrom>
          <ButtonContainer>
            <button className="add-to-cart">Add to Cart</button>
            <Link to="payment1">
              <button className="buy-now">Buy Now</button>
            </Link>
            <Link to="payment2">
              <button className="buy-now">Try before you buy</button>
            </Link>
          </ButtonContainer>
        </DetailsContainer>
      </Container>
    </Layout>
  );
};

export default SingleProduct;
