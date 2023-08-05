
import Dropdown from 'react-bootstrap/Dropdown';
import  { useContext } from 'react';
import { ThemeContext } from '../App';

export const Navbar = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  
  return (
   <div>
    {/* <ThemeContext.Provider value={{theme, toggleTheme}}>  */}
   <div className='App'>
     <nav className='nav-home'>
      <Dropdown>
       <Dropdown.Toggle className='drop' variant='secondary' id="dropdown-button-dark-example1">
       </Dropdown.Toggle>
       <Dropdown.Menu variant="dark">
         <Dropdown.Item href="/">Home</Dropdown.Item>
         <Dropdown.Item href="/searchPage">Search Page</Dropdown.Item>
         <Dropdown.Item href="/addEntryPage">Add Entry</Dropdown.Item>
         <Dropdown.Item href="/profile">Profile</Dropdown.Item>
         <Dropdown.Item href="/editProfile">Edit Profile</Dropdown.Item>
         <Dropdown.Item href="/register">Create Profile</Dropdown.Item>
       </Dropdown.Menu>
      </Dropdown>

       <a href= "/" className="home-button">
       <h2 className="home-button-text">BVT Alumni Tracker</h2>
       </a>

      <div className='nav-right'>
       <div className='toggler'>
          <div 
            className="toggler--slider"
            onClick={toggleTheme}
          >
            <div className="toggler--slider--circle">
            </div>
          </div>
        </div>
      <a href='/login' className='login-button'>
       <p className="login--text">Login</p>
      </a>
      </div>
// ThemeContext.Provider ? 
    </nav>
   </div>

 )
}
