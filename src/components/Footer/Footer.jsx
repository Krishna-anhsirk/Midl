import React from 'react';
import styled from 'styled-components';
import { Mail, Phone } from 'lucide-react';

const FooterContainer = styled.footer`
  background: white;
  padding: 4rem 2rem;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.05);
`;

const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const LeftSection = styled.div`
  flex: 1;
  max-width: 100%;

  @media (min-width: 768px) {
    max-width: 500px;
  }
`;

const StoreName = styled.h2`
  color: #333;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const StoreInfo = styled.p`
  color: #808080;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #808080;
  font-size: 1.1rem;

  svg {
    color: #808080;
  }
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 200px;
`;

const ColumnTitle = styled.h3`
  color: #333;
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterLink = styled.a`
  color: #808080;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 1.1rem;
  line-height: 1.8;

  &:hover {
    color: #333;
  }
`;

const Copyright = styled.div`
  text-align: center;
  color: #666;
  font-size: 0.9rem;
  padding-top: 1rem;
  margin-top: 1rem;
  border-top: 1px solid #eee;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <LeftSection>
          <StoreName>MIDL</StoreName>
          <StoreInfo>
            Your destination for quality surplus stock at unbeatable prices. We
            partner with local traders to bring you amazing deals on premium
            products, all from the comfort of your home.
          </StoreInfo>

          <ContactSection>
            <ContactItem>
              <Phone size={20} />
              +353 (555) 123-4567
            </ContactItem>
            <ContactItem>
              <Mail size={20} />
              contact@midl.com
            </ContactItem>
          </ContactSection>
        </LeftSection>

        <RightSection>
          <LinkColumn>
            <ColumnTitle>Shop</ColumnTitle>
            <FooterLink href="#">New Arrivals</FooterLink>
            <FooterLink href="#">Current Deals</FooterLink>
            <FooterLink href="#">Bulk Purchase</FooterLink>
            <FooterLink href="#">Categories</FooterLink>
            <FooterLink href="#">Best Sellers</FooterLink>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Company</ColumnTitle>
            <FooterLink href="#">About Us</FooterLink>
            <FooterLink href="#">How It Works</FooterLink>
            <FooterLink href="#">Partner With Us</FooterLink>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">FAQ</FooterLink>
          </LinkColumn>
        </RightSection>
      </FooterContent>

      <Copyright>
        © {new Date().getFullYear()} MIDL. All rights reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;
