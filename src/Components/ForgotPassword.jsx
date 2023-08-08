import "@fortawesome/fontawesome-free/css/all.min.css";
import {
 
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  
}
from 'mdb-react-ui-kit';  //Forgot password card 

export const ForgotPassword = () => {

 return(

  <MDBContainer onSubmit={(e) => {e.preventDefault()
    console.log('sent email')}} fluid>
  <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='fp-card' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-4 text-uppercase">Forgot Password</h2>
              <p className="fp-text">Enter the email address associated with your account,<br>
              </br>
              and we&apos;ll send a link to reset your password.</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg"/>
              <p className=""><a className="fp-sign-in" href="/login">Back to sign in?</a></p>
                <p>or</p>
              <div>
                <p className="mb-0">Don&apos;t have an account? <a href="/register" className="fp-sign-up">Sign Up</a></p>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
       </MDBContainer>
 )
}
