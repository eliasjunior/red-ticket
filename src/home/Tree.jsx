import React from "react";
import { getLabel, getBackground } from "./actions";
import { Button } from "react-bootstrap";

export default function Tree({ relatives, onRemove, onEdit }) {
  return (
    <div>
      {relatives.map(({ name, yearOfBirth, id, gender }) => (
        <div key={id} className="">
          <div className={getBackground(gender)}>
            <span className="space-b">
              <img src="images/italy24.png" alt="flag" />
            </span>
            {getLabel({ name, yearOfBirth })}
            <Button className="space-b" onClick={() => onEdit(id)}>
              Edit
            </Button>
            <Button
              className="space-b"
              variant="danger"
              onClick={() => onRemove(id)}
            >
              Delete
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
