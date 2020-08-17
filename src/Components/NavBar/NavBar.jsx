import React from "react";
import halfmoon from "halfmoon";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const NavBar = (props) => {
  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <nav className="navbar">
      <div className="container justify-content-between">
        <Link to="/">
          <span className="navbar-brand">
            <i className="fa fa-instagram"></i>
          </span>
        </Link>
        <div className="navbar-content ">
          {props.isLogin ? (
            <div>
              <button className="btn btn-danger mr-15" onClick={handleLogout}>
                Logout
              </button>
              <Link to="/add-post">
                <button className="btn btn-primary mr-15">Add Post</button>
              </Link>
            </div>
          ) : (
            <div>
              <Link to="/login">
                <button className="btn btn-danger mr-15">Login</button>
              </Link>
              <Link to="/sign-up">
                <button className="btn btn-secondary mr-15">Sign Up</button>
              </Link>
            </div>
          )}

          <button
            className="btn btn-action mr-5"
            type="button"
            onClick={() => halfmoon.toggleDarkMode()}
            aria-label="Toggle dark mode"
          >
            <i className="fa fa-moon-o" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

const mapStatetoProps = (state) => {
  return {
    isLogin: state.login.isLogin,
  };
};

export default connect(mapStatetoProps)(NavBar);
