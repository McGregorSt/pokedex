import React from 'react';

import './App.css';
import PokeDisplay from './PokeDisplay/PokeDisplay';
import PokeFilter from './PokeFilter/PokeFilter';


function App() {
  
  return (
    <div className="App">
      <PokeFilter />
      <PokeDisplay />
    </div>
  );
}

export default App;
