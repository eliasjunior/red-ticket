import React from "react";
import PropTypes from "prop-types";
import { changeLanguage } from "./actions";

const Header = ({ t }) => {
  return (
    <header id="header" className="header" role="banner">
      <div className="container__header">
        <div className="header__main-bar">
          <img src="images/logo.png" alt="European Union" width="30px" />
          <div className="header__main-bar--title">{t("headerTitle")}</div>
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
  t: PropTypes.func,
};

export default Header;
