import { Col, Row, Container, Modal } from "react-bootstrap"
import { MDBIcon } from 'mdb-react-ui-kit'




export const EditProfile = () => {
  return (
    <>
    <Container fluid='xxl' className="profile-page-edit-container">
    <Row >
    <Col>
        <div className="profile-pic-edit">
    

          
            <img style={{marginTop: '25px'}} className="default-profile-pic" src="images/pic.png" alt="Default profile picture" />
            <p>Click to change image</p>
          
        </div>
            <h4 className="profile-email">Current Profile Picture</h4>
        <div className="social-links-edit">
           Edit social Links
        </div>
    </Col>
    <Col>
        <div className="about-me-header"> 
            About me 
        </div>
        <div className="about-me-text">
            I like food
        </div>
        <div className="projects-header"> 
            Projects 
        </div>
        <div className="projects-text">
            A lot
        </div>
        <div className="achievements-header"> 
            Bay Valley Tech
        </div>
        <div className="achievements-text">
            Achievements here
        </div>
        
    </Col>
    <Col>
      <div>
        About me
      </div>
      <textarea />
      <div>
        Projects
      </div>
      <textarea />
      <div>
        Bay Valley Tech
      </div>
      <textarea />
    </Col>
    </Row>
    </Container>
    </>
  )
}
