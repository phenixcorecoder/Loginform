import React, { useState } from 'react';
import './Hamburgermenu.css';

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='menul'>
      <button  onClick={() => setIsOpen(!isOpen)}>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
        <span className={`hamburger-line ${isOpen ? 'open' : ''}`}></span>
      </button>
    </div>
  );
}

export default HamburgerMenu;