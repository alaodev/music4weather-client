import React from 'react';

import { 
  PlaylistItemContainer,
  PlaylistItemImage,
  PlaylistItemInfoContainer,
  PlaylistItemTitle,
  PlaylistItemArtist
} from "./styles"; 
 
const PlaylistItem = ({
  name,
  artist,
  albumImage
}) => {
  console.log(albumImage)
  return (
    <PlaylistItemContainer>
      <PlaylistItemImage src={albumImage} />
      <PlaylistItemInfoContainer>
        <PlaylistItemTitle>{name}</PlaylistItemTitle>
        <PlaylistItemArtist>{artist}</PlaylistItemArtist>
      </PlaylistItemInfoContainer>
    </PlaylistItemContainer>
  );
}

export default PlaylistItem;