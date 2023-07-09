import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useEffect, useState } from 'react';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { useQuery } from 'react-query';

export const AddEntryPage = () => {  
  //Replacing: additionalInfo -> projects
  const [formData, setFormData] = useState(
    {
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      degree: '',
      projects: '',
      experience: '',
      achievements: '',
      skills: ''
    }
  );

  //Controls when to send request
  const [enabled, setEnabled] = useState(false);

  //allows for axios interceptors which in turn allows refresh tokens for access
  const axiosPrivate = useAxiosPrivate();

  const { data, isError, error, isLoading } = useQuery('addEntry', fetchAddEntry, { enabled });

  function handleChange(e) {
    e.preventDefault();

    const {name, value} = e.target
    
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        [name]: value
      }
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    setEnabled(true);
  }

  function fetchAddEntry() {
    setEnabled(false);

    return axiosPrivate.post('/', formData);
  }

  useEffect(() => {
    // resets data field
    setFormData({
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
      degree: '',
      projects: '',
      experience: '',
      achievements: '',
      skills: ''
    });
  }, [data, error]);

  return (

    <div className="add-entry-form">
      { isLoading && 
        <MDBSpinner role = "status">
          <span className='visually-hidden'>Loading...</span> 
        </MDBSpinner> 
      }
      { isError && 
        <p className = "error">{error.message || error.response.data.message.name || error.response.data.message}</p> 
      }

      <h4 style={{ textAlign: 'center', color: "white", marginTop: '75px' }}>Add Entry Page</h4>
      <div style={{ display: 'flex', justifyContent: 'center', color: 'white', marginBottom: '55px'}}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>First Name:</label>
              <input   
                className="add-entry"
                name="firstName"
                type="text"
                placeholder="John"
                required
                onChange={e => handleChange(e)}
                value={formData.firstName}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                className="add-entry"
                name="lastName"
                type="text"
                placeholder="Doe"
                required
                onChange={e => handleChange(e)}
                value={formData.lastName}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Phone Number:</label>
              <input
                className="add-entry"
                name="phoneNumber"
                type="text"
                placeholder="(555)-555-5555"
                required
                onChange={e => handleChange(e)}
                value={formData.phoneNumber}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                className="add-entry"
                name="email"
                type="email"
                placeholder="JohnDoe@email.com"
                required
                onChange={e => handleChange(e)}
                value={formData.email}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px'}}>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input
                className="add-entry"
                name="degree"
                type='text'
                onChange={e => handleChange(e)}
                value={formData.degree}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="projects">Projects:</label>
              <textarea
                className="add-entry"
                name="projects"
                onChange={e => handleChange(e)}
                value={formData.projects}
              />
            </div>
            <div>
              <label htmlFor="experience">Experience:</label>
              <textarea
                className="add-entry"
                name="experience"
                onChange={e => handleChange(e)}
                value={formData.experience}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="achievements">Achievements:</label>
              <textarea
                className="add-entry"
                name="achievements"
                onChange={e => handleChange(e)}
                value={formData.achievements}
              />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="skills">Skills:</label>
              <textarea
                className="add-entry"
                name="skills"
                onChange={e => handleChange(e)}
                value={formData.skills}
              />
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button type="submit">Add New Alumni</button>
          </div>
        </form>
      </div>
    </div>

  )
}
