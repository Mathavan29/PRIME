import React from 'react';
import './AboutPage.css';
import Navbar from './Navbar';
import Footer from './Footer';

const AboutPage = () => {
  return (
    <div>
      <Navbar /> {/* Ensure the Navbar is included at the top */}
      <div className="about-container">
          <h1 className="about-title">About Us</h1>
          <p className="about-description">
              Welcome to EstateFlow, your number one source for all things related to house planning. 
              We're dedicated to providing you the very best of house designs, with an emphasis on 
              reliability, customer service, and uniqueness.
          </p>
          
          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-description">
              Our mission is to simplify the process of house planning by offering comprehensive 
              resources and support to our clients. We strive to make your dream home a reality.
          </p>
          
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-description">
              We envision a world where everyone can access affordable and innovative house designs 
              that cater to their individual needs and preferences.
          </p>

          <h2 className="about-subtitle">Our Values</h2>
          <p className="about-description">
              At EstateFlow, we value integrity, creativity, and collaboration. Our team is committed to 
              upholding these principles in every project we undertake. We believe that a strong foundation 
              of trust leads to successful partnerships with our clients and stakeholders.
          </p>

          <h2 className="about-subtitle">Our Commitment to Customers</h2>
          <p className="about-description">
              Customer satisfaction is our top priority. We take the time to understand your vision and 
              work closely with you throughout the entire planning process. Our goal is to ensure that 
              you feel supported and informed every step of the way.
          </p>

          <h2 className="about-subtitle">Sustainability Practices</h2>
          <p className="about-description">
              We are committed to sustainable building practices. Our designs incorporate energy-efficient 
              solutions and eco-friendly materials to minimize environmental impact and promote a healthier 
              lifestyle for our clients.
          </p>

          <h2 className="about-subtitle">Get in Touch</h2>
          <p className="about-description">
              We would love to hear from you! If you have any questions or would like to discuss your 
              house planning needs, please feel free to contact us through our website or social media.
          </p>
      </div>
      <Footer /> {/* Footer should be placed outside of the about-container */}
    </div>
  );
};

export default AboutPage;
