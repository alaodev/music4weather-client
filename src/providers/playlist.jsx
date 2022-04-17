import React, { useState, createContext } from 'react';

export const PlaylistContext = createContext({});

export const PlaylistProvider = (props) => {
  const [playlist, setPlaylist] = useState([]);
  const [temperature, setTemperature] = useState(null);

  return (
    <PlaylistContext.Provider value={{playlist, setPlaylist, temperature, setTemperature}}>
      {props.children}
    </PlaylistContext.Provider>
  )
}