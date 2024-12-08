import React from "react";

const ChefsSection = () => {
  return (
    <section id="chefs" className="chefs section">
      <div className="container section-title">
        <h2>Our Chefs</h2>
        <p>
          <span>Meet Our</span> <span className="description-title">Professional Chefs</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="chef-box">
              <img src="assets/img/chef1.jpg" className="img-fluid" alt="Chef 1" />
              <h4>Chef John</h4>
              <p>Head Chef</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-box">
              <img src="assets/img/chef2.jpg" className="img-fluid" alt="Chef 2" />
              <h4>Chef Mary</h4>
              <p>Pastry Chef</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="chef-box">
              <img src="assets/img/chef3.jpg" className="img-fluid" alt="Chef 3" />
              <h4>Chef Mike</h4>
              <p>Sous Chef</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChefsSection;
