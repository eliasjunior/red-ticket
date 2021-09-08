import React from "react";
import PropTypes from "prop-types";
import { changeLanguage } from "./actions";

const Header = () => {
  return (
    <header id="header" className="header" role="banner">
      <div className="container__header">
        <div className="main-bar">
          {/* <Link to="/" className="logo"> */}
          <img src="images/logo.png" alt="European Union" width="30px" />
          {/* </Link> */}
          <div>
            <span className="flag" onClick={() => changeLanguage("pt")}>
              <img src="images/brazil.png" alt="Brasil" />
            </span>
            <span className="flag" onClick={() => changeLanguage("es")}>
              <img src="images/argentina.png" alt="Argentina" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

export default Header;
