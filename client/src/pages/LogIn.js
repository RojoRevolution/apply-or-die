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
        API.logIn({
            email: formObject.email,
            password: formObject.password,
            withCredentials: true,
            // URL might not be needed since it's provided in utils/API
            // url: "http://localhost:3000/api/user/login"
        }).then(res => {
            // For some reason the response is comng in under Confif instead of data. Config needs to be parsed.
            // let parsedData = JSON.parse(res.config.data)
            // console.log("Parsed Email: ", parsedData.email)
            console.log('Login Res: ', res)
            // if (res.data) {
            //     console.log("Successful LogIn")
            //     // setLoggedin(true)
            //     history.push("/dashboard")
            // }
        })
            .catch(err => console.log(err))
    }


    return (
        <main>
            <div className="logInBg">
                <div className="homeLogIn">
                </div>
                <div className="bottomSlant py-5"></div>
                <div className="logInGradient py-5"></div>
                <div className="container">
                    <div>
                        <div className="logo py-5">
                            <Link to={"/"}><img src="/assets/images/logo/logo_white.svg" /></Link>
                        </div>
                        <h1 className="text-center text-light">Welcome Back</h1>
                    </div>
                    <div className="card-container mt-5 userForm">
                        <h2 className="text-center">Log In</h2>
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
                                {/* <Link to={"/dashboard"}><button className="btn viewBtn width-full">Log In</button></Link> */}
                                <button className="btn viewBtn width-full">Log In</button>
                            </div>
                            <div className="mb-3">
                                <p className=" text-center formLink">Need an account?   <Link to={"/"}>Sign Up Here</Link></p>
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