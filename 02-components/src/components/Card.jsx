import React from "react";
import sumit from "../assets/sumit.jpg";
const Card = () => {
  return (
    <div className="container">
      <div className="card">
        <h1>Hello this is my card</h1>
        <img src={sumit} alt="" width="100px" height="100px" className="card-img"/>
      </div>
    </div>
  );
};

export default Card;
