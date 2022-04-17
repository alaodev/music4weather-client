import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background-color: transparent;
  border: 2px solid #FFFFFF;
  border-radius: 25px;
  color: #FFFFFF;
  font-weight: bold;
  height: 50px;
  margin: 10px 0;
  ${props => props.disabled ? 'opacity: .5' : ''};
  transition: .2s;
  width: 100%;

  &:hover {
    background-color: #FFFFFF;
    color: #000000;
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  }
`; 