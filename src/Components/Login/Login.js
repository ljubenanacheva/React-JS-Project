import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext.js";
import { ErrorBox } from "../common/ErrorBox.js";

import styles from "./Login.module.css";

export const Login = () => {
  const [error, setError] = useState("");
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const { onLoginSubmit } = useContext(AuthContext);
  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
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

    const result = await onLoginSubmit(values);
    if (result) {
      setError(result);
    }
    setValues({
      email: "",
      password: "",
    });
  };

  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>Login</h1>
      <h5 className={styles.secondTitle}>Please enter your credentials.</h5>
      <Form className={styles.form} method="POST" onSubmit={onSubmit}>
        {error.length > 0 && <ErrorBox message={error} />}
        <Form.Group className="mb-3">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
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
            placeholder="Password"
            name="password"
            value={values.password}
            onChange={changeHandler}
          />
        </Form.Group>

        <Form.Group as={Row} className={styles.check}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Form.Check label="Remember me" />
          </Col>
        </Form.Group>

        <p className="field">
          <span>
            Don't have an account?{" "}
            <Link to="/register" className={styles.registerLink}>
              Register
            </Link>
          </span>
        </p>

        <Button variant="primary" className={styles.button} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
