import React, { useState } from "react"
import './ide.css';
import Editor from "@monaco-editor/react";
/*import Navbar from "./Navbar";*/
import Container from 'react-bootstrap/Container';
import Axios from 'axios';
import spinner from './images/spinner.png';
import Select from 'react-select';
import { Nav, Navbar} from 'react-bootstrap';



function Ide(props) {
    const [userCode, setUserCode] = useState(``);
    const [userLang, setUserLang] = useState("python");
    const [userTheme, setUserTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(20);
    const [userInput, setUserInput] = useState("");
    const [userOutput, setUserOutput] = useState("");
    const [loading, setLoading] = useState(false);
    const options = {
        fontSize: fontSize
    }

    function compile() {
        setLoading(true);
        if (userCode === ``) {
            return
        }


        Axios.post(`http://localhost:8000/compile`, {
            code: userCode,
            language: userLang,
            input: userInput
        }).then((res) => {
            setUserOutput(res.data.output);
        }).then(() => {
            setLoading(false);
        })
    }

    function clearOutput() {
        setUserOutput("");
    }
    const languages = [
        { value: "c", label: "C" },
        { value: "cpp", label: "C++" },
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
    ];
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]
    return (
        <><h2 className="quest my-3">Tower of Hanoi</h2>
           {props.question}

            <div className="Ide ">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>

                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <div className="drops">
                                    <Select options={languages} value={userLang}
                                        onChange={(e) => setUserLang(e.value)}
                                        placeholder={userLang} />
                                    <Select options={themes} value={userTheme}
                                        onChange={(e) => setUserTheme(e.value)}
                                        placeholder={userTheme} />
                                </div>
                                <label className="label">Font Size</label>
                                <input type="range" min="18" max="30"
                                    value={fontSize} step="2"
                                    onChange={(e) => { setFontSize(e.target.value) }} />
                            </Nav>
                            <Nav>
                                <Nav.Link href="/discussions">Discussions</Nav.Link>
                                <Nav.Link href="#submissions">Submissions</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                <button className="run-btn" onClick={() => compile()}>
                    <li>Run</li>
                </button>
                <div className="main">
                    <div className="left-container">
                        <Editor
                            options={options}
                            height="calc(100vh - 50px)"
                            width="100%"
                            theme={userTheme}
                            language={userLang}
                            defaultLanguage="python"
                            defaultValue="# Enter your code here"
                            onChange={(value) => { setUserCode(value) }}

                        />
                        <button className="run-btn" onClick={() => compile()}>
                            <li>Run</li>
                        </button>
                    </div>
                    <div className="right-container">
                        <h4>Input:</h4>
                        <div className="input-box">
                            <textarea id="code-inp" onChange=
                                {(e) => setUserInput(e.target.value)}>
                            </textarea>
                        </div>
                        <h4>Output:</h4>
                        {loading ? (
                            <div className="spinner-box">
                                <img src={spinner} alt="Loading..." />
                            </div>
                        ) : (
                            <div className="output-box">
                                <pre>{userOutput}</pre>
                                <button onClick={() => { clearOutput() }}
                                    className="clear-btn">
                                    <li>Clear</li>
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ide