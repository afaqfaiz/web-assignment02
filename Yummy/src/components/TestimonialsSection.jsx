import React from "react";

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title">
        <h2>Testimonials</h2>
        <p>
          <span>What Our Customers</span> <span className="description-title">Say About Us</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-4">
            <div className="testimonial-box">
              <p>"The food was absolutely wonderful, from preparation to presentation, very pleasing."</p>
              <h4>- John Doe</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-box">
              <p>"Great atmosphere and even better food. A must-visit place!"</p>
              <h4>- Jane Smith</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="testimonial-box">
              <p>"Exceptional service and the meals were amazing. Highly recommend!"</p>
              <h4>- Emily Johnson</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
