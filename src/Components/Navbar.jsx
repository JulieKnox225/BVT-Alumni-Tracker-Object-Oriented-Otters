import { useState, useEffect } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

export const Navbar = () => {
  const [theme, setTheme] = useState('light')
 const toggleTheme = () => {
   if (theme === 'light') {
     setTheme ('dark');
   } else{
     setTheme('light');
   }
 }
 useEffect(()=> {
   document.body.className = theme;
 }, [theme]);
 return (
   <div>
     <nav className='nav-home'>
     <Dropdown>
       <Dropdown.Toggle className='drop' variant='secondary' id="dropdown-button-dark-example1">
       </Dropdown.Toggle>
       <Dropdown.Menu variant="dark">
         <Dropdown.Item href="/">Home</Dropdown.Item>
         <Dropdown.Item href="/SearchPage">Search Page</Dropdown.Item>
         <Dropdown.Item href="/AddEntryPage">Add Entry</Dropdown.Item>
         <Dropdown.Item href="/Profile">Profile</Dropdown.Item>
         <Dropdown.Item href="/EditProfile">Edit Profile</Dropdown.Item>
         <Dropdown.Item href="/Register">Create Profile</Dropdown.Item>

       </Dropdown.Menu>
     </Dropdown>
       <a className={`App ${theme}`}>
       <button className = "light-dark-btn"onClick={toggleTheme}></button>
       </a>
       <a href= "/" className="home-button">
       <h2 className="home-button-text">BVT Alumni Tracker</h2>
       </a>
       <a href='/login' className='login-button'>
       <p className="login--text">Login</p>
       </a>
       </nav>
   </div>
 )
}
