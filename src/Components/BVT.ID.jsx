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
              
            <Modal.Header closeButton style={{color: 'white', backgroundColor: '#2a2e30'}}>
              
              <Modal.Title>
                {firstName} {lastName}
              </Modal.Title>
            </Modal.Header>
            <ModalBody style={{color: 'white', backgroundColor: '#E21304'}}>
              <p>
                <strong>Highest Degree: </strong>
                <br/>
                {degree}
                </p>
                {additionalInfo && 
                  (
                  <div className="id-text">
                  <strong>Additional Information:</strong> 
                  <p>{additionalInfo}</p>
                  </div>
                  )
                }
              <p>
                <strong>Experience: </strong>
                <br/>
                {experience}
                </p>
              <p>
                <strong>Achievements:</strong>
              </p>
                <ul className="id-text">
                  {achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
                <p>
                <strong>Skills:</strong>
              </p>
                <ul className="id-text">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
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