import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Welcome from './components/Welcome';
import Brands from './components/Brands';
import BusinessOpportunity from './components/BusinessOpportunity';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Welcome />
      <Brands />
      <BusinessOpportunity />
      <Footer />
    </div>
  );
}

export default App; 