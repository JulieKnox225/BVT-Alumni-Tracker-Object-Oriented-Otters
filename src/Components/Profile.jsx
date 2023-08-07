import { Col, Row, Container } from "react-bootstrap";
import { MDBIcon } from 'mdb-react-ui-kit';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import { useQuery } from "react-query";
import { Link } from "react-router-dom";


export const Profile = () => {
    //allows for axios interceptors which in turn allows refresh tokens for access
    const axiosPrivate = useAxiosPrivate();

    const { data, isLoading, isError, error } = useQuery('fetchProfile', fetchProfile);

    function fetchProfile() {
        return axiosPrivate.get(`/search?search=id&type=id`);
    }

  return (
    <>
        { isLoading && 
            <MDBContainer fluid >
                <MDBRow className='login-d-flex justify-content-center align-items-center h-100'>
                    <MDBSpinner role = "status">
                        <span className='visually-hidden'>Loading...</span> 
                    </MDBSpinner> 
                </MDBRow>
            </MDBContainer>
        }
        { isError &&
            <p>{ error?.response?.data?.message == 'No records found!' 
                ? <p>No records found! Please add profile <Link to={'/addEntryPage'}>here</Link></p> 
                : error?.response?.data?.message || error?.message }
            </p>
        }

        {data &&
            <Container fluid className="profile-page-container">
                <Row >
                    <Col>
                        <div className="profile-pic">
                            <h4 className="profile-name">{data.data.data[0].firstName} {data.data.data[0].lastname}</h4>
                            <img className="default-profile-edit-pic" src="images/pic.png" alt="Default profile picture" />
                        </div>
                            <h4 className="profile-email">{data.data.data[0].email}</h4>
                        <div className="contact-header">
                            Contact Info
                        </div>
                        <div className="contact-container">
                            <MDBIcon far icon="envelope" />
                            <MDBIcon fas icon="phone" /> {data.data.data[0].phoneNumber}
                            <MDBIcon fab icon="linkedin" />
                        </div>
                    </Col>
                    <Col>
                        <div className="about-me-header"> 
                            About me 
                        </div>
                        <div className="about-me-text">
                            {typeof data.data.data[0].skills == 'object' ?
                                data.data.data[0].skills.map((skill, index) => (
                                    <div className="profile-achievements" key={index}>{skill}</div>
                                )) :
                                data.data.data[0].skills
                            }
                        </div>
                        <div className="projects-header"> 
                            Projects 
                        </div>
                        <div className="projects-text">
                            {typeof data.data.data[0].projects == 'object' ?
                                data.data.data[0].projects.map((project, index) => (
                                    <div className="profile-achievements" key={index}>{project}</div>
                                )) : 
                                data.data.data[0].projects
                            }
                        </div>
                        <div className="achievements-header"> 
                            Bay Valley Tech
                        </div>
                        <div className="achievements-text">
                            {typeof data.data.data[0].achievements == 'object' ? 
                                data.data.data[0].achievements.map((achievement, index) => (
                                    <div className="profile-achievements" key={index}>{achievement}</div>
                                )) :
                                data.data.data[0].achievements
                            }
                        </div>
                        
                    </Col>
                </Row>
            </Container>
        }

        {!data && !isError &&
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
