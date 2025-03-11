import React, { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const UpdateOrderModal = ({ show, onHide, currentStatus, onSubmit }) => {
  const [status, setStatus] = useState(currentStatus);

  useEffect(() => {
    setStatus(currentStatus);
  }, [currentStatus]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(status);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Update Order Status</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="orderStatus">
            <Form.Label>New Order Status:</Form.Label>
            <Form.Control
              type="text"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Enter new order status"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="mt-3" block="true">
            Update
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default UpdateOrderModal;
