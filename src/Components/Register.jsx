export const Register = () => {
  return (
    
    <div className="register-body">
      <form className="register-form">
        <h4 className="sign-up">Sign Up</h4>
        <div className="form-body">
          <div className="username">
            <label className="form__label" htmlFor="firstName">
              First Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <div className="lastname">
            <label className="form__label" htmlFor="lastName">
              Last Name{" "}
            </label>
            <input
              className="form__input"
              type="text"
              name=""
              id="lastName"
              placeholder="Last Name"
            />
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
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" htmlFor="confirmPassword">
              Confirm Password{" "}
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
            />
            <p className="last-sentence">
              Password must be at least 12 characters long. Weak password will
              be marked as invalid. Password must not be greater than 128
              characters long.
            </p>
          </div>
        </div>
        <div className="submit-register">
          <button type="submit" className="create-acc-btn">
            Create New Account
          </button>
        </div>
      </form>
    </div>
  );
};
