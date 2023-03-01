import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";

function EditTask({ task }) {
  const [show, setShow] = useState(false);
  const [text, setText] = useState(task.description);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit = () => {
    handleClose();
    dispatch(editTask(task.id, text));
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  return (
    <>
      <div className="btn-edit">
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Title className="p-3">Edit your Task</Modal.Title>
        <Modal.Body>
          <input
            defaultValue={text}
            onChange={handleChange}
            className="col-lg-8 p-3 form-control"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTask;
