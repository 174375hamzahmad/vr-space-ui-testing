import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Row, Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import GoogleOauth from "./GoogleOauth";

function SignInModal(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleManualSignIn = () => {
    // handle manual sign in with email and password logic
  };
  const buttonStyle = {
    backgroundColor: "var(--blue)",
    borderColor: "var(--blue)",
    color: "var(--white)",
    borderRadius: "20px",
    padding: "10px 20px",
    fontWeight: "bold",
    fontSize: "12px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    transition: "all 0.3s ease-in-out",
    cursor: "pointer",
    outline: "none",
  };

  return (
    <Modal show={props.show} onHide={props.onHide}>
      <Modal.Header closeButton>
        <Modal.Title style={{ fontWeight: "bold" }}>Sign In</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center">
          <GoogleOauth />
        </div>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={5}>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </Col>
          <Col xs={2} className="text-center">
            or
          </Col>
          <Col xs={5}>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </Col>
        </Row>
        <div className="d-flex justify-content-center">
          <Button style={buttonStyle}>Continue as Guest</Button>
        </div>

        <Row style={{ marginTop: "10px" }}>
          <Col xs={5}>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </Col>
          <Col xs={2} className="text-center">
            or
          </Col>
          <Col xs={5}>
            <hr style={{ height: "1px", backgroundColor: "black" }} />
          </Col>
        </Row>

        <Form>
          <Form.Group
            style={{ marginBottom: "8px" }}
            controlId="formBasicEmail"
          >
            <Form.Label style={{ fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={handleEmailChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Cancel
        </Button>
        <Button variant="primary" onClick={handleManualSignIn}>
          Sign In
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SignInModal;
