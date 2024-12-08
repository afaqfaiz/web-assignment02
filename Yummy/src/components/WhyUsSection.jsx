import React from "react";

const WhyUsSection = () => {
  return (
    <section id="why-us" className="why-us section">
      <div className="container section-title">
        <h2>Why Choose Us</h2>
        <p>
          <span>Learn More</span> <span className="description-title">About Why We Are The Best</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="box">
              <h4>Quality Food</h4>
              <p>We use the freshest ingredients to make the best dishes for you.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <h4>Experienced Chefs</h4>
              <p>Our chefs are highly trained and have years of experience.</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box">
              <h4>Great Atmosphere</h4>
              <p>Enjoy your meal in a cozy and welcoming environment.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
