import React from "react";
import img1 from "../assets/img/gallery/gallery-1.jpg"
import img2 from "../assets/img/gallery/gallery-2.jpg"
import img3 from "../assets/img/gallery/gallery-3.jpg"
import img4 from "../assets/img/gallery/gallery-4.jpg"
import img5 from "../assets/img/gallery/gallery-5.jpg"
import img6 from "../assets/img/gallery/gallery-6.jpg"


const GallerySection = () => {
  const galleryImages = [
    img1,img2,img3,img4,img5,img6
   
  ];

  return (

    <section id="gallery" className="gallery section">
      <div className="container section-title">
        <h2>Gallery</h2>
        <p>
          <span>Check Our</span> <span className="description-title">Beautiful Gallery</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {galleryImages.map((image, index) => (
            <div key={index} className="col-lg-3 col-md-4">
              <div className="gallery-item">
                <a href={image} className="glightbox">
                  <img src={image} alt={`Gallery ${index + 1}`} className="img-fluid" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
