import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ListGroup from "react-bootstrap/ListGroup";

function Nearby({ nearbyPlaces }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Near By Places
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header className="tex-center" closeButton>
          <Modal.Title style={{ color: "green" }}>
            <h3>
              <b>Near By Places</b>
            </h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
            <ListGroup.Item>1 : {nearbyPlaces["1"]}</ListGroup.Item>
            <ListGroup.Item>2 : {nearbyPlaces["2"]}</ListGroup.Item>
            <ListGroup.Item>3 : {nearbyPlaces["3"]}</ListGroup.Item>
            <ListGroup.Item>4: {nearbyPlaces["4"]}</ListGroup.Item>
            <ListGroup.Item>5: {nearbyPlaces["5"]}</ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Nearby;
