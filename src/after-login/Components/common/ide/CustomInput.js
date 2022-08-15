import React from "react";
import './ide.css';

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      {" "}
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        id="code-inp"
      ></textarea>
    </>
  );
};

export default CustomInput;