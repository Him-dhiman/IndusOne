import React, {useState} from 'react'
import './Body.css'

import ProblemList from './ProblemList.js'

const Body = () => {

  const [status, setStatus] = useState([false,false])
  const stat = ["Solved", "Unsolved"]

  const [difficulty, setDifficulty] = useState([false,false,false])
  const diff = ["Easy", "Medium", "Difficult"]

  const statOnCheck = (position) => {
    const updatedCheckedState = status.map((item, index) =>
      index === position ? !item : item
    );
    setStatus(updatedCheckedState);
  }

  const diffOnCheck = (position) => {
    const updatedCheckedState = difficulty.map((item, index) =>
      index === position ? !item : item
    );
    setDifficulty(updatedCheckedState);
  }

  return (
    <div className="Body">

      <ProblemList 
        filter1 = {difficulty}
        filter2 = {status}
      /> 

      <div className="Filters">

      <div className="filter">
        <h4>Difficulty</h4>
        { 
          diff.map((name, index) => {

            return (
              <ul className="filter-list">
                <li key={index}>
                  <div className="list-item">
                      <input
                        type="checkbox"
                        id={`checkbox-${name}`}
                        name={name}
                        value={name}
                        checked={difficulty[index]}
                        onChange={()=>diffOnCheck(index)}
                      />
                      <label htmlFor={`checkbox-${name}`}>{name}</label>
                  </div>
                </li>
              </ul>
            )
          })
        }
        </div>

        <div className="filter">
        <h4>Status</h4>
        { 
          stat.map((name, index) => {

            return (
              <ul className="filter-list">
                <li key={index}>
                  <div className="list-item">
                      <input
                        type="checkbox"
                        id={`checkbox-${name}`}
                        name={name}
                        value={name}
                        checked={status[index]}
                        onChange={()=>statOnCheck(index)}
                      />
                      <label htmlFor={`checkbox-${name}`}>{name}</label>
                  </div>
                </li>
              </ul>
            )
          })
        }
        </div>

      </div>
    </div>
  )
}

export default Body