import React, { useState } from 'react';
import styled from 'styled-components';
import { ShoppingBag, Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartIcon = styled(ShoppingBag)``;
//   fill: black;

const Nav = styled.nav`
  background: white;
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  color: #333;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
`;

const NavLinks = styled.div`
  display: none;
  align-items: center;
  gap: 2rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const NavLink = styled.a`
  color: ${(props) => (props.active ? 'white' : '#666')};
  text-decoration: none;
  font-size: 0.95rem;
  padding: 0.5rem 1rem;
  border-radius: 50px;
  background: ${(props) => (props.active ? '#333' : 'transparent')};
  color: ${(props) => (props.active ? 'white' : '#333')};
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) => (props.active ? '#333' : '#f5f5f5')};
  }
`;

const RightSection = styled.div`
  display: none;
  align-items: center;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const CartButton = styled.button`
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const LoginButton = styled.button`
  background: none;
  border: none;
  color: #333;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  border-radius: 50px;
  transition: background 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

const SignUpButton = styled.button`
  background: #333;
  color: white;
  border: none;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-size: 0.95rem;
  border-radius: 50px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    background: #444;
  }
`;

const MobileMenuButton = styled.button`
  display: flex;
  align-items: center;
  background: none;
  text-align: center;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 0.5rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);

  @media (min-width: 1024px) {
    display: none;
  }
`;

const MobileNavLink = styled.a`
  color: #333;
  text-decoration: none;
  text-align: center;
  font-size: 1rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  transition: all 0.2s ease;
  background: ${(props) => (props.active ? '#f5f5f5' : 'transparent')};

  &:hover {
    background: #f5f5f5;
  }
`;

const MobileLink = styled(Link)`
  text-align: center;
`;

const UserIcon = styled(User)`
  color: #333;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #666;
  }
`;

const MobileButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1rem 0;
`;

const MobileCartButton = styled(CartButton)`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
`;

const MobileLoginButton = styled(LoginButton)`
  width: 100%;
  padding: 0.75rem;
  border-radius: 8px;
  justify-content: center;
  display: flex;
`;

const MobileSignUpButton = styled(SignUpButton)`
  width: 100%;
  padding: 0.75rem;
  justify-content: center;
  display: flex;
`;

const Navbar = ({ tab }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Container>
        <Link to="/">
          <Logo>MIDL</Logo>
        </Link>

        <NavLinks>
          <Link to="/">
            <NavLink href="#" active={tab === 'home'}>
              Home
            </NavLink>
          </Link>
          <Link to="/womens">
            <NavLink href="#" active={tab === 'womens'}>
              Women
            </NavLink>
          </Link>
          <Link to="/mens">
            <NavLink href="/men" active={tab === 'mens'}>
              Men
            </NavLink>
          </Link>
          <Link to="/kids">
            <NavLink href="#" active={tab === 'kids'}>
              Kids
            </NavLink>
          </Link>

          <Link to="/brands">
            <NavLink href="#" active={tab === 'brands'}>
              Brands
            </NavLink>
          </Link>
        </NavLinks>

        <RightSection>
          <Link to="/cart">
            <CartButton>
              <CartIcon size={20} />
            </CartButton>
          </Link>
          <Link to="/profile">
            <UserIcon size={24} />
          </Link>
        </RightSection>

        <MobileMenuButton onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </Container>

      <MobileMenu isOpen={isOpen}>
        <MobileLink to="/">
          <MobileNavLink href="#" active={true}>
            Home
          </MobileNavLink>
        </MobileLink>
        <MobileNavLink href="#">Women</MobileNavLink>
        <MobileNavLink href="/men">Men</MobileNavLink>
        <MobileNavLink href="#">Kids</MobileNavLink>
        <MobileNavLink href="#">Brands</MobileNavLink>

        <MobileButtons>
          <Link to="/cart">
            <MobileCartButton>
              <CartIcon size={20} /> Cart
            </MobileCartButton>
          </Link>
          <Link to="/profile">
            <MobileLoginButton>
              <UserIcon size={20} /> Profile
            </MobileLoginButton>
          </Link>
        </MobileButtons>
      </MobileMenu>
    </Nav>
  );
};

export default Navbar;
