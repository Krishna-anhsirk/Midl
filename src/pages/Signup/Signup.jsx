import Layout from '../../components/Layout/Layout';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Eye, EyeOff } from 'lucide-react'; // Importing Lucide icons
import { useLocation } from 'react-router-dom';

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 1rem;
  padding-top: 2rem;
  margin-top: 4rem;
`;

const SignupForm = styled.form`
  background-color: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  font-weight: 600;
  color: #333;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;

  &:last-of-type {
    margin-bottom: 2rem;
  }
`;

const Row = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.1rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  outline: none;
  background-color: #f8f8f8;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;

  .eye-icon {
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    cursor: pointer;
    color: #333;

    &:hover {
      color: #000;
    }
  }
`;

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 0.9rem 1.1rem;
  font-size: 1rem;
  font-weight: 500;
  color: #fff;
  background-color: #333;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #000;
  }
`;

const Note = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-size: 0.9rem;
  color: #555;

  a {
    color: #333;
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }
`;

const Signup = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [pathname]);

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
    console.log('Form Submitted', formValues);
  };

  return (
    <Layout>
      <SignupContainer>
        <SignupForm onSubmit={handleSubmit}>
          <FormTitle>Sign Up</FormTitle>
          <Row>
            <FormGroup>
              <Input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formValues.firstName}
                onChange={handleChange}
                required
              />
            </FormGroup>
            <FormGroup>
              <Input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleChange}
                required
              />
            </FormGroup>
          </Row>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <InputWrapper>
              <Input
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </InputWrapper>
          </FormGroup>
          <FormGroup>
            <InputWrapper>
              <Input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required
              />
              <span
                className="eye-icon"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </InputWrapper>
          </FormGroup>
          <SubmitButton type="submit">Sign Up</SubmitButton>
          <Note>
            Already have an account? <a href="/login">Log In</a>
          </Note>
        </SignupForm>
      </SignupContainer>
    </Layout>
  );
};

export default Signup;
