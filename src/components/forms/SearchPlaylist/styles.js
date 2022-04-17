import styled from 'styled-components';

import {
  Tabs,
} from "react-bootstrap";

export const SearchPlaylistContainer = styled.div`
  background-color: rgba(255, 255, 255, .1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  height: 450px;
  justify-content: space-between;
  padding: 15px;
  width: 350px;
`;

export const TabsStyled = styled(Tabs)`
  & > .nav-item > button {
    background-color: #FFFFFF;
    color: #000000;
    margin: 0 10px;
  }

  & > .nav-item > button.active {
    background-color: #000000;
    color: #FFFFFF;
    transition: .2s;
    transform: scale(1.2);
  }
`;