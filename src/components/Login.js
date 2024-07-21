import { checkValidateData } from "../utils/validate";
import { Header } from "./Header";
import { useState, useRef } from "react";
import { auth } from "../utils/filebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  //if it is sign up form than show name
  const name = useRef(null);

  const handleButtonClick = () => {
    //Validate the Form Data
    const message = checkValidateData(
      isSignInForm ? null : name.current.value.trim(),
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);

    if (message) return; // if message is string which means it is not valid

    if (!isSignInForm) {
      // Auth Logic for Sign Up page
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      // Sign In Authentication
      signInWithEmailAndPassword(auth, email.current.value,password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="bg-Login-backgroundImage bg-cover bg-center h-full ">
      <Header />
      <div className=" px-12 pt-10  bg-black bg-opacity-80 sm:w-full md:w-1/2 lg:w-1/3 xl:w-2/3 max-w-sm m-auto md:m-4!  rounded-md gap-3 mt-8">
        <form
          className=" text-slate-50 "
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-3xl text-white font-bold p-2 mr-auto">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="w-full p-4 m-2 bg-black bg-opacity-30 border  placeholder-slate-50 rounded-lg border-slate-50"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="w-full p-4 m-2 bg-black bg-opacity-30 border  placeholder-slate-50 rounded-lg border-slate-50"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="w-full p-4 m-2 bg-black bg-opacity-30 border placeholder-slate-50 rounded-lg border-slate-50"
          />
          <p className="text-red-500 font-bold text-lg m-2">{errorMessage}</p>
          <button
            onClick={handleButtonClick}
            className="p-2 m-2 w-full bg-red-500 rounded-lg text-white text-lg font-semibold"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          
          {!isSignInForm &&
            (<><h3 className="text-center py-2">OR</h3>
           <button onClick={toggleSignIn} className="p-2 m-2 w-full bg-gray-500 bg-opacity-50 rounded-lg text-white text-lg font-semibold">
            Use a Sign In
          </button></>)}
          <p className="py-4">Forgot password?</p>
          <p className="cursor-pointer pb-5" onClick={toggleSignIn}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
