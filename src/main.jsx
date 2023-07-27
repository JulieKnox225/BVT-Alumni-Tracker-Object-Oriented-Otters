import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './App.jsx'
import './index.css'
import * as mdb from 'mdb-react-ui-kit'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
// import 'mdb-ui-kit/mdb-ui-kit/src/scss/mdb.free.scss';
window.mdb = mdb;
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { QueryClientProvider, QueryClient } from 'react-query';
import  { ThemeProvider } from './context/ThemeContext'; //Dark Theme Page
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          {/* Dark Theme Wrapper */}
          <ThemeProvider> 
          <App />
          </ThemeProvider>
          {/* End of Dark Theme Wrapper */}
        </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
