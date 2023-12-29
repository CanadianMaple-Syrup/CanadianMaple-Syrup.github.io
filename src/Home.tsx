import React from 'react';
import logo from './logo.svg';
import ConstructionPopup from './components/specific_components/ConstructionPopup';
import './styles/Home.css';

function Home() {
  return (
    <div className="Home">
      <ConstructionPopup />
      <header className="Home-header">
        <img src={logo} className="Home-logo" alt="logo" />
        <p>
          Edit <code>src/Home.tsx</code> and save to reload.
        </p>
        <a
          className="Home-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Home;
