import { Route, Routes } from 'react-router-dom'
import { AddEntryPage } from './Components/AddEntryPage'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'
import { SearchPage } from './Components/SearchPage'
import { Footer } from './Components/Footer'
import { ForgotPassword } from './Components/ForgotPassword'
import { Home } from './Components/Home'
import { Register } from './Components/Register'
// <<<<<<< Updated upstream
import { Profile } from './Components/Profile'
import { createContext, useState } from "react"; 
import ReactSwitch from 'react-switch'

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark")

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>

      <ThemeContext.Provider value={{theme, toggleTheme}}> {/* Toggle Theme  */}
        <div className='site--container' id = {theme}>
          <Navbar />
          <div className='switch'>
            <label> {theme === 'light' ? "Light Mode" : "Dark Mode" }</label>
            <ReactSwitch  onChange={toggleTheme} checked ={theme === "dark"}/>
          </div>
          <Routes>
            <Route path='/' element ={ <Home />} />
            {/* <<<<<<< Updated upstream */}
            <Route path='/login' element={ <Login/> } />
            <Route path='/addEntryPage' element ={ <AddEntryPage />} />
            <Route path='/searchPage' element= { <SearchPage /> } />
            <Route path ='/forgotPassword' element = {<ForgotPassword/>}/>
            <Route path='/register' element= {< Register/> } />
            <Route path='/profile' element= {< Profile/> } />
          </Routes>
        </div>
        <Footer />
      </ThemeContext.Provider>
    </>
  )
}

export default App
