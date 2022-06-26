import React, { useContext, useCallback } from "react";
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
import { AccountContext } from "./accountContext";

export function LoginForm(props) {
  const { switchToSignup } = useContext(AccountContext);

  const navigate = useNavigate();
  const signin = useCallback(() => navigate('/home', {replace: true}), [navigate]);

  return (
    <BoxContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
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
        <BoldLink href="#">
          <i class='fab fa-google' />
        </BoldLink>
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
