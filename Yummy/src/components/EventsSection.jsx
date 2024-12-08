import React, { useEffect } from "react";
import "../assets/css/event.css"
import img1 from "../assets/img/events-1.jpg";
import img4 from "../assets/img/events-4.jpg"
import img3 from "../assets/img/events-3.jpg"
import img2 from "../assets/img/events-2.jpg"



const EventsSection = () => {
  useEffect(() => {
    // Vanilla JavaScript for carousel effect or required JS behavior
    const initEventsCarousel = () => {
      const eventCards = document.querySelectorAll(".event-card");
      eventCards.forEach((card) => {
        card.addEventListener("mouseover", () => {
          card.classList.add("highlight");
        });
        card.addEventListener("mouseout", () => {
          card.classList.remove("highlight");
        });
      });
    };

    initEventsCarousel();
  }, []);

  return (
    <section id="events" className="events section">
      <div className="container section-title">
        <h2>Special Events</h2>
        <p>
          <span>Celebrate Your</span>{" "}
          <span className="description-title">Special Moments</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {/* Event 1 */}
          <div className="col-lg-6">
            <div className="event-card">
              <img
                src={img1}
                className="img-fluid"
                alt="Wedding Party"
              />
              <div className="event-content">
                <h3>Wedding Parties</h3>
                <p>
                  Celebrate your wedding with us. We provide the best services
                  for your special day.
                </p>
              </div>
            </div>
          </div>

          {/* Event 2 */}
          <div className="col-lg-6">
            <div className="event-card">
              <img
                src={img2}
                className="img-fluid"
                alt="Corporate Events"
              />
              <div className="event-content">
                <h3>Corporate Events</h3>
                <p>
                  Host your corporate meetings and gatherings in our luxurious
                  event spaces.
                </p>
              </div>
            </div>
          </div>

          {/* Event 3 */}
          <div className="col-lg-6">
            <div className="event-card">
              <img
                src={img4}
                className="img-fluid"
                alt="Birthday Parties"
              />
              <div className="event-content">
                <h3>Birthday Parties</h3>
                <p>
                  Make your birthday memorable with customized decorations,
                  cakes, and more.
                </p>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div className="col-lg-6">
            <div className="event-card">
              <img
                src={img3}
                className="img-fluid"
                alt="Private Parties"
              />
              <div className="event-content">
                <h3>Private Parties</h3>
                <p>
                  Enjoy private parties with friends and family in a cozy,
                  exclusive environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
