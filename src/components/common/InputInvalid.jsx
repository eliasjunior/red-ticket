import React from "react";

export default function InvalidInput({ fieldName, errors = [], t }) {
  return findError(errors, fieldName) ? (
    <div className="invalid row_red_ticket">{t("required")}</div>
  ) : (
    ""
  );
}

function findError(errors, field) {
  return errors.filter(error => error === field).pop();
}
