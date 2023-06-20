import { Route, Routes } from 'react-router-dom'
import { AddEntryPage } from './Components/AddEntryPage'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'
import { SearchPage } from './Components/SearchPage'
import { Footer } from './Components/Footer'
import { ForgotPassword } from './Components/ForgotPassword'
import { Home } from './Components/Home'
import { Register } from './Components/Register'
import { Profile } from './Components/Profile'

function App() {
  
  return (
    <>
    <div className='site--container'>
      <Navbar />
      <Routes>
        <Route path='/' element ={ <Home />} />
        <Route path='/login' element={ <Login/> } />
        <Route path='/addEntryPage' element ={ <AddEntryPage />} />
        <Route path='/searchPage' element= { <SearchPage /> } />
        <Route path ='/forgotPassword' element = {<ForgotPassword/>}/>
        <Route path='/register' element= {< Register/> } />
        <Route path='/profile' element= {< Profile/> } />
      
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
