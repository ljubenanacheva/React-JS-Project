import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext.js";
import { ErrorBox } from "../common/ErrorBox.js";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./Register.module.css";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (values.username === "") {
      setError("The username is required!");
      event.stopPropagation();
      return;
    }
    if (values.email === "") {
      setError("The email is required!");
      event.stopPropagation();
      return;
    }
    if (values.password === "") {
      setError("The password is required!");
      event.stopPropagation();
      return;
    }
    if (values.confirmPassword !== values.password) {
      setError("The password and confirm password must be the same!");
      event.stopPropagation();
      return;
    }

    const result = await onRegisterSubmit(values);
    if (result) {
      setError(result);
    }
    setValues({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className={styles.registerForm}>
      <h1 className={styles.title}>Register</h1>
      <h5 className={styles.secondTitle}>
        Please fill in this form to create an account.
      </h5>
      <Form className={styles.form} method="POST" onSubmit={onSubmit}>
        {error.length > 0 && <ErrorBox message={error} />}
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            placeholder="Enter username"
            value={values.username}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            Please enter a valid email.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            value={values.email}
            onChange={changeHandler}
          />
          <Form.Text className="text-muted">
            Please enter a valid email.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={values.password}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Repeat Password</Form.Label>
          <Form.Control
            type="password"
            name="confirmPassword"
            placeholder="Repeat your password."
            value={values.confirmPassword}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group
          as={Row}
          className={styles.check}
          controlId="formHorizontalCheck"
        >
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <p className="field">
          <span>
            Already have an account?{" "}
            <a href="#" className={styles.loginLink}>
              Login
            </a>
          </span>
        </p>

        <Button variant="primary" type="submit" className={styles.button}>
          Submit
        </Button>
      </Form>
    </div>
  );
};
