import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {  Link } from 'react-router-dom';
import { useState } from 'react';
import { useQuery } from 'react-query';
import axios from '../api/axios';

export const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: ''
  });

  const fetchLoginEndpoint = () => {
    return axios.post('/login', input)
  }

  const { isError, error } = useQuery('login', fetchLoginEndpoint);

  return (
    <Form className='login--container' style={{marginTop: '45px'}}>
      <div>
      <Form.Group  className="form-basic-email" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={input.email} onChange={e => setInput(prev => ({...prev, email: e.target.value}))}/>
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



