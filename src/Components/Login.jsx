import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '../api/axios';
import { MDBSpinner } from 'mdb-react-ui-kit';
import useAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';

export const Login = () => {
  //Due to the users database table consisting of (id, user, password), the email field is being submitted as 'user'
  const [input, setInput] = useState(
    {
      user: '',
      password: ''
    }
  );

  //Sets input field focus
  const userRef = useRef();
  
  //Sets access token in storage
  const { setAuth } = useAuth();

  //Controls when to send request
  const [enabled, setEnabled] = useState(false);

  const { data, isError, error, isLoading } = useQuery('login', fetchLogin, { enabled, retry: false });
  
  useEffect(() => {
    userRef.current.focus();
  }, []);

  function fetchLogin() {
    setEnabled(false);
    return axios.post('/login', input, { withCredentials: true })
  }

  function handleSubmit(e) {
    e.preventDefault();
    setEnabled(true);
  }

  if(data) {
    setAuth(prev => ({ ...prev, accessToken: data.data.data}))
    return <Navigate to={'/profile'} />;
  }

  return (
    <MDBContainer fluid className='login-container'>
      <form onSubmit={e => handleSubmit(e)}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{borderRadius: '1rem', maxWidth: '400px'}}>
        { isLoading && 
          <MDBSpinner role = "status">
            <span className='visually-hidden'>Loading...</span> 
          </MDBSpinner> 
        }
    
          { isError && 
            <p className = "error">{error.response?.data?.message || error.message?.message  || error.message }</p> 
          }

          <MDBCol col='12'>
            <MDBCard className='login-card' style={{borderRadius: '1rem', maxWidth: '400px'}}>
              <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                <p className="login-text">Please enter your login and password</p>
                {/* type was email but changed to text for debug */}
                <MDBInput 
                  wrapperClass='mb-4 mx-5 w-100' 
                  labelClass='input-text' 
                  label='Email address' 
                  id='formControlLg' 
                  type='text'
                  color='white'
                  size="lg" 
                  ref={userRef} 
                  value={input.user} 
                  onChange={e => setInput(prev => ({...prev, user: e.target.value}))}
                />
                <MDBInput 
                  wrapperClass='mb-4 mx-5 w-100' 
                  labelClass='input-text' 
                  label='Password' 
                  id='formControlLg' 
                  type='password' 
                  size="lg" 
                  value={input.password} 
                  onChange={e => setInput(prev => ({...prev, password: e.target.value}))}
                />
                <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                  Login
                </MDBBtn>
                
                <p className="connect-login-p">Connect with Us!</p>
                
                <div className='login-icons'>
                  <a href = "https://www.bayvalleytech.com/">
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'green' }}>
                      <MDBIcon fab icon='google' size="lg"/>
                    </MDBBtn>
                  </a>

                  <a href ="https://www.facebook.com/BayValleyTech/">
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#4040ff' }}>
                      <MDBIcon fab icon='facebook-f' size="lg"/>
                    </MDBBtn>
                  </a>

                  <a href='https://www.linkedin.com/company/bay-valley-tech/mycompany/'>
                    <MDBBtn tag='a' color='none' className='m-3' style={{ color: '#0A66C2' }}>
                      <MDBIcon fab icon='linkedin' size="lg"/>
                    </MDBBtn>
                  </a>
                </div>

                <div>
                  <p className="login-text">Don&apos;t have an account? <Link to = '/register' className="sign-up-login">Sign Up</Link></p>
                  <p><Link  to = '/forgotPassword' className="fp-login">Forgot password?</Link></p>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
}