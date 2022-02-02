import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";

const Login = ({ setTokenData }) => {
  const initialValues = {
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialValues);
  const authenticateUser = () => {
    const localInfo = JSON.parse(localStorage.getItem("signUpUser"));
    if (localInfo === null) {
      return false;
    } else {
      localInfo?.map((item) => {
        const userName = item.email;
        const userPassword = item.password;
        if (userName === userData.email && userPassword === userData.password) {
          const token = Math.random().toString(36).substr(2, 5);

          sessionStorage.setItem("token", JSON.stringify(token));
          setTokenData(token);
          toUsersTable();
        } else {
          return false;
        }
      });
      setUserData(initialValues);
    }
  };

  const navigateToUsersTable = useNavigate();
  const toUsersTable = () => {
    return navigateToUsersTable("/usersTable");
  };

  return (
    <>
      <Form onSubmit={() => authenticateUser()}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={userData.email}
          name="email"
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />

        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          name="password"
          value={userData.password}
          onChange={(e) =>
            setUserData({ ...userData, [e.target.name]: e.target.value })
          }
        />

        <Form.Group className="mb-3" controlId="formBasicCheckbox"></Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>

        <div className="txtToSignUpBtn">
          <span>OR</span> <Link to="/signUp">Click here to Register</Link>
        </div>
      </Form>
    </>
  );
};
export default Login;

