import React, { useState, useContext } from "react";
import { UserContext } from "../UserContext";
// MATERIAL-UI
import {
  Container,
  TextField,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@material-ui/core/";
import Btn from "./common/Btn";

const Login = (props) => {
  const { login, setlogin } = useContext(UserContext);
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [loginattempts, setloginAttempts] = useState(3);
  const [unameerrormsg, setunameErrormsg] = useState(false);
  const [passworderrormsg, setpasswordErrormsg] = useState(false);
  // const[login, setlogin] = useState(false)
  // const[uname, setUname] = useState(UserContext)
  // const[password, setPassword] = useState(UserContext)
  // const[loginattempts, setloginAttempts] = useState(UserContext)

  console.log(login);

  const setUnameHandler = (event) => {
    setUname(event);
  };

  const setPasswordHandler = (event) => {
    setPassword(event);
  };

  const checkLoginHandler = (props) => {
    if (uname === "admin" && password === "root") {
      setlogin(true);
      console.log("Login");
    } else {
      setlogin(false);
      if (uname !== "admin") {
        setunameErrormsg(true);
      }
      if (password !== "root") {
        setpasswordErrormsg(true);
      }
      if (uname !== "admin" && password !== "root") {
        setunameErrormsg(true);
        setpasswordErrormsg(true);
      }
      setloginAttempts(loginattempts - 1);
      console.log("login fail");
    }
  };

  return (
    <div>
      <Grid
        container
        direction='column'
        justify='center'
        alignItems='center'
        style={{ minHeight: "100vh" }}
      >
        <Container maxWidth='sm'>
          <Typography variant={"overline"} className='login__title'>
            Please Login to Continue
          </Typography>
          <Card style={{ minWidth: "100%" }}>
            <CardContent>
              {loginattempts === 0 ? (
                <div>
                  <Box className='login__textfield'>
                    <TextField
                      id='outlined-basic'
                      label='Username'
                      variant='outlined'
                      onChange={(event) => setUnameHandler(event.target.value)}
                      disabled='true'
                      size='medium'
                      fullWidth={true}
                    />
                  </Box>
                  <Box className='login__textfield'>
                    <TextField
                      id='outlined-basic'
                      label='Password'
                      variant='outlined'
                      type='password'
                      onChange={(event) =>
                        setPasswordHandler(event.target.value)
                      }
                      disabled='true'
                      size='medium'
                      fullWidth={true}
                    />
                  </Box>
                  <Box mt={2}>
                    <Btn
                      variant='contained'
                      color='primary'
                      onClick={checkLoginHandler}
                      disabled={true}
                    >
                      Login
                    </Btn>
                  </Box>
                  <p>*Sorry, too many attempts! please try again in 48hrs.</p>
                </div>
              ) : (
                <div>
                  <form noValidate autoComplete='off'>
                    <Box className='login__textfield'>
                      <TextField
                        error={unameerrormsg}
                        helperText='Incorrect username.'
                        id='outlined-basic'
                        label='Username'
                        variant='outlined'
                        onChange={(event) =>
                          setUnameHandler(event.target.value)
                        }
                        size='medium'
                        fullWidth={true}
                      />
                    </Box>
                    <Box className='login__textfield'>
                      <TextField
                        error={passworderrormsg}
                        helperText='Incorrect password.'
                        id='outlined-basic'
                        label='Password'
                        variant='outlined'
                        type='password'
                        onChange={(event) =>
                          setPasswordHandler(event.target.value)
                        }
                        size='medium'
                        fullWidth={true}
                      />
                    </Box>
                    {/* <input type="text" placeholder="username" onChange={(event) => setUnameHandler(event.target.value)}/>
            <input type="password" placeholder="password" onChange={(event) => setPasswordHandler(event.target.value)}/> */}
                    <Box mt={2}>
                      <Btn
                        variant='contained'
                        color='primary'
                        onClick={checkLoginHandler}
                      >
                        Login
                      </Btn>
                    </Box>
                    {login ? props.history.push("/distance") : null}
                  </form>
                </div>
              )}
            </CardContent>
          </Card>
        </Container>
      </Grid>
    </div>
  );
};

export default Login;
