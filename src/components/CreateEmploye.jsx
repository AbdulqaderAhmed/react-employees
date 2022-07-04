import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import http from "../api/http";

export default function CreateEmploye() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [birth, setBirth] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
      http
        .post("employe", {
          name: name,
          birth: birth,
          gender: gender,
        })
        .then((res) => {
          console.log(res.data);
          window.alert("employee successfuly created");
          navigate("/");
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h3>Create Employee</h3>
        </div>
        <div className="conatiner">
          <div className="card-body">
            <form onSubmit={handleSubmit} method="POST">
              <div className="mb-3 mt-3">
                <label htmlFor="email" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Birthdate:
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="pwd"
                  name="birth"
                  value={birth}
                  onChange={(e) => setBirth(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="pwd" className="form-label">
                  Gender:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="pwd"
                  placeholder="Enter gender"
                  name="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
