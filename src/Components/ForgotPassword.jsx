import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from 'react-router-dom'
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

export const ForgotPassword = () => {

 return(
  <MDBContainer onSubmit={(e) => {e.preventDefault()
    console.log('sent email')}} fluid>
  <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Forgot Password</h2>
              <p className="text-white-50 mb-5">Enter the email address associated with your account,<br>
              </br>
              and we&apos;ll send a link to reset your password.</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <p className="small mb-3 pb-lg-2"><Link to = "/login" className="text-white-50" >Back to sign in</Link></p>
                <p>or</p>
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
                <p className="mb-0">Don&apos;t have an account? <Link to = "/register" className="text-white-50 fw-bold">Sign Up</Link></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
       </MDBContainer>
 )
}
{/* <Form>
<h1 className='h1-fpp'>Password Reset</h1>
<p className='p-fpp'>Enter the email address associated with your account,<br>
</br>
   and we&apos;ll send a link to reset your password.
</p>
<Form.Group  className="fp-email" controlId="formBasicEmail">
   <Form.Label className = "form-label">Email address</Form.Label>
   <Form.Control type="email" placeholder="Enter email" />
   <Form.Text className='p-text'>
     Well never share your email with anyone else.
   </Form.Text>
 </Form.Group>
 <Button type='submit' className='forgot-pw-submit'>Submit</Button>
</Form> */}