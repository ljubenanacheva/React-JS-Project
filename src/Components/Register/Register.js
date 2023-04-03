import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <h5>Please fill in this form to create an account.</h5>
      <Form>
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

        <p class="field">
          <span>
            If you have profile click <a href="#">here</a>
          </span>
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
