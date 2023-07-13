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
import { createContext, useState } from "react"; 
import ReactSwitch from 'react-switch'
import { EditProfile } from './Components/EditProfile'
import useAuth from './hooks/useAuth'

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState("dark")
  const { auth, setAuth } = useAuth();

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <Router>

      <ThemeContext.Provider value={{theme, toggleTheme}}> {/* Toggle Theme  */}
        <div className='site--container' id = {theme}>
          <Navbar />
          
          <Routes>
            <Route element={<Outlet context={{auth, setAuth}}/>}>
              <Route path='/' element ={ <Home />} />
              {/* <<<<<<< Updated upstream */}
              <Route path='/login' element={ <Login/> } />
              <Route path='/addEntryPage' element ={ <AddEntryPage />} />
              <Route path='/searchPage' element= { <SearchPage /> } />
              <Route path ='/forgotPassword' element = {<ForgotPassword/>}/>
              <Route path='/register' element= {<Register/> } />
              <Route path='/profile' element= {<Profile/> } />
              <Route path='/editProfile' element= {<EditProfile />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </Router>
  )
}

export default App
