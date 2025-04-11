import React from 'react';
import '../styles/Brands.css';

const Brands = () => {
  const brandData = [
    {
      id: 'ponnusamy',
      name: 'Ponnusamy',
      description: 'Authentic South Indian cuisine with a legacy of flavors.',
    },
    {
      id: 'cheap-best',
      name: 'CHEAP & BEST',
      description: 'Affordable grooming services tailored for men.',
    },
    {
      id: 'sultans',
      name: "Sultan's Biryani",
      description: "Royal biryani crafted with premium ingredients for every occasion.",
    },
    {
      id: 'jonahs',
      name: "Jonah's Bistro",
      description: "Fusion cuisine and continental delights in a cozy ambiance.",
    },
    {
      id: 'fx',
      name: 'FX',
      description: 'A one-stop destination for fashion and lifestyle needs.',
    },
    {
      id: 'slam',
      name: 'SLAM',
      description: 'Dynamic sportswear and accessories for active lifestyles.',
    },
  ];

  return (
    <section className="brands">
      <div className="brands-bg">
        <h2 className="section-title">Brands We Operate</h2>
        
        <div className="brands-container">
          {brandData.map((brand) => (
            <div className="brand-card" key={brand.id}>
              <div className="brand-logo" id={brand.id}></div>
              <div className="divider"></div>
              <p className="brand-description">{brand.description}</p>
              <div className="know-more gradient-text">KNOW MORE</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;