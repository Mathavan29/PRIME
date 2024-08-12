import React from 'react';
import { Link } from 'react-router-dom';
import './PropertyPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const LuxuryApartmentPage = () => {
  return (
    <div className="property-container">
      <Navbar />
      <div className="property-header">
        <h1>Luxury Apartment</h1>
        <p className="price">$750,000</p>
      </div>
      <div className="property-image">
        <img src="house23.jpg" alt="Luxury Apartment" />
      </div>

      <section className="property-details">
        <h2>Property Details</h2>
        <p>
          Experience upscale living in this luxurious apartment, located in the heart of the city.
          This modern unit boasts high-end finishes and breathtaking views, making it an ideal choice for urban living.
        </p>
        <ul className="features-list">
          <li><strong>Bedrooms:</strong> 3</li>
          <li><strong>Bathrooms:</strong> 2</li>
          <li><strong>Square Footage:</strong> 1,800 sq. ft.</li>
          <li><strong>Balcony:</strong> Yes</li>
          <li><strong>Year Built:</strong> 2022</li>
        </ul>
      </section>

      <section className="property-description">
        <h2>Description</h2>
        <p>
          This apartment features an open-concept living space, complete with floor-to-ceiling windows 
          that flood the unit with natural light. The gourmet kitchen is equipped with top-of-the-line appliances, 
          quartz countertops, and a spacious island perfect for entertaining.
        </p>
        <p>
          Enjoy access to a range of amenities, including a fitness center, rooftop terrace, and concierge service.
          Located steps away from dining, shopping, and entertainment, this luxury apartment is perfect for those seeking 
          an upscale urban lifestyle.
        </p>
      </section>

      <section className="contact-agent">
        <h2>Contact Our Agent</h2>
        <p>If you have any questions or would like to schedule a viewing, please contact:</p>
        <p><strong>John Smith</strong></p>
        <p>Email: john.smith@example.com</p>
        <p>Phone: (987) 654-3210</p>
        <Link to="/contact" className="cta-button">Contact Us</Link>
      </section>

      <Footer />
    </div>
  );
};

export default LuxuryApartmentPage;
