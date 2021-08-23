import React from "react";
import { getResult } from "./actions";

export default function Result({ relatives, t, isDone }) {
  if (isDone) {
    if (relatives.length === 0) {
      return <div className="alert alert-warning">{t("noTree")}.</div>;
    }
    return getResult(relatives) ? (
      <div className="alert alert-danger">{t("resultFail")}</div>
    ) : (
      <div className="alert alert-success">{t("resultSuccess")}</div>
    );
  } else {
    return "";
  }
}
