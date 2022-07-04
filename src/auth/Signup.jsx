import { Link, useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import { useState } from "react";
import snow from "../assets/img/Snowman.svg";
import http from "../api/http";

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      http
        .post("register", {
          name: name,
          email: email,
          password: password,
          password_confirmation: passwordConfirm,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("user registered successfuly");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="container">
      <div className="row content">
        <div className="col-md-6 mb-3">
          <img
            src={snow}
            alt="picture_of_animated_girl"
            className="img-fluid img"
          />
        </div>
        <div className="col-md-6">
          <h3 className="signin-text mb-3">Sign Up</h3>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Name</label>
              <input
                type="name"
                name="name"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-5">
              Sign Up
            </button>
          </form>
          <Link to="/login" className="signin">
            Already have an account? <span>Sign In here!</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
