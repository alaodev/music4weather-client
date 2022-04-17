import React, { useContext, useEffect } from 'react';

import { PlaylistContext } from '../../../providers/playlist';

import PlaylistItem from '../PlaylistItem';

import { 
  PlaylistContainer,
  EmptyMessage
} from "./styles"; 
 
const Playlist = () => {
  const { playlist } = useContext(PlaylistContext);

  useEffect(() => {
    console.log(playlist.length)
  }, [playlist])

  return (
    <PlaylistContainer
      empty={!playlist.length}
    >
      {
        playlist.length  ? 
        (
          playlist.map(music => {
            return (
              <PlaylistItem
                artist={music.track.artists[0].name}
                name={music.track.name}
                albumImage={music.track.album.images[0].url}
              />
            );
          })
        ) :
        (
          <EmptyMessage>Nenhuma música</EmptyMessage>
        )
      }
    </PlaylistContainer>
  );
}

export default Playlist;