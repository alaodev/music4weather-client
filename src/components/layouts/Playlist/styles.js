import styled from 'styled-components';

export const PlaylistContainer = styled.div`
  ${props => props.empty ? 'align-items: center' : ''};
  background-color: rgba(255, 255, 255, .1);
  border-radius: 10px;
  ${props => props.empty ? 'display: flex' : ''};
  height: 450px;
  ${props => props.empty ? 'justify-content: center' : ''};
  overflow-y: scroll;
  width: 450px;
`;

export const EmptyMessage = styled.strong`
  color: #FFFFFF;
  font-size: 24px;
`;