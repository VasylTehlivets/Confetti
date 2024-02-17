// import React from "react";
// import "./Reviews.css";
// import user from "../../assets/tag-user.svg";
// import Slider from "../Slider/Slider";

// const Reviews = () => {
//   return (
//     <div id="review" className="">
//       <h2 className="name">Recenzje</h2>
//       <Slider />
//       <div className="review">
//         <p className="reviewDescr">
//           Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
//           <br />
//           ustawili te stoły 🥰 ale sam <br />
//           klimat i dekoracja robiła <br /> meegaaa wrażenie!
//         </p>
//         <div className="tagUser">
//           <img src={user} alt="tag-user" />
//           <h3 className="reviewName">Aleksandra Murawska</h3>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;

import React, { useState } from "react";
import "./Reviews.css";
import user1 from "../../assets/tag-user.svg";
import user2 from "../../assets/tag-user.svg";

const Reviews = () => {
  const [activeSlide, setActiveSlide] = useState(1); // початковий активний слайд

  // Функція для зміни активного слайда
  const changeSlide = (newSlide) => {
    setActiveSlide(newSlide); // змінюємо активний слайд
  };

  return (
    <div id="review" className="">
      <h2 className="name">Recenzje</h2>

      {/* Слайдер */}
      <div className="slider">
        {/* Перший слайд */}
        {activeSlide === 1 && (
          <div className="slide">
            <img src={user1} alt="user-1" />
            <p className="reviewDescr">
              Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
              <br />
              ustawili te stoły 🥰 ale sam <br />
              klimat i dekoracja robiła <br /> meegaaa wrażenie!
            </p>
            <div className="tagUser">
              <h3 className="reviewName">Aleksandra Murawska</h3>
            </div>
          </div>
        )}

        {/* Другий слайд */}
        {activeSlide === 2 && (
          <div className="slide">
            <img src={user2} alt="user-2" />
            <p className="reviewDescr">Інший відгук тут...</p>
            <div className="tagUser">
              <h3 className="reviewName">Ім'я користувача</h3>
            </div>
          </div>
        )}
      </div>

      {/* Пагінація */}
      <div className="pagination">
        <button onClick={() => changeSlide(1)}>1</button>
        <button onClick={() => changeSlide(2)}>2</button>
        {/* Додайте кнопки для більшої кількості слайдів */}
      </div>
    </div>
  );
};

export default Reviews;
