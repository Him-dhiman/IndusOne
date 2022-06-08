import React, {useState} from 'react'
import './Body.css'

import ProblemList from './ProblemList.js'
import Filter from './Filter.js'

const Body = () => {

  const [status, setStatus] = useState([false,false])
  const [difficulty, setDifficulty] = useState([false,false,false])
  const diffAttr = ["Easy", "Medium", "Hard"]
  const statAttr = ["Solved", "Unsolved"]

  return (
    <div className="Body">

      <ProblemList 
        filter1 = {difficulty}
        filter2 = {status}
        filter1Attr = {diffAttr} 
        filter2Attr = {statAttr}
      /> 

      <div>
        <Filter
          filterType = "Difficulty"
          filterAttr = {diffAttr} 
          filter = {difficulty}
          setFilter = {setDifficulty}
        />

        <Filter
          filterType = "Status"
          filterAttr = {statAttr} 
          filter = {status}
          setFilter = {setStatus}
        />
      </div>

    </div>
  )
}

export default Body