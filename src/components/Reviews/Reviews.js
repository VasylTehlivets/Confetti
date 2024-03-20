// import React, { useState } from "react";
// import "./Reviews.css";
// import user1 from "../../assets/tag-user.svg";
// import user2 from "../../assets/tag-user.svg";

// const Reviews = () => {
//   const [activeSlide, setActiveSlide] = useState(1); // початковий активний слайд

//   // Функція для зміни активного слайда
//   const changeSlide = (newSlide) => {
//     setActiveSlide(newSlide); // змінюємо активний слайд
//   };

//   return (
//     <div id="review" className="">
//       <h2 className="name">Recenzje</h2>

//       {/* Слайдер */}
//       <div className="slider">
//         {/* Перший слайд */}
//         {activeSlide === 1 && (
//           <div className="slide">
//             <img src={user1} alt="user-1" />
//             <p className="reviewDescr">
//               Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
//               <br />
//               ustawili te stoły 🥰 ale sam <br />
//               klimat i dekoracja robiła <br /> meegaaa wrażenie!
//             </p>
//             <div className="tagUser">
//               <h3 className="reviewName">Aleksandra Murawska</h3>
//             </div>
//           </div>
//         )}

//         {/* Другий слайд */}
//         {activeSlide === 2 && (
//           <div className="slide">
//             <img src={user2} alt="user-2" />
//             <p className="reviewDescr">Інший відгук тут...</p>
//             <div className="tagUser">
//               <h3 className="reviewName">Ім'я користувача</h3>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Пагінація */}
//       <div className="pagination">
//         <button onClick={() => changeSlide(1)}>1</button>
//         <button onClick={() => changeSlide(2)}>2</button>
//         {/* Додайте кнопки для більшої кількості слайдів */}
//       </div>
//     </div>
//   );
// };

// export default Reviews;
///////////////////////////////////////////////////////////////

import React, { useState } from "react";
import "./Reviews.css";
import user1 from "../../assets/tag-user.svg";
import user2 from "../../assets/tag-user.svg";
import user3 from "../../assets/tag-user.svg";
import user4 from "../../assets/tag-user.svg";

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
            <p className="review-descr">
              Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
              <br />
              ustawili te stoły 🥰 ale sam <br />
              klimat i dekoracja robiła <br /> meegaaa wrażenie!
            </p>
            <div className="tag-user">
              <h3 className="review-name">Aleksandra Murawska</h3>
            </div>
          </div>
        )}

        {/* Другий слайд */}
        {activeSlide === 2 && (
          <div className="slide">
            <p className="review-descr">
              Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
              <br />
              ustawili te stoły 🥰 ale sam <br />
              klimat i dekoracja robiła <br /> meegaaa wrażenie!
            </p>
            <div className="tag-user">
              <h3 className="review-name">Aleksandra Murawska</h3>
            </div>
          </div>
        )}
        {/* Третій слайд */}
        {activeSlide === 3 && (
          <div className="slide">
            <img src={user3} alt="user-3" />
            <p className="review-descr">
              Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
              <br />
              ustawili te stoły 🥰 ale sam <br />
              klimat i dekoracja robiła <br /> meegaaa wrażenie!
            </p>
            <div className="tag-user">
              <h3 className="review-name">Aleksandra Murawska</h3>
            </div>
          </div>
        )}
        {/* Четвертий слайд */}
        {activeSlide === 4 && (
          <div className="slide">
            <img src={user4} alt="user-4" />
            <p className="review-descr">
              Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
              <br />
              ustawili te stoły 🥰 ale sam <br />
              klimat i dekoracja robiła <br /> meegaaa wrażenie!
            </p>
            <div className="tag-user">
              <h3 className="review-name">Aleksandra Murawska</h3>
            </div>
          </div>
        )}
      </div>

      {/* Пагінація */}
      <div className="pagination">
        <button
          className={activeSlide === 1 ? "active" : ""}
          onClick={() => changeSlide(1)}
        ></button>
        <button
          className={activeSlide === 2 ? "active" : ""}
          onClick={() => changeSlide(2)}
        ></button>
        <button
          className={activeSlide === 3 ? "active" : ""}
          onClick={() => changeSlide(3)}
        ></button>
        <button
          className={activeSlide === 4 ? "active" : ""}
          onClick={() => changeSlide(4)}
        ></button>
        {/* Додайте кнопки для більшої кількості слайдів */}
      </div>
    </div>
  );
};

export default Reviews;
