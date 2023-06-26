import { Col, Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'

export const EditProfile = () => {
  return (
    <>
    <Container fluid className="profile-page-edit-container">
    <Row>
    <Col>
        <div className="profile-pic-edit">
            <img style={{marginTop: '25px'}} className="default-profile-pic" src="images/pic.png" alt="Default profile picture" />
            <a>
            <p className="edit-image-link">Click to change image</p>
            </a>
        </div>
            <h4 className="e-p-pic-text">Current Profile Picture</h4>
        <div className="e-p-social-links">
           Edit social Links
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
        Password:
        </div>
        <input 
        className="e-p-input"
        />
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
      <button className="e-p-cancel">Cancel</button>
      <button className="e-p-save">Save</button>
    </div>
    </Row>
    </Container>
    </>
    
  )
}
