import React, { useState } from "react";

import Editor from "@monaco-editor/react";

const CodeEditorWindow = ({ onChange, language, code, theme, options }) => {
  const [value, setValue] = useState(code || "");

  const handleEditorChange = (value) => {
    setValue(value);
    onChange("code", value);
  };

  
  return (
    <div >
      <Editor
        options={options}
        height="calc(100vh - 50px)"
        width={`100%`}
        language={language || "javascript"}
        value={value}
        theme={theme}
        defaultValue="//Enter your code here"
        onChange={handleEditorChange}
      />
    </div>
  );
};
export default CodeEditorWindow;