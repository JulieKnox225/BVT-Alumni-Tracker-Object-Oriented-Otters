<<<<<<< HEAD
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { AddEntryPage } from './Components/AddEntryPage';
import { Login } from './Components/Login';
import { Navbar } from './Components/Navbar';
import { SearchPage } from './Components/SearchPage';
import { Footer } from './Components/Footer';
import { ForgotPassword } from './Components/ForgotPassword';
import { Home } from './Components/Home';
import { Register } from './Components/Register';
import { Profile } from './Components/Profile';
import { createContext, useState } from "react"; 
import ReactSwitch from 'react-switch';
import { EditProfile } from './Components/EditProfile';
import useAuth from './hooks/useAuth';
=======
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import { AddEntryPage } from './Components/AddEntryPage'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'
import { SearchPage } from './Components/SearchPage'
import { Footer } from './Components/Footer'
import { ForgotPassword } from './Components/ForgotPassword'
import { Home } from './Components/Home'
import { Register } from './Components/Register'
import { Profile } from './Components/Profile'
// import { createContext } from "react"; 
// import ReactSwitch from 'react-switch'
import { EditProfile } from './Components/EditProfile'
import useAuth from './hooks/useAuth'
import { useContext } from 'react'
import { ThemeContext } from './context/ThemeContext'
// import ThemeContextProvider from './context/ThemeContext'
// import ThemeContextProvider from './context/ThemeContext'
>>>>>>> origin/AV-front-end-branch

// export const ThemeContext = createContext();

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)
  console.log('theme', theme);
  // const [theme, setTheme] = useState('light')
  const { auth, setAuth } = useAuth();
 
  // const toggleTheme = () => {
  //   setTheme((curr) => (curr === "light" ? "dark" : "light"));
  // };

  return (
    <Router>
<<<<<<< HEAD

      <ThemeContext.Provider value={{theme, toggleTheme}}> {/* Toggle Theme  */}
        <div className='site--container' id = {theme}>
          <Navbar />

          <Routes>
              <Route path='/' element ={ <Home />} />
=======
      {/* <ThemeContext.Provider value={{theme, toggleTheme}}>  */}
        <div className='App' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
        <Navbar/>
      {/* <div className='switch'>
          <ReactSwitch  onChange={toggleTheme} checked ={theme === "dark"}/>
          <label> {theme === 'light' ? "Light Mode" : "Dark Mode" }</label>
      </div> */}
      <div className='text'>Its a {isDark ? "Dark" : "Light"} theme</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
          <div className='logo'>
          <a href='/'><img className='bvt--logo' src='images/bvt.png' alt="Logo saying Bay Valley Tech with a lightbulb" /></a>
          </div>
          <Routes>
      {/* <ThemeContextProvider> */}
            <Route element={<Outlet context={{auth, setAuth}}/>}>
              <Route path='/' element  =  {<Home />} />
                
              {/* </ThemeContext.Provider> */}
                 {/* }
                 /> */}
>>>>>>> origin/AV-front-end-branch
              {/* <<<<<<< Updated upstream */}
              <Route path='/login' element={ 
                // <ThemeContext.Provider value={{theme, toggleTheme}}>
                   <Login/>
                // </ThemeContext.Provider>
               } />
              <Route path='/addEntryPage' element ={ <AddEntryPage />} />
              <Route path='/searchPage' element= { <SearchPage /> } />
              <Route path ='/forgotPassword' element = {<ForgotPassword/>}/>
              <Route path='/register' element= {<Register/> } />
              <Route path='/profile' element= {<Profile/> } />
              <Route path='/editProfile' element= {<EditProfile />} />
          </Routes>
        <Footer />
        </div>
      {/* </ThemeContext.Provider> */}
    </Router>

      // </ThemeContext.Provider>
  )
}

export default App
