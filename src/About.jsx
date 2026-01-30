import React from 'react';

export default function About({ aboutRef }) {
  return (
    <section className="about" ref={aboutRef}>
      <div className="corner-border">
        <p>
          Keep your furry friend looking and feeling their best with Paw Spa! 
          Our experienced and caring pet groomers provide a wide range of services, 
          including bathing, haircuts, nail trimming, and ear cleaning.
          <br /><br />
          We use only the highest quality grooming products to ensure your pet looks and feels their best.
        </p>
      </div>
      <figure>
        <img 
          alt="dog standing up" 
          src="https://www.dropbox.com/scl/fi/qgoo3u868kbxxyvnq6q3y/dog01.png?rlkey=22q9105br409b1brbedgzyu7h&raw=1" 
        />
      </figure>
    </section>
  );
}