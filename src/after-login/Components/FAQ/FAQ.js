import React from 'react'
import Button from 'react-bootstrap/Button'
import './FAQ.css';
import { Link } from "react-router-dom"

function FAQ() {
    return (
        <>
            <h1 className="faq">Frequently Asked Questions</h1>
            <div className='container flexSB'>
                <div className='left-row'><Link to="/FAQ/askquestion"><Button variant="warning">Ask A Question</Button></Link></div>
                <div><form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                </form></div>
            </div>
            <hr />
            <div className='whole'>
                <div className='topics'>
                    <h5 className='gen '>General Questions</h5>
                    <li>What is Tech IndusOne?</li>
                    <li>Is Tech IndusOne help me to earn and get job?</li>
                    <li>Why should I solve Challenges</li>
                </div>
                <div className='answers'>
                    <h3 className='gen'>General Questions</h3>
                    <h5>What is Tech IndusOne?</h5>
                    <li>HackerRank is a place where programmers from all over the world come together to solve problems in a wide range of Computer Science domains such as algorithms, machine learning, or artificial intelligence, as well as to practice different programming paradigms like functional programming.</li>
                    <hr /><h5>Is Tech IndusOne help me to earn and get job</h5>
                    <li>Yes! There are a few options:

                        <li>Compete. We run regular hackathons with cash prizes. For our sponsored competitions, we even connect you to companies who are hiring as long as you opt-in to being contacted. Check out our upcoming competitions to start competing!</li>

                        <li>Jobs. Solving the coding challenges at our Jobs page lets you apply for software engineering positions at a variety of companies at once, or even just the companies you're interested in working for.</li>

                        <li>Paid Contributor. You can create your own challenges and become a paid contributor.</li></li>
                    <hr />
                    <h5>Why should I solve challenges?</h5>
                    <li>For Fun. What's more exciting than solving challenging problems? We're constantly adding helpful features to make our platform the best possible experience, such as boilerplate code and animations that display when you're running code.</li>

                    <li>Jobs. Looking for a job at an awesome company? You can get hired by solving challenges! See our Jobs page for details.</li>

                    <li>Glory. As you solve more challenges, you earn points and move up the HackerRank Leaderboard.</li>

                    <li>Community. We're constantly growing our strong community of developers who discuss problems, learn, compete, and collaborate together.</li>

                    <li>Learning . Expand your knowledge by learning new programming topics and techniques by going through our challenges and editorial solutions. We believe the best way to learn something is by doing it! Have a look at our Tutorial domains.</li>

                    <li>And More!</li>
                </div>
            </div>
        </>
    )
}

export default FAQ
