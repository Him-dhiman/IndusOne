import React from 'react'
import ProblemBox from './ProblemBox.js'
import ProblemDetails from '../Data/ProblemDetails.js'
import './ProblemList.css'

const ProblemList = (props) => {

    var difficulty = props.filter1
    var status = props.filter2

    const allUnchecked = arr => arr.every(v => v === false);

    //if all are unchecked treat it as all are checked
    if(allUnchecked(difficulty)) {
        difficulty = difficulty.map((item) => true)
    }
    if(allUnchecked(status)) {
        status = status.map((item) => true)
    }

    //store required attributes in array
    var diff = props.filter1Attr.map((item, index) => (difficulty[index])?item:null)
    var stat = props.filter2Attr.map((item, index) => (status[index])?item:null)
    
  return (
    <div className="ProblemList">
          { ProblemDetails.map((problem) =>

            //print only if question matches with required atttributes
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