import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-start">
            <p className="mb-0">
              <a className="text-muted" href="https://adminkit.io/" target="_blank" rel="noopener noreferrer">
                <strong>AdminKit</strong>
              </a>{" "}
              - Bootstrap Admin Template &copy;
            </p>
          </div>
          <div className="col-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-muted" href="#">
                  Support
                </a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="#">
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
