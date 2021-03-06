import React from 'react';
import stephbaby from '../stephbaby.jpg';
import { Link } from 'react-router-dom';


const About = () => (
    <div className="content"> 
        <h2 className="pageTitle">About</h2>
        <div className="aboutcontainer">
            <img className="aboutImg" src={stephbaby} alt="steph and baby"></img>
            <div className="text">
                <h3>Hi! My name is Stephanie and my daughter loves to eat!</h3>
                <p>I made Tiny Bites because I wanted to keep track of all the nutrition information and favorite easy meals I've learned over the past few months.</p>
                <p>My hope is that this project inspires you to keep meals easy and nutritious, no need to stress about feeding your baby!</p>
                <p>Please note, <b>this is not medical advice!</b> I am not a nutritionist, a doctor, or a dietician! I have simply researched this topic and pulled together the essentials about feeding babies in the first six months. Always consult your healthcare provider for medical advice.</p>
                <p>For expert advice, check out my <Link to="/resources">Resources</Link> page!</p>
            </div>
        </div>
    </div>
)

export default About; 