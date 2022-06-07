import React from 'react'
import ProblemBox from './ProblemBox.js'
import ProblemDetails from '../Data/ProblemDetails.js'
import './ProblemList.css'

const ProblemList = (props) => {

    var difficulty = props.filter1
    var status = props.filter2

    const allUnchecked = arr => arr.every(v => v === false);

    if(allUnchecked(difficulty)) {
        difficulty = difficulty.map((item) => true)
    }
    if(allUnchecked(status)) {
        status = status.map((item) => true)
    }

    var stat = ["Solved", "Unsolved"]
    var diff = ["Easy", "Medium", "Difficult"]

    diff = diff.map((item, index) => (difficulty[index])?item:null)
    stat = stat.map((item, index) => (status[index])?item:null)

    console.log(diff)
    console.log(stat)
    
  return (
    <div className="ProblemList">
          { ProblemDetails.map((problem) =>

            (diff.includes(problem.difficulty) && stat.includes(problem.status))?
            <ProblemBox 
              name = {problem.name}
              difficulty = {problem.difficulty}
              points = {problem.points}
              status = {problem.status}
            />:null
            )
          }    
    </div>
  )
}

export default ProblemList