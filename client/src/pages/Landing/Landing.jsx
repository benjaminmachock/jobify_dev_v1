//Imports
import "./landing.css";

export const Landing = () => {
  //Hooks

  //Functions

  return (
    <>
      <div className="landing-container">
        <div className="login-card">
          <h2 className="form-title">Login</h2>
          <form className="form-container">
            <div className="input-form">
              <input name="userEmail" placeholder="Email" />
            </div>
            <div className="input-form">
              <input name="userPassword" placeholder="Password" />
            </div>
            <button className="landing-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
