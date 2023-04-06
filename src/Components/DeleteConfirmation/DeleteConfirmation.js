import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "./DeleteConfirmation.module.css";

export const DeleteConfirmation = ({ message, onDialog }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      <Modal.Dialog className={styles.modalDialogMain}>
        <Modal.Header closeButton className={styles.modalDialog}>
          <Modal.Title className={styles.modalTitle}>
            Dander Zone Warning!!!
          </Modal.Title>
        </Modal.Header>

        <Modal.Body className={styles.modalDialog}>
          <p className={styles.paragraph}>{message}</p>
        </Modal.Body>

        <Modal.Footer className={styles.modalDialog}>
          <Button variant="secondary" onClick={() => onDialog(false)}>
            Close
          </Button>
          <Button
            className={styles.delbtn}
            variant="primary"
            onClick={() => onDialog(true)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};
