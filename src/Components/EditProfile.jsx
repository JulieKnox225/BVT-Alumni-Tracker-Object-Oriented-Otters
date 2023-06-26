import { Col, Container } from "react-bootstrap"
import Row from 'react-bootstrap/Row'
import { MDBIcon } from "mdb-react-ui-kit"

export const EditProfile = () => {
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
