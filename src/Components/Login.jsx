import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {  Link, Navigate } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useQuery } from 'react-query';
import axios from '../api/axios';
import { MDBSpinner } from 'mdb-react-ui-kit';
export const Login = () => {
  const userRef = useRef();

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

  const fetchLoginEndpoint = () => {
    setEnabled(false);
    return axios.post('/login', input, { withCredentials: true })
  }

  const { data, isError, error, isLoading } = useQuery('login', fetchLoginEndpoint, { enabled });

  if(data) {
    return <Navigate to={'/'} />;
  }

  return (
    <Form className='login--container' style={{marginTop: '45px'}} onSubmit={() => setEnabled(true)}>
      {/*Can you please style this! :)*/}
      { isLoading && <MDBSpinner role = "status">
        <span className='visually-hidden'>Loading...</span> </MDBSpinner> }
        
      { isError && 
          <p className = "error">{error.response.data.message}</p> 
      }
      <div>
      <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" ref={userRef} value={input.user} onChange={e => setInput(prev => ({...prev, email: e.target.value}))}/>
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
