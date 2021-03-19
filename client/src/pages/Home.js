import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Exterior/Footer";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { useAtom } from "jotai";
import { loggedInStatus } from "../utils/Atoms"



function Home() {
    let history = useHistory();
    const [loggedIn, setLoggedin] = useAtom(loggedInStatus);

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };


    function handleSubmit(event) {
        event.preventDefault();
        API.signUp({
            email: formObject.email,
            password: formObject.password,
        })
            .then(res => {
                console.log(res)
                console.log('SignUp Res: ', res)
                // This method technically won't work because a res is always given even if it is incorrect
                if (res.data) {
                    console.log("Successful SignUp")
                    setLoggedin(true)
                    history.push("/dashboard")
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <main>
            <div className="signUpBg">
                <div className="homeLogIn">
                    <Link to={"/login"}><button className="btn viewBtn">Log In</button></Link>
                </div>
                <div className="bottomSlant py-5"></div>
                <div className="signUpGradient py-5"></div>
                <div className="container">
                    <div>
                        <div className="logo py-5">
                            <Link to={"/"}><img src="/assets/images/logo/logo_white.svg" /></Link>
                        </div>
                        <h1 className="text-center text-light">Log Your Job Search</h1>
                    </div>
                    <div className="card-container mt-5 userForm">
                        <h2 className="text-center">Sign up</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input onChange={handleInputChange} type="email" className="form-control" placeholder="name@example.com" name="email" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
                                <input onChange={handleInputChange} type="password" className="form-control" placeholder="" name="password" />
                            </div>
                            <div className="mb-3">
                                <button className="btn viewBtn width-full">Sign Up</button>
                            </div>
                            <div className="mb-3">
                                <p className=" text-center formLink">Have an account?   <Link to={"/login"}>Log In Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}

export default Home;