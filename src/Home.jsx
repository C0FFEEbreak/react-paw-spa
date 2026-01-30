import React from 'react';
import About from './About';
import Services from './Services';

export default function Main({ aboutRef, servicesRef }) {
  return (
    <main>
      <About aboutRef={aboutRef} />
      <Services servicesRef={servicesRef} />
      <section className="photo">
        <figure>
          <img 
            alt="different breed of dogs" 
            src="https://www.dropbox.com/scl/fi/uzcw9q1l8vtbqd4lf8a9j/dogs01.png?rlkey=vfkle3ekilvyxim401gembp72&raw=1" 
          />
        </figure>
      </section>
    </main>
  );
}