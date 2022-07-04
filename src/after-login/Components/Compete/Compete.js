import React from 'react'
import './Compete.css'
import "bootstrap-icons/font/bootstrap-icons.css";
import Competitions from './Competitions.js'

const Compete = () => {
  return (
    <div className="Compete">

        <Competitions
            heading="Upcoming Competitions"
            competitions={["Hackathon IIT KGP 2022", "Amazon Hiring Challenge", "Tech IndusOne June Competition"]}
            message="Set Reminder"
        />

        <Competitions
            heading="Ongoing Competitions"
            competitions={["DSA Challenge 2022"]}
            message="Register Now"
        />

        <Competitions
            heading="Past Competitions"
            competitions={["MSCI Developer Challenge", "Flipkart GRiD 4.0 Hackathon", "Tech IndusOne May Competition", "Codenation Contest", "Algorithm Masters - 2022", "Walmart Hiring Contest", "Tech IndusOne April Competition"]}
            message="View Contest"
        />
        
    </div>
  )
}

export default Compete