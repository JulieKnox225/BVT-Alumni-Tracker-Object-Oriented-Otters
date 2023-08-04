import avatar from "/images/default-profile-pic.jpg"
import { useState } from 'react';
import { ModalBody } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PropTypes from "prop-types";

export const IDCards = (props) => {
  const {
    firstName, 
    lastName, 
    email, 
    degree, 
    additionalInfo, 
    experience, 
    achievements, 
    skills
  } = props

  //Modal state
  const [smShow, setSmShow] = useState(false);

  return (
    
    <div className="outer-id-card">
      <div className='inner-id-card'>
        <a href='/profile'>
        <img className="avatar-for-search" src={avatar}  />
        </a>
        <div className='card--stats'>
            <p className='id--fullName'>{firstName} {lastName}</p>
            <p>{email}</p>
            <p>{phoneNumber}</p>
            <Button style={{color: 'white', backgroundColor: '#E21304'}}
              variant='link' 
              onClick={() => setSmShow(true)}
              className='me-2'>
                  More Info
              </Button>

          <Modal 
            size="lg"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="contained-modal-title-vcenter"
            
            centered>
              
            <Modal.Header closeButton className="modal-background">
              
              <Modal.Title>
                {firstName} {lastName}
              </Modal.Title>
            </Modal.Header>
            <ModalBody className="modal-background">
              <p>
                <strong>Highest Degree: </strong>
                <br/>
                {degree}
                </p>
                {achievements && 
                  (
                  <div className="id-text">
                  <strong>Achievements:</strong> 
                  <p>{achievements}</p>
                  </div>
                  )
                }
              <p>
                <strong>Projects: </strong>
                <br/>
                {projects}
              </p>
              <p>
                <strong>Skills:</strong>
                <br />
                {skills}
              </p>
              {recommendations && 
                <p>
                  <strong>Recommendations:</strong>
                  <br />
                  {recommendations}
                </p>
              }
            </ModalBody>
          </Modal>
        </div>
      </div>
    </div>
  )
}

IDCards.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string,
  degree: PropTypes.string,
  additionalInfo: PropTypes.string,
  experience: PropTypes.string,
  achievements: PropTypes.string,
  skills: PropTypes.string,
};