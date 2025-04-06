import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/loginValidation";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); 

  const toggleSignInForm = () => {
    setIsSigninForm(!isSigninForm);
  };

  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = () => {
    console.log("Email: ", email.current.value);
    console.log("Password: ", password.current.value);

    const msg = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(msg);
    console.log(msg);
    
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg"
          alt="bg-image"
        />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className="w-4/12 absolute bg-black p-12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
        <h2 className="text-4xl font-bold mx-2 mb-7">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </h2>

        {!isSigninForm && (
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            className="p-4 m-2 w-full bg-gray-900 text-gray-50 bg-opacity-70 border-2 rounded-md"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          autoComplete="off"
          className="p-4 m-2 w-full bg-gray-900 text-gray-50 bg-opacity-70 border-2 rounded-md"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          autoComplete="off"
          className="p-4 m-2 mb-4 w-full bg-gray-900 text-gray-50  bg-opacity-70 border-2 rounded-md"
        />
        {errorMessage && (
          <p className="text-red-500 text-sm mb-2">{errorMessage}</p>
        )}
        <button onClick={handleSubmit} className="p-3 m-2 w-full bg-red-600 rounded-md">
          {isSigninForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="text-gray-400 my-3 text-center ">OR</p>

        <button className="p-2 m-2 w-full bg-gray-500 bg-opacity-50 rounded-md">
          Use a Sign-in Code
        </button>
        <p className="text-white underline my-3 text-center ">
          Forgot password?
        </p>

        <div className="text-center text-gray-400">
          {isSigninForm ? "New to Netflix?" : "Already a user?"}

          <p
            className="text-white underline cursor-pointer"
            onClick={toggleSignInForm}>
            {isSigninForm ? "Sign Up now" : "Sign In"}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
