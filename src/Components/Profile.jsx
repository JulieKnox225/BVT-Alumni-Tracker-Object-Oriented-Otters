import { Col, Row, Container } from "react-bootstrap"
import { MDBIcon } from 'mdb-react-ui-kit'
import FakeData from './TempData/FakeData'
import { useParams } from "react-router-dom"

export const Profile = () => {

    const { username } = useParams();

    const profile = FakeData.find((name) => name.firstName === username);
    
    if(!profile) {
        return <div>User not found</div>
    }
  return (
    <>
    <Container fluid className="profile-page-container">
    <Row >
    <Col>
        <div className="profile-pic">
            <h4 className="profile-name">{profile.firstName} {profile.lastName}</h4>
            <img className="default-profile-edit-pic" src="/images/pic.png" alt="Default profile picture" />
        </div>
            <h4 className="profile-email">@{profile.username}</h4>
        <div className="contact-header">
            Contact Info
        </div>
        <div className="contact-container">
          <MDBIcon far icon="envelope" />
          <MDBIcon fas icon="phone" />
          <MDBIcon fab icon="linkedin" />
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
        {profile.achievements.map((achievement, index) => (
                    <div className="profile-achievements" key={index}>{achievement}</div>
                  ))}
        </div>
        
    </Col>
    </Row>
    </Container>
    </>
  )
}
