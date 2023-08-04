import { useEffect, useRef, useState } from 'react';
import axios from '../api/axios';
import { useQuery } from 'react-query';
import { MDBSpinner } from 'mdb-react-ui-kit';
import { Navigate } from 'react-router-dom';

//4 to 24 characters, must begin with a letter, letters, numbers, underscores, and hyphens allowed.
const USER_REGEX = /^[a-zA-Z][a-zA-z0-9-_]{3,23}/;

//8 to 24 characters, must include uppercase and lowercase letters, a number, and a special characters: !, @, #, $, and %
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

export const Register = () => {
//Sets input field focus
const userRef = useRef();

//Sets error message focus
const errorRef = useRef();

const [formData, setFormData] = useState(
  {
    user: '',
    password: ''
  }
);

const [enabled, setEnabled] = useState(false);

const [matchPassword, setMatchPassword] = useState('');

//Boolean that shows if the username and password pass the regex and if the password confirmation matches
const [validName, setValidName] = useState(false);
const [validPassword, setValidPassword] = useState(false);
const [validMatch, setValidMatch] = useState(false);

//Sets the focus to control if error message needs to disappear
const [userFocus, setUserFocus] = useState(false);
const [passwordFocus, setPasswordFocus] = useState(false);
const [matchFocus, setMatchFocus] = useState(false);

const [errorMessage, setErrorMessage] = useState('');

const { data, isLoading, isError, error } = useQuery('createAccount', fetchRegister, { enabled });

//Sets the focus to username input upon mounting
useEffect(() => {
  userRef.current.focus();
}, []);

//Checks if username is valid based on regex upon input change
useEffect(() => {
  setValidName(USER_REGEX.test(formData.user));
}, [formData.user]);

//Checks is password and password confirmation matches and pass regex upon input change
useEffect(() => {
  setValidPassword(PWD_REGEX.test(formData.password));
  setValidMatch(formData.password === matchPassword);
}, [formData.password, matchPassword]);

//Removes error message if focus changes
useEffect(() => {
  setErrorMessage('');
}, [formData.user, formData.password, matchFocus]);


function fetchRegister() {
  setEnabled(false);

  return axios.post('/user', formData);
}

async function handleSubmit(e) {
  e.preventDefault();

  //Checks if still valid due to button disabling being hackable
  if(!USER_REGEX.test(formData.user) || !PWD_REGEX.test(formData.password)) {
    setErrorMessage("Invalid Entry.");
    return;
  }

  setEnabled(true);
}

if(data) {
  <Navigate to={'/login'} />
}
  return (
    <div className="register-body">
      <p ref={errorRef} className={errorMessage ? "register-errmsg" : "register-offscreen"} aria-live='assertive'>{errorMessage}</p>
      <form className="register-form" onSubmit={e => handleSubmit(e)}>
        <h4 className="sign-up">Sign Up</h4>
        <div className="form-body">
          { isLoading && 
            <MDBSpinner role = "status">
              <span className='visually-hidden'>Loading...</span> 
            </MDBSpinner> 
          }
          { isError && 
            <p className = "error">{error.response.data.message}</p> 
          }
          <div className="username">
            <label className="form__label" htmlFor="userName">
              UserName{" "}
              <span className={validName ? "register-valid" : "register-hide"}>
                <i className="fa-solid fa-check"></i>
              </span>
              <span className={validName || !formData.user ? "register-hide" : "register-invalid"}>
                <i className="fa-solid fa-x"></i>
              </span>
            </label>
            <input
              className="form__input"
              type="text"
              id="userName"
              placeholder="Username"
              ref={userRef}
              autoComplete='off'
              onChange={e => setFormData(prev => ({...prev, user: e.target.value}))}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby='uidnote'
              onFocus={() => setUserFocus(true)}
              onBlur={() => setUserFocus(false)}
              value={formData.user}
            />
            <p id='uidnote' className={userFocus && formData.user && !validName ? "register-instructions" : "register-offscreen"}>
              <i className="fa-solid fa-circle-info"></i> <br />
              4 to 24 characters.<br />
              Must begin with a letter.<br />
              Letters, numbers, underscores, and hyphens allowed.
            </p>
          </div>
          
          <div className="email">
            <label className="form__label" htmlFor="email">
              Email{" "}
            </label>
            <input
            
              className="form__input"
              type="email"
              id="email"
              placeholder="Email"
              
            />
          </div>

          <div className="password">
            <label className="form__label" htmlFor="password">
              Password{" "}
              <span className={validPassword ? "register-valid" : "register-hide"}>
                <i className="fa-solid fa-check"></i>
              </span>
              <span className={validPassword || !formData.password ? "register-hide" : "register-invalid"}>
                <i className="fa-solid fa-x"></i>
              </span>
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              onChange={e => setFormData(prev => ({...prev, password: e.target.value}))}
              value={formData.password}
              required
              aria-invalid={validPassword ? "false" : "true"}
              aria-describedby='pwdnote'
              onFocus={() => setPasswordFocus(true)}
              onBlur={() => setPasswordFocus(false)}
            />
            <p id='pwdnote' className={passwordFocus && !validPassword ? 'register-instructions' : 'register-offscreen'}>
              <i className="fa-solid fa-circle-info"></i> <br />
              8 to 24 characters.<br />
              Must include uppercase and lowercase letters, a number, and a special character.<br />
              Allowed special characters:
              <span aria-label="exclamation mark">!</span>
              <span aria-label="at symbol">@</span>
              <span aria-label="hashtag">#</span>
              <span aria-label="dollar sign">$</span>
              <span aria-label="percent">%</span>
            </p>
          </div>

          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password{" "}
              <span className={validPassword && matchPassword ? "register-valid" : "register-hide"}>
                <i className="fa-solid fa-check"></i>
              </span>
              <span className={!validPassword || matchPassword ? "register-hide" : "register-invalid"}>
                <i className="fa-solid fa-x"></i>
              </span>
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              onChange={e => setMatchPassword(e.target.value)}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
              <i className="fa-solid fa-circle-info"></i> <br />
                Must match the first password input field.
            </p>
            <p className="last-sentence">
              Password must be at least 12 characters long. Weak password will
              be marked as invalid. Password must not be greater than 128
              characters long.
            </p>
          </div>
        </div>
        <div className="submit-register">
          <button type="submit" className="create-acc-btn" 
            disabled={!validName || !validPassword || !validMatch ? true : false}
          >
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};