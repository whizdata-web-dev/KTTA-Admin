import { Card, Divider } from "@mui/material";
import "../login.css";
import Typography from "../../Common/Typography/Typography";
import TextField from "../../Common/TextField/TextField";
import Alert from "../../Common/Alert/Alert";
import LoadingButton from "../../Common/Button/LoadingButton";

import { LoginTitle } from "../model/LoginModel";

const Login = ({
  email,
  setEmail,
  password,
  setPassword,
  success,
  error,
  loginuser,
  show,
}) => {
  return (
    <Card className='login__card'>
      <Typography
        variant={LoginTitle.variant}
        content={LoginTitle.title}
        style={LoginTitle.style}
      />
      <Divider />
      {success && (
        <Alert id='loginSuccess' severity='success' message={success} />
      )}
      {error && <Alert id='loginError' severity='error' message={error} />}
      <TextField
        id='loginEmail'
        type='email'
        value={email}
        label='Email'
        variant='standard'
        onChangeHandler={setEmail}
      />
      <TextField
        id='loginPassword'
        type='password'
        value={password}
        label='Password'
        variant='standard'
        onChangeHandler={setPassword}
      />
      <LoadingButton
        onClick={loginuser}
        loading={show}
        disabled={false}
        variant='contained'
        buttonName='Login'
      />
    </Card>
  );
};
export default Login;
