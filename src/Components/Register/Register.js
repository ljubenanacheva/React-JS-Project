import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import styles from "./Register.module.css";

export const Register = () => {
  return (
    <div className={styles.registerForm}>
      <h1 className={styles.title}>Register</h1>
      <h5 className={styles.secondTitle}>
        Please fill in this form to create an account.
      </h5>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label> Repeat Password</Form.Label>
          <Form.Control type="repassword" placeholder="Repeat your password." />
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
