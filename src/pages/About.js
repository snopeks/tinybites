import React from 'react';
import stephbaby from '../stephbaby.jpg';
import { Link } from 'react-router-dom';


const About = () => (
    <div className="content"> 
        <h2>About Tiny Bites</h2>
        <img src={stephbaby}></img>
        <div className="text">
            <h3>Hi! My name is Stephanie and my daughter loves to eat!</h3>
            <p>I made Tiny Bites because I wanted to keep track of all the nutrition information and favorite easy meals I've learned over the past few months.</p>
            <p>With all the people offering conflicting advice, and the myriad of random baby food recipes on the internet, I decided to investigate all the details myself. I thought, maybe there are others who could benefit from a research project that covers the nutrient needs of babies from 6-12 months.</p>
            <p><i>Please note</i>, this is not medical advice! <b>I am not a nutritionist, a doctor, or a dietician!</b> I have simply researched this topic and pulled together the essentials about feeding babies their first meals. Always consult your healthcare provider for medical advice.</p>
            <p>For expert advice, check out my <Link to="/resources">Resources</Link> page!</p>
        </div>
    </div>
)

export default About; 