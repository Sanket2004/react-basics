import React from "react";

export default function MenuCard({ image, title, desciption, rating, price }) {
  return (
    <div className="menu">
      <img src={image} alt={title} />
      <h1 className="header">{title}</h1>
      <p className="desc">{desciption}</p>
      <hr />
      <div className="footer">
        <div className="rating" data-rating={rating} />
        <div className="price">₹ {price}</div>
      </div>
    </div>
  );
}
