import styled from 'styled-components';

export const PlaylistItemContainer = styled.div`
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  margin: 15px; 10px;
  padding: 5px;
`;

export const PlaylistItemImage = styled.img`
  border-radius: 10px;
  height: 100px;
  margin-right: 15px;
  width: 100px;
`;

export const PlaylistItemInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow-y: auto;
  width: 100%;
`;

export const PlaylistItemTitle = styled.strong`
  margin-bottom: 5px;
`;

export const PlaylistItemArtist = styled.sub`
`;