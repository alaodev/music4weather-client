import React from "react";

import { 
  InputContainer,
  InputLabel,
  InputStyled,
} from "./styles";

const Input = ({ 
  label,
  ...rest
}) => {
  return (
    <InputContainer>
      <InputLabel>{label}</InputLabel>
      <InputStyled {...rest} />
    </InputContainer>
  );
}

export default Input;