import React from "react"

export const AddEntryPage = () => {
    
    const [formData, setFormData] = React.useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            degree: '',
            additionalInfo: '',
            experience: '',
            achievements: '',
            skills: ''
        }
    )

    function handleChange(e){
        e.preventDefault
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
        console.log('Form Data:', formData);
        // submit to Database 
        setFormData({
          firstName: '',
          lastName: '',
          phoneNumber: '',
          email: '',
          degree: '',
          additionalInfo: '',
          experience: '',
          achievements: '',
          skills: ''
        });
      };
  
    return (

      <div className="add-entry-form">
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
                required
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
                required
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
              <label htmlFor="additionalInfo">Additional Info:</label>
              <textarea
                className="add-entry"
                name="additionalInfo"
                value={formData.additionalInfo}
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
