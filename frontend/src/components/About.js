import React from 'react';

const About = () => {
  // Placeholder image URLs (using placeholder.com for demo purposes)
  const placeholderImages = [
    'https://via.placeholder.com/300x200?text=Our+Team',
    'https://via.placeholder.com/300x200?text=Our+Lab',
    'https://via.placeholder.com/300x200?text=Natural+Ingredients',
    'https://via.placeholder.com/300x200?text=Shea+Butter',
    'https://via.placeholder.com/300x200?text=AI+Technology'
  ];

  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to SmartShea, where cutting-edge AI technology meets natural skincare. We're dedicated to helping
        you understand your skin better and find the perfect shea butter products for your unique needs.
      </p>
      
      <div className="image-gallery">
        {placeholderImages.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`About us ${index + 1}`} />
          </div>
        ))}
      </div>
      
      <h2 className="subheading">Our Story</h2>
      <p>
        Founded with a vision to revolutionize skincare, SmartShea is an AI-powered business that combines
        the ancient wisdom of natural shea butter with modern technology. Our journey began when we discovered
        the incredible benefits of naturally sourced shea butter and wanted to make these benefits accessible
        to everyone with personalized recommendations.
      </p>
      <p>
        Our AI skin analyzer is the heart of our business. This cutting-edge technology can accurately determine
        your skin type from just a photo and recommend the perfect shea butter product formulation for your
        specific needs. We've trained our AI on thousands of skin samples to ensure it provides the most
        accurate analysis possible.
      </p>
      <p>
        All our shea butter products are ethically sourced from West Africa, where we work directly with
        local communities to ensure fair trade practices. We believe in sustainability and transparency
        throughout our supply chain, from harvesting to the final product that reaches your hands.
      </p>
      <p>
        At SmartShea, we're not just selling skincare products – we're offering a personalized skincare
        experience powered by AI that connects you with the natural healing properties of shea butter
        that's perfect for your unique skin.
      </p>
    </div>
  );
};

export default About;