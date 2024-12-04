import React from 'react';
import styled, { keyframes } from 'styled-components';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(51, 51, 51, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(51, 51, 51, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(51, 51, 51, 0);
  }
`;

const AvatarContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  animation: ${pulse} 2s infinite;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const UserAvatar = ({ src, alt }) => (
  <AvatarContainer>
    <AvatarImage src={src} alt={alt} />
  </AvatarContainer>
);

export default UserAvatar;
