import { Col, Row, Container } from "react-bootstrap"

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
      <div>
        Name
      </div>
      <input />
      <div>
        Username
      </div>
      <input />
      <div>
        Email
      </div>
      <input/>
      <div>
        Password
      </div>
      <input />
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
    <div>
      <button>Cancel</button>
      <button>Save</button>
    </div>
    </Container>
    </>
  )
}
