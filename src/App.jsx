import React, { useRef } from 'react';
import Header from './Header';
import Main from './Home';
import Footer from './Footer';
import './App.css';

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };

  return (
    <div className="container">
      <Header 
        onNavigate={scrollToSection} 
        refs={{ aboutRef, servicesRef, contactRef }} 
      />
      <Main 
        aboutRef={aboutRef} 
        servicesRef={servicesRef} 
      />
      <Footer contactRef={contactRef} />
    </div>
  );
}

export default App;