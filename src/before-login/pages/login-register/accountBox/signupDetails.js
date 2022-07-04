import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  SubmitButton,
} from "./common";

const SignupDetails = () => {
  const navigate = useNavigate();
  const handleSubmit = useCallback(
    () => navigate("/home", { replace: true }),
    [navigate]
  );
  return (
    <div>
      <SubmitButton type="submit" onClick={handleSubmit}>
        Submit
      </SubmitButton>
    </div>
  );
};

export default SignupDetails;
