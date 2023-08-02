import React, { useContext } from 'react';
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
import { EditProfile } from './Components/EditProfile';
import useAuth from './hooks/useAuth';
import { ThemeContext } from './context/ThemeContext';
import ReactSwitch from 'react-switch';

function App() {
  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);
  console.log('theme', theme);
  const { auth, setAuth } = useAuth();

  return (
    <Router>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className='site--container' id={theme}>
          <Navbar />
          <div className='App' style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
            {/* Toggle Theme */}
            <div className='switch'>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
              <label> {theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
            </div>
            <div className='text'>It's a {isDark ? 'Dark' : 'Light'} theme</div>
            <button onClick={toggleTheme}>Toggle Theme</button>

            <div className='logo'>
              <a href='/'>
                <img
                  className='bvt--logo'
                  src='images/bvt.png'
                  alt='Logo saying Bay Valley Tech with a lightbulb'
                />
              </a>
            </div>

            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/addEntryPage' element={<AddEntryPage />} />
              <Route path='/searchPage' element={<SearchPage />} />
              <Route path='/forgotPassword' element={<ForgotPassword />} />
              <Route path='/register' element={<Register />} />
              <Route element={<Outlet context={{ auth, setAuth }} />}>
                <Route path='/profile' element={<Profile />} />
                <Route path='/editProfile' element={<EditProfile />} />
              </Route>
            </Routes>

            <Footer />
          </div>
        </div>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;
