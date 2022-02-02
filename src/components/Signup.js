import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const initialValues = {
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userData, setUserData] = useState(initialValues);

  const addUser = (e) => {
    e.preventDefault();
    let oldItems = [];
    const oldData = JSON.parse(localStorage.getItem("signUpUser"));
    if (oldData) {
      if (userData.password === userData.confirmPassword) {
        oldItems = [...oldData, userData];
        alert("SignUp Successfully.");
      } else {
        alert("You must Re-enter the password");
        return false;
      }
    } else {
      if (userData.password === userData.confirmPassword) {
        oldItems.push(userData);
        alert("SignUp Successfully.");
      } else {
        alert("You must Re-enter the password");
        return false;
      }
    }
    localStorage.setItem("signUpUser", JSON.stringify(oldItems));

    setUserData(initialValues);
  };

  const navigate = useNavigate();
  const toLogin = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div className="box">
      <Form>
        <input
          type="text"
          value={userData.name}
          placeholder="Enter name"
          name="name"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          required
        ></input>
        <input
          type="text"
          value={userData.username}
          placeholder="Enter username"
          name="username"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        ></input>
        <input
          type="text"
          value={userData.email}
          placeholder="Enter email"
          name="email"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          required
        ></input>
        <br />
        <input
          type="text"
          value={userData.password}
          placeholder="Enter password"
          name="password"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          required
        ></input>
        <br />
        <input
          type="text"
          value={userData.confirmPassword}
          placeholder="Enter confirmPassword"
          name="confirmPassword"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
          required
        ></input>
        <br />
        <Button
          className="signUpBtn"
          variant="primary"
          type="submit"
          onClick={(e) => addUser(e)}
        >
          Sign Up
        </Button>
        <Button variant="primary" type="submit" onClick={(e) => toLogin(e)}>
          Back to Login
        </Button>
      </Form>
    </div>
  );
};
export default SignUp;
