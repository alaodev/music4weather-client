import Home from './pages/Home';

import { PlaylistProvider } from './providers/playlist';

const App = () => {
  return (
    <PlaylistProvider>
      <Home />
    </PlaylistProvider>
  )
}

export default App;
