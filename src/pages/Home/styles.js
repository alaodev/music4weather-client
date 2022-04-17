import styled from 'styled-components';

import { Row } from 'react-bootstrap';

export const HomeContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: calc(100vh - 70px);
  justify-content: center;
  overflow-y: scroll;
  width: 100vw;
`;

export const TemperatureContainer = styled(Row)`
  display: flex;
  margin: 20px 0;
`;

export const TemperatureContent = styled.h3`
  align-self: end;
  color: #FFFFFF;
`;