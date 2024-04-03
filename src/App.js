import React from "react";
import Header from "./components/Header/Header";
import "./App.css"; // Стилізуйте вашу сторінку у цьому файлі
import Hero from "./components/Hero/Hero";
import AboutUs from "./components/About/AboutUs";
import Reviews from "./components/Reviews/Reviews";
import Contacts from "./components/Contacts/Contacts";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <AboutUs />
      <Reviews />
      <Contacts />
      <Footer />
      {/* Додайте сюди інші компоненти вашого лендінгу */}
    </div>
  );
}

export default App;
