import { Header } from "./Header";
import { useState } from "react";

const Login = (() =>{

    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }

    return(
        <div className="bg-Login-backgroundImage bg-cover bg-center h-screen ">
            <Header />
            <div className="px-12 py-10 bg-black bg-opacity-80 sm:w-full md:w-1/2 lg:w-1/3 xl:w-2/3 max-w-sm m-auto md:m-4! flex flex-wrap flex-col justify-center items-center rounded-md gap-3 mt-8">
                <form className=" text-slate-50 ">
                <h1 className="text-3xl text-white font-bold p-2 mr-auto">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                { !isSignInForm && <input type="text" placeholder="Full Name" className="w-full p-4 m-2 bg-black bg-opacity-30 border  placeholder-slate-50 rounded-lg border-slate-50" />}
                <input type="email" placeholder="Email Address" className="w-full p-4 m-2 bg-black bg-opacity-30 border  placeholder-slate-50 rounded-lg border-slate-50" />
                <input type="password" placeholder="Password" className="w-full p-4 m-2 bg-black bg-opacity-30 border placeholder-slate-50 rounded-lg border-slate-50" />
                <button className="p-2 m-2 w-full bg-red-500 rounded-lg text-white text-lg font-semibold">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <h3 className="text-center ">OR</h3>
                <button className="p-2 m-2 w-full bg-gray-500 bg-opacity-50 rounded-lg text-white text-lg font-semibold">Use a Sign In</button>
                <p className="py-4" >Forgot password?</p>
                <p className="cursor-pointer" onClick={toggleSignIn}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already reginstered? Sign In Now"}</p>
                </form>
                
            </div>
        </div>
    );
});

export default Login;