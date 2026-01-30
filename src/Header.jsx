import React from 'react';

export default function Header({ onNavigate, refs }) {
  return (
    <header className="decorative-border">
      <img 
        className="logo" 
        alt="logo" 
        src="https://www.dropbox.com/scl/fi/77r5s4l93kxj8ee022hwh/logo.png?rlkey=4mfbqhxmid35jkybv0af0bo4i&raw=1" 
      />
      <nav>
        <button className="nav-button" onClick={() => onNavigate(refs.aboutRef)}>About</button>
        <button className="nav-button" onClick={() => onNavigate(refs.servicesRef)}>Services</button>
        <button className="nav-button" onClick={() => onNavigate(refs.contactRef)}>Contact</button>
      </nav>
    </header>
  );
}