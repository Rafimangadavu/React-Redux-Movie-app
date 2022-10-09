import React from 'react';
import "../../styles/Footer.css";

const day = new Date();
const year = day.getFullYear();

const Footer = () => {
  return (
    <footer className="footer">
      <div>Movie App</div>
      <div>{`0${year}`} Movie, Inc. or its affiliates</div>
    </footer>
  )
}

export default Footer