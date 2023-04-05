import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import { useState } from "react";
import { useLandmarkContext } from "../../contexts/LandmarkContext.js";

import styles from "./Create.module.css";
import { ErrorBox } from "../common/ErrorBox.js";

export const Create = () => {
  const { onCreateLandmarkSubmit } = useLandmarkContext();
  const [values, setValues] = useState({
    name: "",
    location: "",
    imageUrl: "",
    category: "",
    description: "",
  });

  const [error, setError] = useState("");
  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.name == "") {
      setError("The name is required!");
      event.stopPropagation();
      return;
    }
    if (values.location == "") {
      setError("The location is required!");
      event.stopPropagation();
      return;
    }
    if (values.imageUrl == "") {
      setError("The Image Url is required!");
      event.stopPropagation();
      return;
    }
    if (values.description == "") {
      setError("The Description is required!");
      event.stopPropagation();
      return;
    }

    onCreateLandmarkSubmit(values);
    setValues({
      name: "",
      location: "",
      imageUrl: "",
      category: "",
      descrition: "",
    });
  };

  return (
    <div className={styles.divForm}>
      <h1 className={styles.title}>Create a Landmark</h1>
      <div>
        <img src=".\images\landmark.png" className={styles.image} />
      </div>
      {error.length > 0 && <ErrorBox message={error} />}
      <Form className={styles.form} method="POST" onSubmit={handleSubmit}>
        <Form.Group
          as={Row}
          className="mb-3"
          controlId="validationCustomUsername"
        >
          <Form.Label column sm={2} className={styles.label}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className={styles.formField}
              name="name"
              type="text"
              placeholder="Name"
              value={values.name}
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2} className={styles.label}>
            Location
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className={styles.formField}
              name="location"
              type="text"
              placeholder="Location"
              value={values.location}
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2} className={styles.label}>
            Image Url
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className={styles.formField}
              type="text"
              name="imageUrl"
              placeholder="Image Url"
              value={values.imageUrl}
              onChange={changeHandler}
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className={styles.selectForm}
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={15} className={styles.label}>
            Category
          </Form.Label>
          <Form.Select
            className={styles.select}
            name="category"
            value={values.category}
            onChange={changeHandler}
          >
            <option>Waterfalls</option>
            <option>Wonders of Nature</option>
            <option>Architecture</option>
            <option>Historical Places</option>
            <option>Monasteries and churches</option>
            <option>Lakes</option>
            <option>Rivers</option>
            <option>Caves</option>
            <option>Peaks</option>
          </Form.Select>
          <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className={styles.label}>Description</Form.Label>
          <Form.Control
            as="textarea"
            name="description"
            rows={4}
            className={styles.textArea}
            value={values.description}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className={styles.button}>
              Create Landmark
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
