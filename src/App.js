import React from 'react';
import './App.css';
import Header from './components/header.js';
import Home from './pages/Index.js';


function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <footer>
        <p>Website by Stephanie Snopek</p>
      </footer>
    </div>
  );
}

export default App;
