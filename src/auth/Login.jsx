import http from "../api/http";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import winter from "../assets/img/Winter.svg";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      http
        .post("login", {
          email: email,
          password: password,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("user logged in successfuly");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="container">
      <h1>login</h1>
      <div className="row content">
        <div className="col-md-6 mb-3">
          <img
            src={winter}
            alt="picture_of_animated_girl"
            className="img-fluid img"
          />
        </div>
        <div className="col-md-6">
          <h3 className="signin-text mb-3">Sign In</h3>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">
              <input
                type="checkbox"
                name="remember"
                className="from-check-input mt-3"
              />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Sign In
            </button>
          </form>
          <Link to="/register" className="signin">
            Does not have an account yet?{" "}
            <span className=" ">Sign Up here!</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
