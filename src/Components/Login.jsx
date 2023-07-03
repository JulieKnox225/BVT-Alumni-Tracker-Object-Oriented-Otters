import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '../api/axios';
import { MDBSpinner } from 'mdb-react-ui-kit';
import useAuth from '../hooks/useAuth';
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
  const userRef = useRef();
  
  const { setAuth } = useAuth();

  //Controls when to send request
  const [enabled, setEnabled] = useState(false);

  //Due to the users database table consisting of (id, user, password), the email field is being submitted as 'user'
  const [input, setInput] = useState(
    {
      user: '',
      password: ''
    }
  );
  
  useEffect(() => {
    userRef.current.focus();
  }, []);

  const fetchLogin = () => {
    setEnabled(false);
    return axios.post('/login', input, { withCredentials: true })
  }

  const { data, isError, error, isLoading } = useQuery('login', fetchLogin, { enabled, retry: false });

  if(data) {
    console.log(data.data.data); //checking if it does contain access token
    //data.data.data contains access token but it is not being saved here
    setAuth(prev => ({ ...prev, accessToken: data.data.data}))
    return <Navigate to={'/'} />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnabled(true);
  }

  return (
    <MDBContainer fluid className='login-container'>

    <MDBRow className='d-flex justify-content-center align-items-center h-100' style={{borderRadius: '1rem', maxWidth: '400px'}} onSubmit={e => handleSubmit(e)}>
      {/*Can you please style this! :)*/}
      { isLoading && <MDBSpinner role = "status">
        <span className='visually-hidden'>Loading...</span> </MDBSpinner> }
  
      { isError && 
          <p className = "error">{error.response.data.message}</p> 
        }

        <MDBCol col='12'>
        <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
        
        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>
        {/* type was email but changed to text for debug */}
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address'      id='formControlLg' type='email' size="lg" ref={userRef} value={input.user} 
        onChange={e => setInput(prev => ({...prev, user: e.target.value}))}/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={input.password} onChange={e => setInput(prev => ({...prev, password: e.target.value}))}/>

        <p className="small mb-3 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg'>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don&apos;t have an account? <a href="#!" className="text-white-50 fw-bold">Sign Up</a></p>
              </div>
              
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

