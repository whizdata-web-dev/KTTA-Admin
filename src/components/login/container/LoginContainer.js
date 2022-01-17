import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import "../login.css";
import axios from "axios";
import Login from "../components/Login";

const LoginContainer = () => {
  const history = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [show, setShow] = useState(false);

  function loginuser() {
    setShow(true);
    var user = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/api/user/loginuser", user)
      .then((res) => {
        if (res.data.token) {
          localStorage.setItem("loggedin", res.data.token);
          setShow(false);
          setSuccess("User Verified!");
          setTimeout(() => {
            history("/dashboard");
          }, 3000);
        } else {
          setShow(false);
          setError("Invalid email or password");
          setTimeout(() => {
            setError("");
          }, 3000);
        }
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
          console.log(error.response);
          setShow(false);
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the
          // browser and an instance of
          // http.ClientRequest in node.js
          console.log(error.request);
          setShow(false);
        } else {
          console.log("Error", error.message);
          setShow(false);
        }
        console.log(error.config);
        setShow(false);
      });
  }

  return (
    <Box className='login__container'>
      <Login
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        success={success}
        error={error}
        loginuser={loginuser}
        show={show}
      />
    </Box>
  );
};
export default LoginContainer;
