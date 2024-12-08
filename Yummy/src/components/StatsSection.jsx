import React from "react";

const StatsSection = () => {
  return (
    <section id="stats" className="stats section">
      <div className="container text-center">
        <div className="row gy-4">
          <div className="col-lg-3">
            <h3>120+</h3>
            <p>Menu Items</p>
          </div>
          <div className="col-lg-3">
            <h3>10+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="col-lg-3">
            <h3>50+</h3>
            <p>Awards Won</p>
          </div>
          <div className="col-lg-3">
            <h3>1000+</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
