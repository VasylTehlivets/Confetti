// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

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
    <div className="App">
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
