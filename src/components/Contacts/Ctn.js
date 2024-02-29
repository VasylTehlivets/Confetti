
const Contacts = () => {
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
  