import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {  Link, Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '../api/axios';
import { MDBSpinner } from 'mdb-react-ui-kit';
import useAuth from '../hooks/useAuth';


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
    <Form className='login--container' style={{marginTop: '45px'}} onSubmit={e => handleSubmit(e)}>
      {/*Can you please style this! :)*/}
      { isLoading && <MDBSpinner role = "status">
        <span className='visually-hidden'>Loading...</span> </MDBSpinner> }
        
      { isError && 
          <p className = "error">{error.response.data.message}</p> 
      }
      <div>
      <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        {/* type was email but changed to text for debug */}
        <Form.Control type="text" placeholder="Enter email" ref={userRef} value={input.user} onChange={e => setInput(prev => ({...prev, user: e.target.value}))}/>
        <Form.Text className="login-text">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="form-basic-password" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={input.password} onChange={e => setInput(prev => ({...prev, password: e.target.value}))}/>
        </Form.Group>
      
      <Button className = "btn-el"variant="primary" type="submit">
        Login
      </Button>
     <Link to = "/ForgotPassword">
      <Button className = "btn-el" variant="danger" type="submit">
        Forgot Password
      </Button>
     </Link>
      <Link to = "/Register">
      <Button className = "btn-el"variant="secondary" type="submit">
       New User
      </Button>
      </Link>
      </div>
    </Form>
  
  );
}



