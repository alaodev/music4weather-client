import React from "react";

import { 
  SelectContainer,
  SelectLabel,
  SelectStyled,
} from "./styles";

const Select = ({
  items = [],
  itemsLabel,
  itemsValue = null,
  label,
  ...rest
}) => {
  return (
    <SelectContainer>
      <SelectLabel>{label}</SelectLabel>
      <SelectStyled {...rest}>
      {
        items.length && items.map((item, index) => {
          return (
            <option 
              key={index}
              label={item[itemsLabel]}
              value={index}
            />
          );
        })
      }
      </SelectStyled>
    </SelectContainer>
  );
}

export default Select;