import React, { useContext } from "react";
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

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signup</SubmitButton>
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
