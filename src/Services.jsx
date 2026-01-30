import React from 'react';
import ServiceItem from './ServiceItem';

const serviceData = [
  {
    id: 1,
    title: "Bathing",
    desc: "We use professional grade product for a very thorough and clean everywhere including teeth, privates, and anywhere else that tend to cause odors.",
    hasIcon: true,
    price: "$45+"
  },
  {
    id: 2,
    title: "Haircuts",
    desc: "Check out our guide to cute and practical dog grooming styles such as Puppy cut, Summer cut, Teddy bear cut, Lion cut, Top knot, and more.",
    hasIcon: true,
    price: "$60+"
  },
  {
    id: 3,
    title: "Nails",
    desc: "Nail trimming is an essential part of dog grooming, and trim nails are one clear sign of your dog's good health and hygiene.",
    hasIcon: false,
    price: "$15"
  }
];

export default function Services({ servicesRef }) {
  return (
    <section className="services decorative-border" ref={servicesRef}>
      <div className="corner-border">
        <h2>
          <span className="icon-before-after"></span>
          <span className="text">Services</span>
          <span className="icon-before-after"></span>
        </h2>
        
        <span className="horizontal-timeline">
          <hr />
          <span className="arrow-down"></span>
        </span>

        {serviceData.map((service) => (
          <ServiceItem 
            key={service.id} 
            title={service.title} 
            description={service.desc} 
            showIcon={service.hasIcon}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
}