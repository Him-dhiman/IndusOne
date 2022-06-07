import React from 'react'
import './ProblemBox.css'

const ProblemBox = (props) => {
  return (
    <div className="ProblemBox">
            <div className="problem-details">
                <h3 className="problem-name">{props.name}</h3>
                <h5>Difficulty: {props.difficulty}</h5>
                <h5>Points: {props.points}</h5>
            </div>
            <div className="solve-button">
                <button>
                    {(props.status === "Solved")?"Solved✓":"Attempt"}
                </button>
            </div>        
    </div>
  )
}

export default ProblemBox