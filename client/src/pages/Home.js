import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Exterior/Footer";


function Home() {

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