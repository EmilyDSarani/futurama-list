import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import App from './App';
import { CharacterProvider } from './context/CharacterContext';

render(
  <React.StrictMode>
    <CharacterProvider>
    <Router>
    <App />
    </Router>
    </CharacterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
