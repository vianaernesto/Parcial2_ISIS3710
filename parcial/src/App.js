import React from 'react';
import Movies from './components/movies';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <img src="https://i.ibb.co/BKthLSp/camara-de-video.png" height="50" width="50" alt="camara-de-video" border="0"/>
         <h4>Movies</h4>
        </nav>
      <Movies/>
    </div>
  );
}

export default App;
