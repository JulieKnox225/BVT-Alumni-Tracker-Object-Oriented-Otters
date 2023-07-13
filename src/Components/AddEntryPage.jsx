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

  function handleChange(e){
      e.preventDefault();
      const {name, value} = e.target
      setFormData(prevFormData => {
        return {
          ...prevFormData, 
          [name]: value
        }
      }) 
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabled(true);
  };

  const fetchAddEntry = () => {
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
      { data && 
        <h2>{data.message}</h2>
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
                onChange={handleChange}
                value={formData.firstName}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                className="add-entry"
                type="text"
                placeholder="Doe"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label>Phone Number:</label>
              <input
                className="add-entry"
                type="text"
                placeholder="(555)-555-5555"
                onChange={handleChange}
                name="phoneNumber"
                value={formData.phoneNumber}
              />
            </div>
            <div>
              <label>Email:</label>
              <input
                className="add-entry"
                type="email"
                placeholder="JohnDoe@email.com"
                onChange={handleChange}
                name="email"
                value={formData.email}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px'}}>
            <div>
              <label htmlFor="degree">Degree:</label>
              <input
                className="add-entry"
                type='text'
                name="degree"
                value={formData.degree}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="projects">Projects:</label>
              <textarea
                className="add-entry"
                name="projects"
                value={formData.projects}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="experience">Experience:</label>
              <textarea
                className="add-entry"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="achievements">Achievements:</label>
              <textarea
                className="add-entry"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              />
            </div>
            <div style={{ marginRight: '10px' }}>
              <label htmlFor="skills">Skills:</label>
              <textarea
                className="add-entry"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
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