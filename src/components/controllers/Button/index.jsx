import React from 'react';

import { Spinner } from 'react-bootstrap';

import { 
  ButtonContainer
} from "./styles";

const Button = ({
  isLoading = false,
  title, 
  ...rest 
}) => {
  return (
    <ButtonContainer
      disabled={isLoading}
      {...rest}
    >
      {
        isLoading ? <Spinner animation="grow" size="sm" /> : title
      }
      
    </ButtonContainer>
  );
}

export default Button;