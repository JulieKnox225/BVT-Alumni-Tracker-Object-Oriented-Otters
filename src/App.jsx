import { Route, Routes } from 'react-router-dom'
import { AddEntryPage } from './Components/AddEntryPage'
import { Login } from './Components/Login'
import { Navbar } from './Components/Navbar'
import { SearchPage } from './Components/SearchPage'
import { Footer } from './Components/Footer'
import { ForgotPassword } from './Components/ForgotPassword'
import { Home } from './Components/Home'
import { Register } from './Components/Register'

function App() {
  
  return (
    <>
    <div className='site--container'>
      <Navbar />
      <Routes>
        <Route path='/' element ={ <Home />} />
        <Route path='/Login' element={ <Login/> } />
        <Route path='/AddEntryPage' element ={ <AddEntryPage />} />
        <Route path='/SearchPage' element= { <SearchPage /> } />
        <Route path ='/ForgotPassword' element = {<ForgotPassword/>}/>
        <Route path='/Register' element= {< Register/> } />
      
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
