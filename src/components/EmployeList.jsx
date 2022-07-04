import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import http from "../api/http";

export default function EmployeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = () => {
    http
      .get("/employe")
      .then((res) => {
        setData(res.data.employee);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteEmployee = (id) => {
    http.delete("employe/" + id).then((res) => {
      window.alert("employee successfuly deleted");
      fetchEmployees();
    });
  };

  return (
    <div className="container">
      <h1>All Employee List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Birth Date</th>
            <th>Gender</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((employe, index) => {
              return (
                <tr key={index}>
                  <td>{++index}</td>
                  <td>{employe.name}</td>
                  <td>{employe.birth}</td>
                  <td>{employe.gender}</td>
                  <td>
                    <Link
                      to={"/update/" + employe.id}
                      className="btn btn-warning"
                    >
                      Edit
                    </Link>
                    <Link
                      to="#"
                      className="btn btn-danger"
                      onClick={() => {
                        deleteEmployee(employe.id);
                      }}
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
