import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/loginValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSigninForm, setIsSigninForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const userName = useRef(null);

  const toggleSignInForm = () => setIsSigninForm(!isSigninForm);

  const handleSubmit = () => {
    const message = checkValidation(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSigninForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: userName.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/v2/D4D35AQHmfmXArll8Fg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1730715107490?e=1744574400&v=beta&t=vKoWz8jM8LfMcoRf9V3yOHuMaQr414z__JNnx5HCa0w",
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                uid,
                email,
                displayName,
                photoURL,
              })
            );
          });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          console.log("Logged in:", userCredential.user);
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white">
      <Header />
      <div className="flex items-center justify-center h-[90vh] px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="bg-black/70 border border-gray-700 p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.3)] w-full max-w-md transition-all duration-300">
          <h2 className="text-4xl font-bold text-center mb-8 text-amber-400">
            {isSigninForm ? "Welcome Back" : "Join SP Vision"}
          </h2>

          {!isSigninForm && (
            <input
              ref={userName}
              type="text"
              placeholder="Full Name"
              className="p-3 mb-4 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="p-3 mb-4 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none"
          />

          {errorMessage && (
            <p className="text-red-500 text-sm mb-4">{errorMessage}</p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-amber-500 hover:bg-amber-600 cursor-pointer text-white font-semibold py-3 rounded-lg mb-4 transition duration-300">
            {isSigninForm ? "Sign In" : "Sign Up"}
          </button>

          <p className="text-center text-gray-400">
            {isSigninForm ? "New to SP Vision?" : "Already a user?"}
            <span
              className="text-amber-400 hover:text-amber-300 ml-2 cursor-pointer underline"
              onClick={toggleSignInForm}>
              {isSigninForm ? "Create account" : "Sign In"}
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
