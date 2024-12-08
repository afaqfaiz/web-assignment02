import React from "react";

const EventsSection = () => {
  return (
    <section id="events" className="events section">
      <div className="container section-title">
        <h2>Special Events</h2>
        <p>
          <span>Celebrate Your</span> <span className="description-title">Special Moments</span>
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="event-box">
              <h4>Wedding Parties</h4>
              <p>Celebrate your wedding with us. We offer the best catering and services for your special day.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="event-box">
              <h4>Corporate Events</h4>
              <p>Host your corporate meetings and events in our exclusive banquet halls.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
