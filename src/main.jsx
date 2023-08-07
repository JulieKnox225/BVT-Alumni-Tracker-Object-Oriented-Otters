import React from 'react'
import ReactDOM from 'react-dom/client'
import App  from './App.jsx'
import './index.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { QueryClientProvider, QueryClient } from 'react-query';
import  { ThemeProvider } from './context/ThemeContext';
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <ThemeProvider>
          <App />
          </ThemeProvider>
        </AuthProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
