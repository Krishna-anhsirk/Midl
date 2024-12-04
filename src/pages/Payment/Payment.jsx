import React, { useState } from 'react';
import styled from 'styled-components';
import { CreditCard } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Root = styled.div`
  display: flex;
  justify-content: center;
`;

const Note = styled.div`
  color: green;
  font-size: 0.8em;
  margin-bottom: 1.5rem;
  font-style: italic;
`;

const Card = styled.div`
  margin-top: 5rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 24px;
  width: 100%;
  max-width: 400px;
`;

const CardHeader = styled.div`
  margin-bottom: 24px;
`;

const CardTitle = styled.h2`
  color: #333;
  font-size: 24px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 8px 0;
`;

const CardDescription = styled.p`
  color: #333;
  opacity: 0.7;
  font-size: 14px;
  margin: 0;
`;

const FormGroup = styled.div`
  margin-bottom: 16px;
`;

const Label = styled.label`
  display: block;
  color: #333;
  font-size: 14px;
  margin-bottom: 4px;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 4px;
  font-size: 16px;
  color: #333;

  &:focus {
    outline: none;
    border-color: #333;
  }

  ${(props) =>
    props.error &&
    `
    border-color: #ff0000;
    background-color: #fff0f0;
  `}
`;

const InputGroup = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #333;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(51, 51, 51, 0.9);
  }

  &:disabled {
    background-color: #999;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.span`
  color: #ff0000;
  font-size: 12px;
  margin-top: 4px;
  display: block;
`;

const Payment = ({ tag }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.cardName.trim()) {
      newErrors.cardName = 'Name on card is required';
    }

    if (!formData.cardNumber.trim()) {
      newErrors.cardNumber = 'Card number is required';
    } else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!formData.expiryDate.trim()) {
      newErrors.expiryDate = 'Expiry date is required';
    } else if (!/^\d{2}\/\d{2}$/.test(formData.expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date (MM/YY)';
    } else {
      const [month, year] = formData.expiryDate.split('/');
      const expiryDate = new Date(2000 + parseInt(year), parseInt(month) - 1);
      const currentDate = new Date();
      if (expiryDate <= currentDate) {
        newErrors.expiryDate = 'Card has expired';
      }
    }

    if (!formData.cvv.trim()) {
      newErrors.cvv = 'CVV is required';
    } else if (!/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleKeyPress = (event) => {
    const { name, value } = event.target;
    const key = event.key;

    if (name === 'cardNumber' || name === 'cvv') {
      if (!/\d/.test(key)) {
        event.preventDefault();
      }
    } else if (name === 'expiryDate') {
      if (!/\d/.test(key) && key !== '/') {
        event.preventDefault();
      }
      if (key === '/' && value.length !== 2) {
        event.preventDefault();
      }
      if (value.length === 2 && key !== '/' && !value.includes('/')) {
        event.target.value += '/';
      }
    }
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      // Add payment processing logic here
      navigate('/transactionProcessing');
      console.log('Payment submitted', formData);
    } else {
      console.log('Form validation failed');
    }
  };

  return (
    <Root>
      <Card>
        <CardHeader>
          {tag === 'try' && (
            <Note>
              Note: You won&apos;t be charged immediately. This is a pending
              transaction which will be placed on your card.
            </Note>
          )}
          <CardTitle>
            <CreditCard size={24} />
            Payment Details
          </CardTitle>
          <CardDescription>
            Enter your card information to complete the payment.
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="cardName">Name on Card</Label>
            <Input
              id="cardName"
              name="cardName"
              placeholder="John Doe"
              value={formData.cardName}
              onChange={handleInputChange}
              error={errors.cardName}
            />
            {errors.cardName && <ErrorMessage>{errors.cardName}</ErrorMessage>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="cardNumber">Card Number</Label>
            <Input
              id="cardNumber"
              name="cardNumber"
              placeholder="1234 5678 9012 3456"
              value={formatCardNumber(formData.cardNumber)}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              maxLength={19}
              error={errors.cardNumber}
            />
            {errors.cardNumber && (
              <ErrorMessage>{errors.cardNumber}</ErrorMessage>
            )}
          </FormGroup>
          <InputGroup>
            <FormGroup>
              <Label htmlFor="expiryDate">Expiry Date</Label>
              <Input
                id="expiryDate"
                name="expiryDate"
                placeholder="MM/YY"
                value={formData.expiryDate}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                maxLength={5}
                error={errors.expiryDate}
              />
              {errors.expiryDate && (
                <ErrorMessage>{errors.expiryDate}</ErrorMessage>
              )}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="cvv">CVV</Label>
              <Input
                id="cvv"
                name="cvv"
                placeholder="1234"
                value={formData.cvv}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                maxLength={4}
                error={errors.cvv}
              />
              {errors.cvv && <ErrorMessage>{errors.cvv}</ErrorMessage>}
            </FormGroup>
          </InputGroup>
          <Button type="submit">Proceed </Button>
        </form>
      </Card>
    </Root>
  );
};

export default Payment;
