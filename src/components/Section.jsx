import React from "react";
import "./Section.css";

const Section = () => {
  const items = [
    { title: "Card 1", description: "This is the description for Card 1." },
    { title: "Card 2", description: "This is the description for Card 2." },
    { title: "Card 3", description: "This is the description for Card 3." },
  ];

  return (
    <div className='section-container'>
      {items.map((item, index) => (
        <div key={index} className='card'>
          <div className='second'>
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;
6