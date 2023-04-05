import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export const DeleteConfirmation = ({ message, onDialog }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Dander Zone Warning!!!</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{message}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => onDialog(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onDialog(true)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
