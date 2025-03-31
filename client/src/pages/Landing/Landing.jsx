//Imports
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../utils/mutations";
import "./landing.css";

//bring in login mutation from utils/mutation

export const Landing = () => {
  //Hooks

  const [userLoginData, setUserLoginData] = useState({
    username: "",
    password: "",
  });

  //call useMutation

  const [loginUser, { error }] = useMutation(LOGIN);

  //Functions
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserLoginData({ ...userLoginData, [name]: value });
  };

  //handleFormSubmit
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({
        variables: {
          username: userLoginData.username,
          password: userLoginData.password,
        },
      });

      console.log(response.data.login.token);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="landing-container">
        <div className="login-card">
          <h2 className="form-title">Login</h2>
          <form className="form-container" onSubmit={handleFormSubmit}>
            <div className="input-form">
              <input
                type="text"
                name="username"
                placeholder="Username"
                onChange={handleInputChange}
                value={userLoginData.username}
              />
            </div>
            <div className="input-form">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInputChange}
                value={userLoginData.password}
              />
            </div>
            <button className="landing-btn">Submit</button>
          </form>
        </div>
      </div>
    </>
  );
};
