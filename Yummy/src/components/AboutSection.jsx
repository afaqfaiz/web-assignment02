import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="about section">
      <div className="container section-title">
        <h2>About Us</h2>
        <p><span>Learn More</span> <span className="description-title">About Us</span></p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-7">
            <img src="assets/img/about.jpg" className="img-fluid mb-4" alt="About" />
          </div>
          <div className="col-lg-5">
            <div className="content">
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <ul>
                <li><i className="bi bi-check-circle-fill"></i> Ullamco laboris nisi ut aliquip.</li>
                <li><i className="bi bi-check-circle-fill"></i> Duis aute irure dolor in reprehenderit.</li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
