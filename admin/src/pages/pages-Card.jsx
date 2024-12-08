import React from "react";
import Sidebar from "../components/Sidebar-blank";
import Navbar from "../components/Navbar-blank";
import Footer from "../components/Footer-blank";
import Card from "../components/cards";
import "../css/App.css";
import img1  from "../assets/unsplash-1.jpg"
import img2 from "../assets/unsplash-2.jpg"
import img3 from "../assets/unsplash-3.jpg"

const CardsPage = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid p-0">
            <div className="mb-3">
              <h1 className="h3 d-inline align-middle">Cards</h1>
              <a className="badge bg-dark text-white ms-2" href="#">
                Get more card examples
              </a>
            </div>

            <div className="row">
              <Card
                image={img1}
                title="Card with image and links"
                text="Some quick example text to build on the card title."
                link1="Card link"
                link2="Another link"
              />
              <Card
                image={img2}
                title="Card with image and button"
                text="Some quick example text to build on the card title."
                button="Go somewhere"
              />
              <Card
                title="Card with links"
                text="Some quick example text to build on the card title."
                link1="Card link"
                link2="Another link"
              />
              <Card
                title="Card with button"
                text="Some quick example text to build on the card title."
                button="Go somewhere"
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default CardsPage;
