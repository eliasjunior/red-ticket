import React from "react";

export default function InvalidInput({ fieldName, errors, t }) {
  return errors[fieldName] ? (
    <div className="invalid row_red_ticket">{t("required")}</div>
  ) : (
    ""
  );
}
