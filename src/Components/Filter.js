import React from 'react'
import './Filter.css'

const Filter = (props) => {

    const filterAttr = props.filterAttr
    
    const onCheck = (position) => {
        const updatedCheckedState = props.filter.map((item, index) =>
          index === position ? !item : item
        );
        props.setFilter(updatedCheckedState);
      }

  return (
    <div className="filter">
        <h4>{props.filterType}</h4>
        { 
          filterAttr.map((name, index) => {

            return (
              <ul className="filter-list">
                <li key={index}>
                  <div className="list-item">
                      <input
                        type="checkbox"
                        id={`checkbox-${name}`}
                        name={name}
                        value={name}
                        checked={props.filter[index]}
                        onChange={()=>onCheck(index)}
                      />
                      <label htmlFor={`checkbox-${name}`}>{name}</label>
                  </div>
                </li>
              </ul>
            )
          })
        }
    </div>
  )
}

export default Filter