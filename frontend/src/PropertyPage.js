import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const PropertyPage = () => {
  return (
    <div className="property-container">
      <Navbar />
      <div className="property-header">
        <h1>Modern Family Home</h1>
        <p className="price">$500,000</p>
      </div>
      <div className="property-image">
        <img src="house30.jpg" alt="Modern Family Home" />
      </div>
      
      <section className="property-details">
        <h2>Property Details</h2>
        <p>
          This stunning modern family home offers spacious living with a contemporary design. 
          Located in a peaceful neighborhood, it features an open-plan layout, perfect for family gatherings.
        </p>
        <ul className="features-list">
          <li><strong>Bedrooms:</strong> 4</li>
          <li><strong>Bathrooms:</strong> 3</li>
          <li><strong>Square Footage:</strong> 2,500 sq. ft.</li>
          <li><strong>Lot Size:</strong> 0.25 acres</li>
          <li><strong>Year Built:</strong> 2020</li>
        </ul>
      </section>

      <section className="property-description">
        <h2>Description</h2>
        <p>
          Enjoy the comfort of a spacious living room with large windows that provide abundant natural light. 
          The kitchen features modern appliances, granite countertops, and a large island, perfect for meal prep or casual dining.
        </p>
        <p>
          The backyard offers a beautiful outdoor space with a patio area, ideal for summer barbecues and relaxation.
          With close proximity to schools, parks, and shopping, this property is perfect for families seeking convenience and quality living.
        </p>
      </section>

      <section className="contact-agent">
        <h2>Contact Our Agent</h2>
        <p>If you have any questions or would like to schedule a viewing, please contact:</p>
        <p><strong>Jane Doe</strong></p>
        <p>Email: jane.doe@example.com</p>
        <p>Phone: (123) 456-7890</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyPage;
