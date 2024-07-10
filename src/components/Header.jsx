import React from "react";
import Image from "../assets/y.jpg";
import "./Header.css";

const App = () => {
  return (
    <>
      <div className='Header'>
        <img src={Image} alt='' />
        <ul>
          <li>Home</li>
          <li>About us</li>
          <li>Products</li>
          <li>Contact us</li>
        </ul>
      </div>
    </>
  );
};

export default App;
