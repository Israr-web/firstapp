import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import './cssfile/LoginPage.css';

// import "./LoginPage.css"; // Optional: Include styles if needed



export default function LoginPage() {

    const navigation = useNavigate()
    // const [formData, setFormData] = useState({
    //     username: "",
    //     password: "",
    // });

    // const [username, setUserName] = useState("");
    const [password, setpassWord] = useState("");
    const [email, setEmail] = useState("");
    // const [assigned, setAssigned] = useState("");
    // const [type, setType] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: email,
            password: password,
        }
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://34.229.147.86/example-api/public/api/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                navigation('/home')

            })
            .catch((error) => {
                console.log(error);
            });

        // console.log(username,"data",password ," data" ,name , "data" , assigned , "data" , type);

        // // Mock authentication logic (replace with real API later)
        // if (formData.username === "admin" && formData.password === "password") {
        //     alert("Login Successful!");
        //     // Navigate to another page or perform an action
        // } else {
        //     setErrorMessage("Invalid username or password");
        // }
    };

    return (

        <div className="container-fliud" id="containerdiv">
            <div className="row">
                <div className="col-md-3 col-lg-4">
                </div>
                <div className="col-12 col-sm-12 col-md-6 col-lg-4">
                    <div className="logindiv">
                        <h2>Login</h2>
                        <form onSubmit={handleSubmit} className="login-form">
                            <div className="form-group">
                                <label htmlFor="username">Email:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your username"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setpassWord(e.target.value)}
                                    placeholder="Enter your password"
                                    required
                                />
                            </div>
                                                     
                            {errorMessage && <p className="error-message">{errorMessage}</p>}

                            <button type="submit" className="btn btn-primary">
                                Login
                            </button>
                            <Link id="link" to='/register' className="w-40">Register For New User
                                
                            </Link>

                        </form>
                    </div>
                </div>
                <div className="col-md-3 col-lg-4">

                </div>



            </div>
        </div>
    );
}
