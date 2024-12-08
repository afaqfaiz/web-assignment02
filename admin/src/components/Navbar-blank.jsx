import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand navbar-light navbar-bg">
      <a className="sidebar-toggle js-sidebar-toggle">
        <i className="hamburger align-self-center"></i>
      </a>

      <div className="navbar-collapse collapse">
        <ul className="navbar-nav navbar-align">
          <li className="nav-item dropdown">
            <a
              className="nav-icon dropdown-toggle"
              href="#"
              id="alertsDropdown"
              data-bs-toggle="dropdown"
            >
              <div className="position-relative">
                <i className="align-middle" data-feather="bell"></i>
                <span className="indicator">4</span>
              </div>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle d-none d-sm-inline-block"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                src="img/avatars/avatar.jpg"
                className="avatar img-fluid rounded me-1"
                alt="User"
              />{" "}
              <span className="text-dark">Charles Hall</span>
            </a>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="/profile">
                <i className="align-middle me-1" data-feather="user"></i> Profile
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/logout">
                Log out
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
