import { Col, Row, Container } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useQuery } from "react-query";


export const Profile = () => {
    const axiosPrivate = useAxiosPrivate();

    const fetchProfile = () => {
        return axiosPrivate.get('/');
    }

    const { data, isLoading, isError, error } = useQuery('fetchProfile', fetchProfile);

  return (
    <>
        { isLoading && <MDBSpinner role = "status">
            <span className='visually-hidden'>Loading...</span> </MDBSpinner> 
        }

        { isError && 
            <p className = "error">{error.response.data.message}</p> 
        }

        {data && 
            <Container fluid className="profile-page-container">
                <Row >
                    <Col>
                        <div className="profile-pic">
                            <h4 className="profile-name">{data.data.data.firstName} {data.data.data.lastname}</h4>
                            <img className="default-profile-edit-pic" src="images/pic.png" alt="Default profile picture" />
                        </div>
                            <h4 className="profile-email">{data.data.data.email}</h4>
                        <div className="contact-header">
                            Contact Info
                        </div>
                        <div className="contact-container">
                            <MDBIcon far icon="envelope" />
                            <MDBIcon fas icon="phone" /> {data.data.data.phoneNumber}
                            <MDBIcon fab icon="linkedin" />
                        </div>
                    </Col>
                    <Col>
                        <div className="about-me-header"> 
                            About me 
                        </div>
                        <div className="about-me-text">
                            {data.data.data.skills}
                        </div>
                        <div className="projects-header"> 
                            Projects 
                        </div>
                        <div className="projects-text">
                            {data.data.data.projects}
                        </div>
                        <div className="achievements-header"> 
                            Bay Valley Tech
                        </div>
                        <div className="achievements-text">
                            {data.data.data.achievements}
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        }

        {!data && 
            <Container fluid className="profile-page-container">
                <Row >
                    <Col>
                        <div className="profile-pic">
                            <h4 className="profile-name">Jane Smith</h4>
                            <img className="default-profile-edit-pic" src="images/pic.png" alt="Default profile picture" />
                        </div>
                            <h4 className="profile-email">User Name</h4>
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
                            Achievements here
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        }
    </>
  )
}
