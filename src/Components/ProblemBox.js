import React from 'react'
import './ProblemBox.css'

const ProblemBox = (props) => {
  return (
    <div className="ProblemBox">
            <div className="problem-details">
                <h3 className="problem-name">{props.name}</h3>
                <h5 className="problem-difficulty">Difficulty: {props.difficulty}</h5>
                <h5 className="problem-points">Points: {props.points}</h5>
            </div>
            <div className="solve-button-container">
                <button className="solve-button">
                    {(props.status === "Solved")?"Solved ✓":"Attempt !"}
                </button>
            </div>        
    </div>
  )
}

export default ProblemBox