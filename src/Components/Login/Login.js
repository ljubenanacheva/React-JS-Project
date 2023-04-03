import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <h5>Please enter your credentials.</h5>
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

        <p class="field">
          <span>
            Don't have an account? <a href="#">Register</a>
          </span>
        </p>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
