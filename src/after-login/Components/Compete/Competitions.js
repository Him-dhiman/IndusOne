/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import './Competitions.css'

const Competitions = (props) => {
    const [reminder, setReminder] = useState(new Array(props.competitions.length).fill(false))
    const competitions = props.competitions

    const updateReminder = (position) => {
        const updatedReminders = reminder.map((item, index) =>
          index === position ? !item : item
        );
        // setReminder(updatedReminders);

    }

  return (
    <div className="Competitions">
        <h5 className="competition-name">{props.heading}</h5>
        <ul>
            {
                competitions.map((competition, index) => {
                    // return <li className="competition-item">{competition} <span className="set-reminder" onClick={updateReminder(index)}>{props.message}<i class={"bi bi-bell"+(reminder[index]?"-fill":"")}></i></span></li>
                    return <li className="competition-item">{competition} <span className="set-reminder" onClick={updateReminder(index)}>{props.message}</span></li>
                })
            }
        </ul>
    </div>
  )
}

export default Competitions