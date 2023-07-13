import { Col, Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import { MDBIcon } from "mdb-react-ui-kit"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React from "react";
import Button from 'react-bootstrap/Button';

export const EditProfile = () => {

  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Container fluid='true' className="profile-page-edit-container">
    <Row>
    <Col>
        <div className="profile-pic-edit">
            <img style={{marginTop: '25px'}} className="default-profile-pic" src="images/pic.png" alt="Default profile picture" />
            {/* Not a real link, needs to be updated to some sort of modal/popup to change image */}
            <a href="/editImage">
            <p className="edit-image-link">Click to change image</p>
            </a>
        </div>
            <h4 className="e-p-pic-text">@JohnTheDoughKing</h4>
        
        <div className="e-p-social-links">
          {/* Not a real link either, same as previous link (modal/popup) */}
          <a href='/addmodal?'>
           Edit social Links
           </a>
           <div className="social-links-icon">
          <MDBIcon far icon="envelope" />
          <MDBIcon fas icon="phone" />
          <MDBIcon fab icon="linkedin" />
          </div>
        </div>
    </Col>
    <Col>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Name:
        </div>
        <input 
        className="e-p-input"
        />
      </div>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Username:
        </div>
        <input
        className="e-p-input"
        />
      </div>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Email:
        </div>
        <input
        className="e-p-input"
        />
      </div>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Update Password:
        </div>
        <button 
        className="e-p-update"
        onClick={handleShow}
        >
        Update Password
        </button>

      {/* Modal For password updating*/}
      <Modal 
        show={show} 
        onHide={handleClose}
        backdrop="static"
      >
        <Modal.Header closeButton className="modal-background">
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-background">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Old password</Form.Label>
              <Form.Control
                type="password"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Create new password</Form.Label>
              <Form.Control
                type="password"
              />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Confirm new Password</Form.Label>
              <Form.Control
                type="password"     
              />
              </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="modal-background">
          <Button style={{backgroundColor:'#084C61'}} onClick={handleClose}>
            Cancel
          </Button>
          <Button style={{backgroundColor:'#FF7A45'}} onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

      {/* End of password update modal */}

      </div>
    </Col>
    <Col >
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        About me:
        </div>
        <textarea 
        className="e-p-textarea"
        />
      </div>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Projects:
      </div>
      <textarea 
      className="e-p-textarea"
      />
      </div>
      <div className="form-edit-prof">
        <div className="e-p-form-text">
        Bay Valley Tech:
      </div>
      <textarea 
      className="e-p-textarea"
      />
      </div>
    </Col>
    </Row>
    <Row>
    <div className="e-p-buttons">
      <a href="/profile"><button className="e-p-cancel">Cancel</button></a>
      <button className="e-p-save">Save</button>
    </div>
    </Row>
    </Container>
    </>
    
  )
}
