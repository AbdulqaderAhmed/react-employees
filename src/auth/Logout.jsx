import axios from "axios";
import React from "react";
import http from "../api/http";

function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;

    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      http
        .post("logout")
        .then((data) => {
          console.log(data.data);
          window.alert("user logout successfuly");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div id="login">
      <div className="container">
        <div
          id="login-row"
          className="row justify-content-center align-items-center"
        >
          <div id="login-column" className="col-md-6">
            <div id="login-box" className="col-md-12">
              <form
                action="#"
                className="form"
                onSubmit={handleSubmit}
                method="POST"
              >
                <h3 className="text-center text-info">Logout</h3>
                <button>Logout</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
