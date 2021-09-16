import React from "react";
import { getResult } from "./actions";

export default function Result({ relatives, t, isDone }) {
  if (isDone) {
    if (relatives.length === 0) {
      return <div className="alert alert-warning">{t("noTree")}.</div>;
    }
    return getResult(relatives) ? (
      <div className="alert alert-danger">
        {t("resultFail")}
        <a href="#" className="alert-link">
          {t("linkDocs")}
        </a>
      </div>
    ) : (
      <div className="alert alert-success">
        {t("resultSuccess")}
        <a href="#" className="alert-link">
          {t("link")}
        </a>
        {t("docs")}
      </div>
    );
  } else {
    return "";
  }
}
