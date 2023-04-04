import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import styles from "./Edit.module.css";

export const Edit = () => {
  return (
    <div className={styles.divForm}>
      <h1 className={styles.title}>Edit a Landmark</h1>
      <div>
        <img src=".\images\landmark.png" className={styles.image} />
      </div>
      <Form className={styles.form}>
        <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
          <Form.Label column sm={2} className={styles.label}>
            Name
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className={styles.formField}
              type="text"
              placeholder="Name"
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
              type="text"
              placeholder="Location"
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
              placeholder="Image Url"
            />
          </Col>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3"
          controlId="formHorizontalPassword"
        >
          <Form.Label column sm={2} className={styles.label}>
            Google Maps Url
          </Form.Label>
          <Col sm={10}>
            <Form.Control
              className={styles.formField}
              type="text"
              placeholder="Enter Google Maps URL."
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
          <Form.Select className={styles.select}>
            <option>Waterfalls</option>
            <option>Wonders of Nature</option>
            <option>Architecture</option>
            <option>Historical Places</option>
          </Form.Select>
          <br />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className={styles.label}>Description</Form.Label>
          <Form.Control as="textarea" rows={4} className={styles.textArea} />
        </Form.Group>

        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit" className={styles.button}>
              Edit Landmark
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
