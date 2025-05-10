import React from "react";
import MenuCard from "../components/MenuCard";

export default function Menu() {
  const items = [
    {
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg",
      title: "Mutton Biriyani",
      desciption: "Traditional Kolkata Mutton Biriyani with blend of spices.",
      rating: "5",
      price: "250",
    },
    {
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg",
      title: "Chicken Biriyani",
      desciption: "Traditional Kolkata Chicken Biriyani with blend of spices.",
      rating: "4",
      price: "200",
    },
    {
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg",
      title: "Lucknow Biriyani",
      desciption: "Traditional Lucknow Mutton Biriyani with blend of spices.",
      rating: "3",
      price: "300",
    },
    {
      image:
        "https://www.licious.in/blog/wp-content/uploads/2020/12/Mutton-Biryani.jpg",
      title: "Hyderabadi Biriyani",
      desciption:
        "Traditional Hyderabadi Mutton Biriyani with blend of spices.",
      rating: "5",
      price: "350",
    },
  ];

  return (
    <section className="menu-page">
      <h1>Menu</h1>
      <div className="menu-container">
        {items.map((item) => {
          return <MenuCard {...item} />;
        })}
      </div>
    </section>
  );
}
