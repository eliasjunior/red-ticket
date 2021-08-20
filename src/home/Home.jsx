import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import { displayResult } from "./actions";
import Tree from "./Tree";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

export default function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(false);
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [relatives, setRelatives] = useState([]);
  const [isDone, setDone] = useState(false);
  const { t } = useTranslation();
  //   const {
  //     register,
  //     handleSubmit,
  //     watch,
  //     formState: { errors },
  //   } = useForm();
  //console.log(watch("name"));

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
    console.log("selected", selected);
    setGender(selected.gender);
    setName(selected.name);
    setYearOfBirth(selected.yearOfBirth);
    setCurrentId(selected.id);
  };

  const changeLanguage = (lg) => {
    i18n.changeLanguage(lg);
  };
  const displayYearError = () => {

  }
  return (
    <div className="container">
      <span className="flag" onClick={() => changeLanguage("pt")}>
        <img src="images/brazil.png" alt="Brasil" />
      </span>
      <span className="flag" onClick={() => changeLanguage("es")}>
        <img src="images/argentina.png" alt="Argentina" />
      </span>
      <Alert variant="light">{t("greetings")}</Alert>
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
        {/* {displayYearError()} */}
        {currentId === "" ? (
          <Button variant="success" onClick={() => addLeaf()}>
            {t("add")}
          </Button>
        ) : (
          <Button variant="success" onClick={() => addLeaf(currentId)}>
            {t("update")}
          </Button>
        )}
       
      </Form>
      <br></br>
      <Tree
        relatives={relatives}
        onRemove={removeFromTree}
        onEdit={editFromTree}
        t={t}
      ></Tree>
      <Button variant="warning" onClick={() => setDone(!isDone)}>
        <i className="fas fa-tree"></i> {t("generate")}
      </Button>
      <br></br>
      <br></br>
      {displayResult(relatives, isDone)}
    </div>
  );
}
