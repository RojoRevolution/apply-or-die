import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Exterior/Footer";
import API from "../../../utils/API";


function Home() {

    const [formObject, setFormObject] = useState({})

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
        console.log(formObject)
    };


    function handleSubmit(event) {
        event.preventDefault();
        API.createUser({
            email: formObject.email,
            password: formObject.password,
        })
            .then(console.log('REDIRECTING TO LOGIN'))
            .then(history.push("/login"))
            .catch(err => console.log(err))
    }


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
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name="email" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="" name="password" />
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