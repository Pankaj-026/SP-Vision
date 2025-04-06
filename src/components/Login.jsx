import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/loginValidation";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const toggleSignInForm = () => setIsSigninForm(!isSigninForm);

  const handleSubmit = () => {
    const msg = checkValidation(email.current.value, password.current.value);
    setErrorMessage(msg);
  };
  

  return (
    <div className="h-screen w-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      <Header />
      <div className="flex items-center justify-center h-full">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black bg-opacity-70 p-10 rounded-lg shadow-xl w-11/12 max-w-md"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </h2>

          {!isSigninForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full bg-gray-800 border border-gray-600 rounded"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            onClick={handleSubmit}
            className="p-3 bg-purple-600 hover:bg-purple-700 w-full rounded font-semibold mb-4"
          >
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center text-gray-400">
            {isSigninForm ? "New here?" : "Already a user?"}
            <span
              className="text-purple-300 ml-2 cursor-pointer underline"
              onClick={toggleSignInForm}
            >
              {isSigninForm ? "Create account" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
