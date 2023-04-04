import { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm.js";
import { AuthContext } from "../../contexts/AuthContext.js";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./Register.module.css";

export const Register = () => {
  const { onRegisterSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onRegisterSubmit
  );
  return (
    <div className={styles.registerForm}>
      <h1 className={styles.title}>Register</h1>
      <h5 className={styles.secondTitle}>
        Please fill in this form to create an account.
      </h5>
      <Form className={styles.form} method="POST" onSubmit={onSubmit}>
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
