import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div id="about" className="about">
      <h2 className="aboutName">Kreatywny zespół dekoratorów</h2>
      <p className="aboutDescr">
        Młodzi i energiczni, rozwijający działalność w zakresie tworzenia
        dekoracji na imprezy i wydarzenia
      </p>
      <div className="picture">
        <h3 className="picName">Kreatywne podejście i dbałość o szczegóły</h3>
        <p className="picDescr">
          Specjaliści zapewniają doradztwo i kreatywność przy wyborze dekoracji
          balonowych, z dbałością o szczegóły
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
