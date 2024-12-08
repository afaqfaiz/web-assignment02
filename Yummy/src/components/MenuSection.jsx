import React, { useState } from "react";
import img1 from "../assets/img/menu/menu-item-1.png" 
import img2 from "../assets/img/menu/menu-item-2.png" 
import img3 from "../assets/img/menu/menu-item-3.png" 
import img4 from "../assets/img/menu/menu-item-4.png" 
import img5 from "../assets/img/menu/menu-item-5.png" 
import img6 from "../assets/img/menu/menu-item-6.png" 


const MenuSection = () => {
  // Categories for the menu
  const categories = ["All", "Starters", "Mains", "Desserts", "Drinks"];

  // Menu items data
  const menuItems = [
    { id: 1, category: "Starters", title: "Bruschetta", price: "$5.95", img: img1, description: "Grilled bread with garlic, tomatoes, olive oil." },
    { id: 2, category: "Mains", title: "Grilled Chicken", price: "$12.50", img: img2, description: "Served with seasonal vegetables." },
    { id: 3, category: "Desserts", title: "Tiramisu", price: "$6.00", img: img3, description: "Coffee-flavored Italian dessert." },
    { id: 4, category: "Drinks", title: "Lemonade", price: "$3.50", img: img4, description: "Refreshing homemade lemonade." },
    { id: 5, category: "Starters", title: "Stuffed Mushrooms", price: "$7.25", img: img5, description: "Mushrooms stuffed with cheese and herbs." },
    { id: 6, category: "Mains", title: "Steak with Fries", price: "$15.00", img: img6, description: "Juicy steak served with crispy fries." },
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtered menu items based on category
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="menu section">
    
      {/* Section Title */}
      <div className="container section-title">
        <h2>Our Menu</h2>
        <p>
          <span>Check Our</span> <span className="description-title">Yummy Menu</span>
        </p>
      </div>

      {/* Menu Categories */}
      <div className="container text-center mb-4">
        <ul className="nav nav-tabs justify-content-center">
          {categories.map((category) => (
            <li key={category} className="nav-item">
              <button
                className={`nav-link ${selectedCategory === category ? "active" : ""}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Items */}
      <div className="container">
        <div className="row gy-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="menu-item text-center">
                <img src={item.img} className="menu-img img-fluid mb-3" alt={item.title} />
                <h4>{item.title}</h4>
                <p className="description">{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
