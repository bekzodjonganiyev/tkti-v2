import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./Login.css";

import { Context } from "../../../context";
import { useContext } from "react";

const Login = () => {
  const naviagte = useNavigate()
  const { globalUrl } = useContext(Context);
  const [inputValue, setInputValue] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  function postData(e) {
    e.preventDefault();
    fetch(`${globalUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(inputValue),
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) {
          alert(res.message + " ❌");
        } else {
          alert("Login qildingiz");
          localStorage.setItem("token", res.token);
          // setTimeout(() => {
          // }, 2000)
          naviagte("/admin")
          // window.location.reload(true);
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="login-page">
      <form className="w-50 mx-auto" onSubmit={postData}>
        <div class="form-floating mb-3 ">
          <input
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Name"
            name="name"
            onChange={handleChange}
          />
          <label for="floatingInput">Name</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <div class="form-floating mb-3">
          <input
            type="email"
            class="form-control"
            id="floatingPassword"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <label for="floatingPassword">Email</label>
        </div>
        <button type="submit" class="btn btn-primary w-100 p-3">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
