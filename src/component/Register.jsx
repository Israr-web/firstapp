import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import './cssfile/Register.css';


export default function Register() {
    const navigation = useNavigate()

    const [username, setUserName] = useState("");
    const [password, setpassWord] = useState("");
    const [name, setName] = useState("");
    const [assigned, setAssigned] = useState("");
    const [type, setType] = useState("");


    const [errorMessage, setErrorMessage] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault();


        const data = {
            name: username,
            email: name,
            password: password,
            assigned_store: assigned,
            type: type
        }

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'http://34.229.147.86/example-api/public/api/register',
            headers: {
                'Content-Type': 'application/json',
                'Cookie': 'XSRF-TOKEN=eyJpdiI6InJTUFRwUU5vR09CWit4QlJucGVuWWc9PSIsInZhbHVlIjoiZVdpaDZONitpd0VLaDNxd0dsQjdPVXZrYUxqZ2hZTHFKM1VPbC9UQTA4QWMzY2g4ZVgrb09LcG5NbXQwaWxwNTVPL2JtaU5nRlpyc2g4Q0RaUlRiUWtqT05NL1VzbkFNNEJWOXUwN29lbEtLWlV4SFdDVVlrV1JwTmlYeWc0RnQiLCJtYWMiOiJjOTJiZjc0MWUyOTIxOTcwOGUwNTk5MTI1ZWE2YjhiYjM2NjhjY2IxMmRjOGY4YjY1YTk4MTA0OTYxZWYxNWY4IiwidGFnIjoiIn0%3D; laravel_session=eyJpdiI6InZYVmpzMFMyL3FxM2dWbW5OTWh6MFE9PSIsInZhbHVlIjoidHI0OWsxUDVhRVVQREl4RGt6UWFtcy9JbHlMa0UvTUh2Y204cHUvcDBmN1hidENWT200RVN4Y2w4c1pIczIvemRvTzIrZFg4ME9ET1NrdWFFYzdZZkNsbk0vT2dzRmI5clNEbXRRNU9rMGNyUTlMZ09pRHRmSjZTOVFNMnhzaWciLCJtYWMiOiJiODg3YTA5NjZhMjYzYTU5NTI4N2VjNTdiMTFhNWZmMWUzMzhhYjI3ZTI3YjNlNTlhYTZkOTE4YTVmM2QyYjE4IiwidGFnIjoiIn0%3D'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                // console.log(JSON.stringify(response.data));
                navigation('/')

            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <>
            <div className="container-fliud" id="containerreg">
                <div className="row">
                    <div className="col-sm-2 col-md-3 col-lg-4">
                    </div>
                    <div className="col-12 col-sm-8 col-md-6 col-lg-4">
                        <div className="registerdiv">
                            <h2 id="regh2">Sign Up</h2>
                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="form-group">
                                    <label htmlFor="username" id="reglabel">Username:</label>
                                    <label htmlFor="username" id="reglabel">Username:</label>
                                   
                                    <input
                                        type="text"
                                        id="username"
                                        name="username"
                                        value={username}
                                        onChange={(e) => setUserName(e.target.value)}
                                        placeholder="Enter your username"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" id="reglabel">Password:</label>
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
                                <div className="form-group">
                                    <label htmlFor="name" id="reglabel">Email:</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        // placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="assigned" id="reglabel">Assigned:</label>
                                    <input
                                        type="text"
                                        id="assigned"
                                        name="assigned"
                                        value={assigned}
                                        onChange={(e) => setAssigned(e.target.value)}
                                        // placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="type" id="reglabel">Type:</label>
                                    <input
                                        type="number"
                                        id="type"
                                        name="type"
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        // placeholder="Enter your password"
                                        required
                                    />
                                </div>
                                {errorMessage && <p className="error-message">{errorMessage}</p>}

                                <button type="submit" className="btn btn-primary">
                                    Register
                                </button>
                                {/* <a href="./Register.jsx">Register Now</a> */}
                                {/* <Link className="nav-link  text-white" to='/'>HOME
                            </Link> */}

                            </form>
                        </div>
                    </div>
                    <div className="col-sm-2 col-md-3 col-lg-4">

                    </div>
                </div>
            </div>

        </>
    )
}
