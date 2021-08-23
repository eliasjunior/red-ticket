import React from "react";
import { getLabel, getClassList } from "./actions";
import { Button } from "react-bootstrap";
import "./tree.css";

export default function Tree({ relatives, onRemove, onEdit }) {
  return (
    <div>
      {relatives.map(({ name, yearOfBirth, id, gender }) => (
        <div key={id}>
          <div className={getClassList(gender) + " list_relative"}>
            <span className="space-b">
              <img src="images/italy24.png" alt="flag" />
            </span>
            <div>{getLabel({ name, yearOfBirth })}</div>
            <div className="list-btn">
              <Button className="space-b" onClick={() => onEdit(id)}>
                <i className="fas fa-edit"></i>
              </Button>
              <Button
                className="space-b"
                variant="danger"
                onClick={() => onRemove(id)}
              >
                <i className="fas fa-trash-alt"></i>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
