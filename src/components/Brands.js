import React from 'react';
import '../styles/Brands.css';

const Brands = () => {
  const brandData = [
    {
      id: 'ponnusamy',
      name: 'Ponnusamy',
      description: 'Dive into a culinary journey with Ponnusamy, where traditional flavors meet unmatched quality. Relish the essence of South Indian heritage on your plate.',
    },
    {
      id: 'cheap-best',
      name: 'CHEAP & BEST',
      description: 'Redefining grooming for men, Cheap and Best offers top-notch salon services at unbeatable prices. Get styled by professionals who understand your needs.',
    },
    {
      id: 'sultans',
      name: "Sultan's Biryani",
      description: "Savor the rich taste of Sultan's Biryani, crafted with the finest ingredients and a royal touch. A dish fit for every occasion, it's more than just biryani – it's an experience.",
    },
    {
      id: 'jonahs',
      name: "Jonah's Bistro",
      description: "From continental delicacies to fusion delights, Jonah's Bistro is the perfect spot to unwind and indulge. Great food, great ambiance, and even better memories.",
    },
    {
      id: 'fx',
      name: 'FX',
      description: 'Elevate your shopping experience with FX, bringing you the best in fashion, lifestyle, and innovation under one roof.',
    },
    {
      id: 'slam',
      name: 'SLAM',
      description: 'Dive into a culinary journey with Ponnusamy, where traditional flavors meet unmatched quality. Relish the essence of South Indian heritage on your plate.',
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