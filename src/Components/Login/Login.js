import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import styles from "./Login.module.css";

export const Login = () => {
  return (
    <div className={styles.loginForm}>
      <h1 className={styles.title}>Login</h1>
      <h5 className={styles.secondTitle}>Please enter your credentials.</h5>
      <Form className={styles.form}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            Please enter a valid email.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <p class="field">
          <span>
            Don't have an account? <a href="#">Register</a>
          </span>
        </p>

        <Button variant="primary" className={styles.button} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
