import React from "react";
import Sidebar from "../components/Sidebar-blank";
 import Navbar from "../components/Navbar-blank";
import Footer from "../components/Footer-blank";
import GoogleMap from "../components/google-map";
import "../css/App.css"; 


const App = () => {
  const defaultCenter = { lat: 40.712784, lng: -74.005941 };

  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <Navbar />
        <main className="content">
          <div className="container-fluid">
            <h1 className="h3">Google Maps</h1>
            <div className="row">
              <div className="col-12 col-lg-6">
                <div className="card">
                  <div className="card-header">Default Map</div>
                  <div className="card-body">
                    <GoogleMap
                      mapType="roadmap"
                      zoom={14}
                      center={defaultCenter}
                    />
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6">
                <div className="card">
                  <div className="card-header">Hybrid Map</div>
                  <div className="card-body">
                    <GoogleMap
                      mapType="hybrid"
                      zoom={14}
                      center={defaultCenter}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
