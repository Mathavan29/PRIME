import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className="home-container">
      <Navbar />
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to PRIME PROPS</h1>
          <h2>Your journey to the perfect home starts here.</h2>
          <p>Find your dream house with ease.</p>
          <Link to="/buy" className="cta-button">Start Your Journey</Link>
        </div>
        <div className="hero-image">
          <img src="PRIME.png" alt="Hero" />
        </div>
      </header>

      <section className="about-section">
        <h2>About Us</h2>
        <p>
          At PRIME PROPS, we believe that everyone deserves a place to call home.
          Our mission is to connect people with their ideal properties, ensuring a seamless experience from start to finish.
        </p>
        <p>
          Join thousands of satisfied customers who have found their perfect home
          with PRIME PROPS. Let us help you make your real estate dreams a reality!
        </p>
      </section>

      <section className="featured-properties-section">
        <h2>Featured Properties</h2>
        <div className="property-card-container">
          <div className="property-card">
            <img src="house30.jpg" alt="Modern Family Home" />
            <h3>Modern Family Home</h3>
            <p>$500,000</p>
            <Link to="/modern-family-home" className="cta-button">View Details</Link>
          </div>
          <div className="property-card">
            <img src="house23.jpg" alt="Luxury Apartment" />
            <h3>Luxury Apartment</h3>
            <p>$750,000</p>
            <Link to="/luxury-apartment" className="cta-button">View Details</Link>
          </div>
          {/* Add more property cards as needed */}
        </div>
      </section>

      <section className="cta-urgent-section">
        <h2>Exclusive Offers</h2>
        <p>Sign up today and receive exclusive listings and early access to new properties!</p>
        <Link to="/signup" className="cta-button">Get Started</Link>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
