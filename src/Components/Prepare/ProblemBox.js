import React from 'react'
import './ProblemBox.css'
import { Link } from "react-router-dom"

const ProblemBox = (props) => {
  return (
    <div className="ProblemBox">
            <div className="problem-details">
                <h3 className="problem-name">{props.name}</h3>
                <h5 className="problem-difficulty">Difficulty: {props.difficulty}</h5>
                <h5 className="problem-points">Points: {props.points}</h5>
            </div>
            <div className="solve-button-container">
                <i className="far fa-bookmark bookmark-icon"></i>
                <Link to="/Ide"><button className="solve-button">
                    {(props.status === "Solved")?"Solved ✓":"Attempt !"}
                </button></Link>
            </div>        
    </div>
  )
}

export default ProblemBox