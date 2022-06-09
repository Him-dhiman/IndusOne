import "./design.css";
import styled from "styled-components";
import { AccountBox } from "./accountBox";

const AppContainer = styled.div`
  margin-top: 5vh;
  margin-bottom: 5vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignInAndSignUp() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default SignInAndSignUp;
