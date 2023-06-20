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

const [login, setLogin] = useState(false)

const handleLogin = () => {
  setLogin(!login)
}

 return (
   <div>
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
       <a className={`App ${theme}`}>
       <button className="light-dark-btn"onClick={toggleTheme}></button>
       </a>
       <a href= "/" className="home-button">
       <h2 className="home-button-text">BVT Alumni Tracker</h2>
       </a>

      {/* Temp button to show how the login would change icons */}
       <a>
       <button className="light-dark-btn" onClick={handleLogin}></button>
       </a>
       {login ? 
        <a href= "/editProfile">
          <img className="nav-login-image" src="images/pic.png" alt="Default profile picture edit image" />
        </a> : <a href='/login' className='login-button'>
       <p className="login--text">Login</p>
       </a>}

       </nav>
   </div>
 )
}
