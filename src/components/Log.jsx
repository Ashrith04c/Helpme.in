import React from 'react';
import './wel.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Wel = () => {
  return (
    <div className="welcome-container">
      <h1 className="typing-text">Hello</h1>
      <h2 className="typing-delay"> Ambur</h2>
      <button className="circle-button">
       <i className="fa-solid fa-chevron-right"></i>
      </button>
      <p className="get-started">Get Started</p>
    </div>
  );
};

export default Wel;
