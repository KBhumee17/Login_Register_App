import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/register", { name, email, password })
        .then(result => {
            console.log(result);
            navigate('/login');  // ✅ absolute path
        })
        .catch(err => console.log(err));
}

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className="bg-white p-4 rounded w-100" style={{ maxWidth: "400px" }}>
                <h2 className="mb-4 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            <strong>Name</strong>
                            </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Enter Name"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                            <strong>Email</strong>
                            </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <strong>Password</strong>
                            </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter Password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 mb-2">
                        Register
                    </button>
                    </form>
                    <p>Already Have an Account</p>
                    <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0">
                        Login
                    </Link>
                
            </div>
        </div>
    );
}

export default SignUp;
