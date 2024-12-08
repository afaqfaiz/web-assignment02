import React from "react";

const ContactSection = () => {
  return (
    <section id="contact" className="contact section">
      <div className="container section-title">
        <h2>Contact</h2>
        <p>
          <span>Need Help? </span> <span className="description-title">Contact Us</span>
        </p>
      </div>

      <div className="container">
        <form>
          <div className="row gy-4">
            <div className="col-md-6">
              <input type="text" className="form-control" placeholder="Your Name" required />
            </div>
            <div className="col-md-6">
              <input type="email" className="form-control" placeholder="Your Email" required />
            </div>
            <div className="col-12">
              <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
