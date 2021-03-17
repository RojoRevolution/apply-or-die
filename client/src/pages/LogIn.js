import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Exterior/Footer";


function Home() {

    return (
        <main>
            <div className="signUpBg">
                <div className="homeLogIn">
                </div>
                <div className="bottomSlant py-5"></div>
                <div className="signUpGradient py-5"></div>
                <div className="container">
                    <div>
                        <div className="logo py-5">
                            <Link to={"/"}><img src="/assets/images/logo/logo_white.svg" /></Link>
                        </div>
                        <h1 className="text-center text-light">Welcome Back</h1>
                    </div>
                    <div className="card-container mt-5 userForm">
                        <h2 className="text-center">Log In</h2>
                        <form>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" />
                            </div>
                            <div className="mb-3">
                                <Link to={"/dashboard"}><button className="btn viewBtn width-full">Log In</button></Link>
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