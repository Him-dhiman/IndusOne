import React, {useState} from 'react'
import './Prepare.css'

import ProblemList from './ProblemList.js'
import Filter from './Filter.js'

const Body = ({setQuestion}) => {

  const diffAttr = ["Easy", "Medium", "Hard"]
  const statAttr = ["Solved", "Unsolved"]
  const categories = ["Arrays", "Strings", "Recursion", "Bit Manipulation", "Dynamic Programming", "Graphs"]
  const [status, setStatus] = useState(new Array(statAttr.length).fill(false))
  const [difficulty, setDifficulty] = useState(new Array(diffAttr.length).fill(false))
  const [category, setCategory] = useState(new Array(categories.length).fill(false))
  
  return (
    <div className="Prepare">

      <ProblemList 
        filter1 = {difficulty}
        filter2 = {status}
        filter3 = {category}
        filter1Attr = {diffAttr} 
        filter2Attr = {statAttr}
        filter3Attr = {categories}
        setQuestion = {setQuestion}
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

        <Filter
          filterType = "Category"
          filterAttr = {categories}
          filter = {category}
          setFilter = {setCategory}
        />

      </div>

    </div>
  )
}

export default Body