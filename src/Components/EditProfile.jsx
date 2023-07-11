import { Col, Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import { MDBIcon } from "mdb-react-ui-kit";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import { MDBSpinner } from 'mdb-react-ui-kit';
import { MDBContainer, MDBRow } from 'mdb-react-ui-kit';

//4 to 24 characters, must begin with a letter, letters, numbers, underscores, and hyphens allowed.
const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}/;

export const EditProfile = () => {
  const axiosPrivate = useAxiosPrivate();

  //Confirms if username is valid
  const [validName, setValidName] = useState(false);

  const [enabled, setEnabled] = useState(false);

  const [errorMessage, setErrorMessage] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({});

  const { data: profileData, isLoading: profileIsLoading, isError: profileIsError, error: profileError } = useQuery('fetchProfileInfo', fetchProfileInfo);

  const { data: updatedData, isLoading: updatedIsLoading, isError: updatedIsError, error: updatedError } = useQuery('fetchEditProfile', fetchEditProfile , { enabled });

  function fetchProfileInfo() {
    return axiosPrivate.get('/');
  }

  function fetchEditProfile() {
    setEnabled(false);
    return axiosPrivate.post('/profile', formData);
  }
  
  function handleChange(e) {
    e.preventDefault();

    const {name, value} = e.target;

    setFormData(prev => {
      return {
        ...prev,
        [name]: value
      }
    });
  }

  function handleCancel(e) {
    e.preventDefault();
    return <Navigate to={'/profile'} />;
  }
  
  //Checks if username is valid based on regex upon input change
  useEffect(() => {
    setValidName(USER_REGEX.test(formData?.user));
  }, [formData?.user]);

  //Fills in the input fields with retrieved data
  useEffect(() => {
    setFormData(profileData?.data?.data);
  }, [profileData]);

  useEffect(() => {
    setIsLoading(profileIsLoading || updatedIsLoading);
  }, [profileIsLoading, updatedIsLoading]);

  useEffect(() => {
    if(profileError == 'No Token!') {
      setErrorMessage('Please Log In!');
    } else {
      setErrorMessage( profileError?.message || updatedError?.response?.data?.message?.message);
    }
  }, [profileIsError, updatedIsError, updatedError, profileError]);

  if(updatedData) {
    return <Navigate to={'/profile'} />;
  }

  return (
    <>
      <Container fluid='true' className="profile-page-edit-container">
        
      { isLoading && 
            <MDBContainer fluid >
                <MDBRow className='login-d-flex justify-content-center align-items-center h-100'>
                    <MDBSpinner role = "status">
                        <span className='visually-hidden'>Loading...</span> 
                    </MDBSpinner> 
                </MDBRow>
            </MDBContainer>
      }

      { errorMessage &&
        <p className="error">{errorMessage}</p>
      }

      { !isLoading && 
        <>
        <Row>
          <Col>
            <div className="profile-pic-edit">
                <img style={{marginTop: '25px'}} className="default-profile-pic" src="images/pic.png" alt="Default profile picture" />
                {/* Not a real link, needs to be updated to some sort of modal/popup to change image */}
                <a href="/editImage">
                  <p className="edit-image-link">Click to change image</p>
                </a>
            </div>
            <h4 className="e-p-pic-text">Current Profile Picture</h4>
            
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
              First Name:
            </div>
            <input 
              className="e-p-input"
              name="firstName"
              type="text"
              value={formData?.firstName || ''}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-edit-prof">
            <div className="e-p-form-text">
              Last Name:
            </div>
            <input 
              className="e-p-input"
              name="lastName"
              type="text"
              value={formData?.lastName || ''}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-edit-prof">
            <div className="e-p-form-text">
              Username:
              <span className={validName ? "register-valid" : "register-hide"}>
                <i className="fa-solid fa-check"></i>
              </span>
              <span className={validName || !formData?.user ? "register-hide" : "register-invalid"}>
                <i className="fa-solid fa-x"></i>
              </span>
            </div>
            <input
              className="e-p-input"
              name="user"
              type="text"
              value={formData?.user || ''}
              onChange={e => handleChange(e)}
            />
            <p className={formData?.user && !validName ? "register-instructions" : "register-offscreen"}>
              <i className="fa-solid fa-circle-info"></i> <br />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, and hyphens allowed.
            </p>
          </div>
          <div className="form-edit-prof">
            <div className="e-p-form-text">
              Email:
            </div>
            <input
              className="e-p-input"
              name="email"
              type="email"
              value={formData?.email || ''}
              onChange={e => handleChange(e)}
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
              name="skills"
              type="text"
              value={formData?.skills || ''}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-edit-prof">
            <div className="e-p-form-text">
              Projects:
            </div>
            <textarea 
              className="e-p-textarea"
              name="projects"
              type="text"
              value={formData?.projects || ''}
              onChange={e => handleChange(e)}
            />
          </div>
          <div className="form-edit-prof">
            <div className="e-p-form-text">
              Bay Valley Tech:
            </div>
            <textarea 
              className="e-p-textarea"
              name="achievements"
              type="text"
              value={formData?.achievements || ''}
              onChange={e => handleChange(e)}
            />
          </div>
        </Col>
        </Row>
        <Row>
        <div className="e-p-buttons">
          {/* Can you please style this :)) */}
          <Link to={'/profile'} className="e-p-cancel">Cancel</Link>
          <button className="e-p-save" disabled={!validName} onClick={() => setEnabled(true)}>Save</button>
        </div>
        </Row>
        </>
      }
      </Container>
    </>
    
  )
}
