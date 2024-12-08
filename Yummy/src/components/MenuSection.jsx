import React from "react";

const MenuSection = () => {
  return (
    <section id="menu" className="menu section">
      <div className="container section-title">
        <h2>Our Menu</h2>
        <p><span>Check Our</span> <span className="description-title">Yummy Menu</span></p>
      </div>

      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4 menu-item">
            <img src="assets/img/menu/menu-item-1.png" className="menu-img img-fluid" alt="Menu Item" />
            <h4>Magnam Tiste</h4>
            <p className="price">$5.95</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
