import React from "react";

const Card = ({ image, title, text, link1, link2, button }) => {
  return (
    <div className="col-12 col-md-6">
      <div className="card">
        {image && <img className="card-img-top" src={image} alt="Card" />}
        <div className="card-header">
          <h5 className="card-title mb-0">{title}</h5>
        </div>
        <div className="card-body">
          <p className="card-text">{text}</p>
          {link1 && <a href="#" className="card-link">{link1}</a>}
          {link2 && <a href="#" className="card-link">{link2}</a>}
          {button && <a href="#" className="btn btn-primary">{button}</a>}
        </div>
      </div>
    </div>
  );
};

export default Card;
