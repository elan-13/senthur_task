import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Welcome />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App; 