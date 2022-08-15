import "./design.css";
import styled from "styled-components";
import { AccountBox } from "./accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(90deg, #0F2027 0%, #203A43 50%, #0F2027 100%);
`;

function SignInAndSignUp() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default SignInAndSignUp;
