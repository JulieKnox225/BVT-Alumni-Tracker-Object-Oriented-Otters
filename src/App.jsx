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
import { EditProfile } from './Components/EditProfile'
import useAuth from './hooks/useAuth'
import { useContext } from 'react'//Dark-Mode
import { ThemeContext } from './context/ThemeContext'//Dark-Mode Component
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const [{theme, isDark}, toggleTheme] = useContext(ThemeContext)//Toggle/DarkTheme
 
  const { auth, setAuth } = useAuth();
 
  return (
    <Router>
          {/* Changes  background color - CSS Needs to be adjusted in Theme Component*/}
        <div className='App' style={{backgroundColor: theme.backgroundColor, color: theme.color}}>
    <Navbar/>
                {/*Dark Theme Logic and Theme Button.  */}
        <div className='text'>Its a {isDark ? "Dark" : "Light"} theme</div>
        <button onClick={toggleTheme}>Toggle Theme</button>
                  {/* End of Theme Button Logic */}
          <div className='logo'>
          <a href='/'><img className='bvt--logo' src='images/bvt.png' alt="Logo saying Bay Valley Tech with a lightbulb" /></a>
          </div>
    <Routes>
      <Route element={<Outlet context={{auth, setAuth}}/>}>
        <Route path='/' element  =  {<Home />} />
        {/* <<<<<<< Updated upstream */}
        <Route path='/login' element={ <Login/> } />
              <Route path='/addEntryPage' element ={ <AddEntryPage />} />
              <Route path='/searchPage' element= { <SearchPage /> } />
              <Route path ='/forgotPassword' element = {<ForgotPassword/>}/>
              <Route path='/register' element= {<Register/> } />
              <Route path='/profile' element= {<Profile/> } />
              <Route path='/editProfile' element= {<EditProfile />} />
              <Route path='/recoverPassword' element= {<ForgotPassword />} />
            </Route>
          </Routes>
        <Footer />
        </div>
    </Router>
  )
}

export default App
