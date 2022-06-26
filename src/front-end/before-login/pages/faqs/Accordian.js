import React, {useState} from 'react'

const Accordian = ({ question, answer }) => {
    const [show, setShow] = useState(false);
    return (
        <>
           <div className="acc-main-heading">
                <p onClick={() => setShow(!show)}> { show? "➖" : "➕"} </p>
                <h3>{question}</h3>
                   
            </div>
            { show &&  <p className="acc-answers"> {answer} </p> }
         
        </>
    )
}

export default Accordian;