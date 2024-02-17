import React, { useState } from "react";
import "./Slider.css"; // Стилізуйте ваш слайдер у цьому файлі

function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // Змініть це на загальну кількість слайдів

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="slider">
      {/* Слайди */}
      <div className="slides">
        <div className={`slide ${currentSlide === 0 ? "active" : ""}`}>
          <p className="reviewDescr">
            Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
            <br />
            ustawili te stoły 🥰 ale sam <br />
            klimat i dekoracja robiła <br /> meegaaa wrażenie! 
          </p>
        </div>
        <div className={`slide ${currentSlide === 1 ? "active" : ""}`}>
          <p className="reviewDescr">
            Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
            <br />
            ustawili te stoły 🥰 ale sam <br />
            klimat i dekoracja robiła <br /> meegaaa wrażenie! 
          </p>
        </div>
        <div className={`slide ${currentSlide === 2 ? "active" : ""}`}>
          <p className="reviewDescr">
            Jeszcze raz wielkie dzięki! <br /> Ciężko nam było foty robić jak
            <br />
            ustawili te stoły 🥰 ale sam <br />
            klimat i dekoracja robiła <br /> meegaaa wrażenie! 
          </p>
        </div>
      </div>

      {/* Кнопки переключення */}
      <button className="prev" onClick={prevSlide}>
        Previous
      </button>
      <button className="next" onClick={nextSlide}>
        Next
      </button>

      {/* Пагінація (за необхідності) */}
      <div className="pagination">
        {[...Array(totalSlides)].map((_, index) => (
          <button key={index} onClick={() => goToSlide(index)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
