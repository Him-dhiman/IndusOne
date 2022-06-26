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

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  const navigate = useNavigate();
  const signup = useCallback(() => navigate('/signup_details', {replace: true}), [navigate]);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <SubmitButton type="submit" onClick={signup}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <BoldLink href="#" onClick={switchToSignin}>
          Signin
        </BoldLink>
      </MutedLink>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Sign Up Using &nbsp;
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
