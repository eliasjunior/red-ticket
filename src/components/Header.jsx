import React from "react";
import { changeLanguage } from "./actions";
import { Alert } from "react-bootstrap";

export default function Header({ t }) {
  return (
    <>
      <span className="flag" onClick={() => changeLanguage("pt")}>
        <img src="images/brazil.png" alt="Brasil" />
      </span>
      <span className="flag" onClick={() => changeLanguage("es")}>
        <img src="images/argentina.png" alt="Argentina" />
      </span>
      <Alert variant="light">{t("greetings")}</Alert>
    </>
  );
}
