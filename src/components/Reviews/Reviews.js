import React from "react";
import "./Reviews.css";
import user from "../../assets/tag-user.svg";

const Reviews = () => {
  return (
    <div id="review" className="">
      <h2 className="name">Recenzje</h2>
      <div className="review">
        <p className="reviewDescr">
          Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
          <br />
          ustawili te stoły 🥰 ale sam <br />
          klimat i dekoracja robiła <br /> meegaaa wrażenie! 
        </p>
        <div className="tagUser">
          <img src={user} alt="tag-user" />
          <h3 className="reviewName">Aleksandra Murawska</h3>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
