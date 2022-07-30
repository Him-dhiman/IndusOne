import React, { useState, useEffect } from "react"
import './ide.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import CodeEditorWindow from "./CodeEditorWindow";
import Select from 'react-select';
import { Nav, Navbar } from 'react-bootstrap';
import { languageOptions } from "./constants/languageOptions";
import { Buffer } from 'buffer';
import CustomInput from "./CustomInput";
import LanguagesDropdown from "./LanguagesDropdown";
import useKeyPress from "./hooks/useKeyPress";
import OutputWindow from "./OutputWindow";
import OutputDetails from "./OutputDetails";
/*import { Link } from "react-router-dom"*/
const encodeBase64 = (data) => {
    return Buffer.from(data).toString('base64');
}

const javascriptDefault = ``;

function Ide({question }) {
    const [code, setCode] = useState(javascriptDefault);
    const [language, setLanguage] = useState(languageOptions[0]);
    const [userTheme, setUserTheme] = useState("vs-dark");
    const [fontSize, setFontSize] = useState(20);
    const [customInput, setCustomInput] = useState("");
    const [outputDetails, setOutputDetails] = useState(null);
    const [processing, setProcessing] = useState(null);
    const [loading, setLoading] = useState(null);
    const [restatus,setRestatus] = useState(null);
    const options = {
        fontSize: fontSize
    }
    const enterPress = useKeyPress("Enter");
    const ctrlPress = useKeyPress("Control");

    const onSelectChange = (sl) => {
        console.log("selected Option...", sl);
        setLanguage(sl);
    };
    
    useEffect(() => {
        if (enterPress && ctrlPress) {
            console.log("enterPress", enterPress);
            console.log("ctrlPress", ctrlPress);
            handleCompile();
        }
    }, [ctrlPress, enterPress]);

    const onChange = (action, data) => {
        switch (action) {
            case "code": {
                setCode(data);
                break;
            }
            default: {
                console.warn("case not handled!", action, data);
            }
        }
    };
    
    const handleCompile = () => {
        setLoading(false);
        setProcessing(true);
        const formData = {
            language_id: language.id,
            // encode source code in base64
            source_code: encodeBase64(code),
            stdin: encodeBase64(customInput),
        };
        const options = {
            method: "POST",
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
                "X-RapidAPI-Key": '9b212b9d8cmsh1009d31850cf944p136781jsnd82903ce32f1',
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                checkStatus(token);
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                // get error status
                let status = err.response.status;
                console.log("status", status);
                if (status === 429) {
                    console.log("too many requests", status);


                }
                setProcessing(false);
                console.log("catch block...", error);
            });
    };

    const handleSubmit = () => {
        setProcessing(false);
        setLoading(true);
        const formData = {
            language_id: language.id,
            // encode source code in base64
            source_code: encodeBase64(code),
            stdin: encodeBase64(customInput),
        };
        const options = {
            method: "POST",
            url: 'https://judge0-ce.p.rapidapi.com/submissions',
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "content-type": "application/json",
                "Content-Type": "application/json",
                "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
                "X-RapidAPI-Key": '9b212b9d8cmsh1009d31850cf944p136781jsnd82903ce32f1',
            },
            data: formData,
        };

        axios
            .request(options)
            .then(function (response) {
                console.log("res.data", response.data);
                const token = response.data.token;
                checkStatus(token);                
            })
            .catch((err) => {
                let error = err.response ? err.response.data : err;
                // get error status
                let status = err.response.status;
                console.log("status", status);
                if (status === 429) {
                    console.log("too many requests", status);


                }
                setLoading(false);
                console.log("catch block...", error);
            });
    };

    const checkStatus = async (token) => {
        const options = {
            method: "GET",
            url: 'https://judge0-ce.p.rapidapi.com/submissions' + "/" + token,
            params: { base64_encoded: "true", fields: "*" },
            headers: {
                "X-RapidAPI-Host": 'judge0-ce.p.rapidapi.com',
                "X-RapidAPI-Key": '9b212b9d8cmsh1009d31850cf944p136781jsnd82903ce32f1',
            },
        };
        try {
            let response = await axios.request(options);
            let statusId = response.data.status?.id;

            // Processed - we have a result
            if (statusId === 1 || statusId === 2) {
                // still processing
                setTimeout(() => {
                    checkStatus(token);
                }, 2000);
                return;
            } else {
                setProcessing(false);
                
                setOutputDetails(response.data);
                setRestatus(response.data.status.description);
                console.log("response.data", response.data);
                console.log("status", response.data.status.description);
                return;
            }
        } catch (err) {
            console.log("err", err);
            setProcessing(false);
            
        }
    };

    function clearOutput() {
        setOutputDetails("");
    }
    
    
    const themes = [
        { value: "vs-dark", label: "Dark" },
        { value: "light", label: "Light" },
    ]

    const PostData = async()=>{
                
        const usercode= code;
        const rstatus = restatus;
        const res = await fetch('/sub', {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                usercode,rstatus
            })
            
        });
        const data = await res.json();
        
        if(res.status===422 || !data){
            window.alert("invalid sub");
            console.log("invalid sub");
        }
        else{
            window.alert("successful sub");
            console.log("successful sub");
        }
        
    }

    return (
        <><h2 className="quest my-3">{question.title}</h2>

            <div className="question-content">
                {question.description}
            </div>


            <div className="Ide ">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <div className="drops">
                                    <div>
                                        <LanguagesDropdown onSelectChange={onSelectChange} />
                                    </div>
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
                                <Nav.Link href="/Ide/discussions">Discussions</Nav.Link>
                                <Nav.Link href="/Ide/submissions">Submissions</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>


                <div className="main">
                    <div className="left-container">
                        <form method="POST">
                        <CodeEditorWindow
                            id="editor-form"
                            code={code}
                            onChange={onChange}
                            language={language?.value}
                            theme={userTheme}
                            options={options}
                        /></form>

                        <button className="run-btn" onClick={handleCompile} disabled={!code} >
                            <li>{processing ? "Running..." : "Run"}</li>
                        </button>
                        <input type="submit" name="submission" id="submission" className="sub-btn" value="Submit" onClick={() => { PostData(); handleSubmit();}}
                        />

                    </div>
                    <div className="right-container">
                        <h4>Input:</h4>
                        <div className="input-box">
                            <CustomInput
                                customInput={customInput}
                                setCustomInput={setCustomInput}
                            />
                        </div>
                        <h4>Output:</h4>
                        {
                            loading?(
                                <div className="output-box">
                                     <OutputWindow outputDetails={outputDetails} />
                                     <button onClick={() => { clearOutput() }}
                                className="clear-btn">
                                <li>Clear</li>
                            </button>
                            {outputDetails && <OutputDetails outputDetails={outputDetails} />}
                            </div>
                            ): <div className="output-box">
                            <OutputWindow outputDetails={outputDetails} />
                            <button onClick={() => { clearOutput() }}
                                className="clear-btn">
                                <li>Clear</li>
                            </button></div>
                        }                    
                    </div>
                </div>
            </div>
        </>
    );
}

export default Ide