/* eslint-disable no-unused-vars */
import React, { useContext, useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import useStyles from './styles';
import { AccountContext } from "./accountContext";
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { signin, signup } from '../../../../common_components/actions/auth';
import { AUTH } from '../../../../common_components/constants/actionTypes';

const initialState = { fullName: '', email: '', password: '', confirmPassword: '' };

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();
  const history = useNavigate();
  const classes = useStyles();

  const navigate = useNavigate();
  const signin = useCallback(() => navigate('/home', {replace: true}), [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }
  };

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  // const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <FormContainer className={classes.form} onSubmit={handleSubmit}>
        <Input name="email" placeholder="Email Address" handleChange={handleChange} type="email" />
        <Input name="password" placeholder="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
      </FormContainer>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.2em" />
      <SubmitButton type="submit" onClick={signin}>Signin</SubmitButton>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">
        Don't have an accoun?{" "}
        <BoldLink href="#" onClick={switchToSignup}>
          Sign Up
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1.2em" />
      <MutedLink href="#">
        Sign In Using &nbsp;
        <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
                <BoldLink onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                  <i class='fab fa-google' />
                </BoldLink>
            )}
            onSuccess={googleSuccess}
            // onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> 
        <BoldLink href="#">
          <i class='fab fa-facebook-f' />
        </BoldLink>
        <BoldLink href="#">
          <i class='fab fa-twitter' />
        </BoldLink>
        <BoldLink href="#">
          <i class='fab fa-linkedin' />
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
