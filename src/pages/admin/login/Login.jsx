import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import { Context } from "../../../context";
import { useContext } from "react";
import { Fetchers } from "../../../services/fetchRequests";

const Login = () => {
  const naviagte = useNavigate();
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  function postData(e) {
    e.preventDefault();
    Fetchers.addData("auth/login", JSON.stringify(inputValue), false).then((res) => {
      if (!res.success) {
        alert(res.message + " ❌");
      } else {
        alert("Login qildingiz");
        localStorage.setItem("token", res.token);
        naviagte("/admin");
      }
    });
  }
  return (
    <div className="login-page">
      <form className="w-50 mx-auto" onSubmit={postData}>
        <div className="form-floating mb-3 ">
          <input
            type="text"
            className="form-control"
            id="floatingInput"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <label htmlFor="floatingInput">Name</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="floatingEmail">Email</label>
        </div>
        <button type="submit" className="btn btn-primary w-100 p-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
