// import React from "react";
// import "./Contacts.css";

// const Contacts = () => {
//   return (
//     <div id="contact">
//       <h2 className="">Contacts</h2>
//       <p>Confetti - Studio </p>
//       <p>Dekoracij Balonami</p>
//       <p>Warszawa </p>
//       <div className="Phone">+48 793 351 407 </div>
//       <div className="Email">confettibalony@gmail.com</div>
//     </div>
//   );
// };

// export default Contacts;

import React, { useState } from "react";
import "./Contacts.css";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    nameError: "",
    emailError: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Валідація полів "Ім'я" і "Електронна пошта"
    let errors = {};
    if (!formData.name.trim()) {
      errors.nameError = "Ім'я є обов'язковим";
    }
    if (!formData.email.trim()) {
      errors.emailError = "Електронна пошта є обов'язковою";
    }
    if (Object.keys(errors).length === 0) {
      // Відправити дані форми
      console.log("Форма валідна, дані відправлено:", formData);
      // Очистити дані форми
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setFormErrors({
        nameError: "",
        emailError: "",
      });
    } else {
      // Показати помилки валідації
      setFormErrors(errors);
    }
  };

  return (
    <div id="contact" className="contacts">
      <h2 className="name">Контакти</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Ім'я *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <p className="error">{formErrors.nameError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{formErrors.emailError}</p>
        </div>
        <div className="form-group">
          <label htmlFor="message">Повідомлення</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button type="submit">Відправити</button>
      </form>
    </div>
  );
};

export default Contacts;
