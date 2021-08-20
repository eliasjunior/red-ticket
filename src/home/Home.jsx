import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
//import { useForm } from "react-hook-form";
import { displayResult } from "./actions";
import Tree from "./Tree";

export default function Home() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState(false);
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [currentId, setCurrentId] = useState("");
  const [relatives, setRelatives] = useState([]);
  const [isDone, setDone] = useState(false);
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

  return (
    <div className="container">
      <Alert variant="light">
        Forneca a sua arvore genealogica do primeiro italiano descendente ate
        voce.
      </Alert>
      <Form>
        <Form.Group className="mb-3" controlId="formName" size="sm">
          <Form.Label>Informe o nome:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="isWoman">
          <Form.Check
            type="checkbox"
            label="Mulher ? (Importante)"
            checked={gender}
            name="isWoman"
            onChange={() => setGender(!gender)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="yearOfBirth" size="sm">
          <Form.Label>Informe o ano de nascimento(YYYY):</Form.Label>
          <Form.Control
            type="number"
            name="yearOfBirth"
            value={yearOfBirth}
            placeholder="Ano de Nascimento"
            onChange={(e) => setYearOfBirth(e.target.value)}
          />
        </Form.Group>
        {currentId === "" ? (
          <Button variant="success" onClick={() => addLeaf()}>
            Adicionar a Arvore
          </Button>
        ) : (
          <Button variant="success" onClick={() => addLeaf(currentId)}>
            Update
          </Button>
        )}
      </Form>
      <br></br>
      <Tree
        relatives={relatives}
        onRemove={removeFromTree}
        onEdit={editFromTree}
      ></Tree>
      <Button variant="warning" onClick={() => setDone(!isDone)}>
        <i className="fas fa-tree"></i> Arvore completa - gerar resultado
      </Button>
      <br></br>
      <br></br>
      {displayResult(relatives, isDone)}
    </div>
  );
}
