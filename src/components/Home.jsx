import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Tree from "./Tree";
import { useTranslation } from "react-i18next";
import Header from "./Header";
import Result from "./Result";
import InvalidInput from "./common/InputInvalid";

export default function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(false);
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [relatives, setRelatives] = useState([]);
  const [isDone, setDone] = useState(false);
  const { t } = useTranslation();
  const [errors, setErrors] = useState([]);

  const addLeaf = () => {
    if (currentId === "") {
      setRelatives([
        ...relatives,
        { name, gender, yearOfBirth, id: relatives.length },
      ]);
    } else {
      const selected = relatives.filter(({ id }) => id === currentId).pop();
      selected.name = name;
      selected.yearOfBirth = yearOfBirth;
      selected.gender = gender;
    }
    setCurrentId("");
    setName("");
    setGender(false);
    setYearOfBirth("");
  };

  const removeFromTree = (_id) => {
    setRelatives(relatives.filter(({ id }) => id !== _id));
  };

  const editFromTree = (_id) => {
    const selected = relatives.filter(({ id }) => id === _id).pop();
    setGender(selected.gender);
    setName(selected.name);
    setYearOfBirth(selected.yearOfBirth);
    setCurrentId(selected.id);
  };

  return (
    <div className="container">
      <Header t={t}></Header>
      <Form>
        <Form.Group className="mb-3" controlId="formName" size="sm">
          <Form.Label>{t("name")}</Form.Label>
          <Form.Control
            type="text"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <InvalidInput fieldName="name" t={t} errors={errors}></InvalidInput>
        <Form.Group className="mb-3" controlId="isWoman">
          <Form.Check
            type="checkbox"
            label={t("isWomen")}
            checked={gender}
            name="isWoman"
            onChange={() => setGender(!gender)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="yearOfBirth" size="sm">
          <Form.Label>{t("yearOfBirth")}</Form.Label>
          <Form.Control
            type="number"
            name="yearOfBirth"
            value={yearOfBirth}
            onChange={(e) => setYearOfBirth(e.target.value)}
          />
        </Form.Group>
        <InvalidInput
          fieldName="yearOfBirth"
          t={t}
          errors={errors}
        ></InvalidInput>
        <div className="row_red_ticket">
          {currentId === "" ? (
            <Button variant="success" onClick={addLeaf}>
              <i class="fas fa-user-plus"></i>
            </Button>
          ) : (
            <Button variant="success" onClick={addLeaf}>
              <i className="fas fa-edit"></i>
            </Button>
          )}
        </div>
      </Form>
      <Tree
        relatives={relatives}
        onRemove={removeFromTree}
        onEdit={editFromTree}
      ></Tree>
      <div className="row_red_ticket">
        <Button variant="warning" onClick={() => setDone(!isDone)}>
          <i className="fas fa-tree"></i> {t("generate")}
        </Button>
      </div>
      <div className="row_red_ticket">
        <Result relatives={relatives} isDone={isDone} t={t}></Result>
      </div>
    </div>
  );
}
