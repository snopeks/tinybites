import React from 'react';
import stephbaby from '../stephbaby.jpg';
import { Link } from 'react-router-dom';


const About = () => (
    <div> 
        <h2>About Tiny Bites</h2>
        <img src={stephbaby}></img>
        <h3>Hi! My name is Stephanie and I am a new mom to a daughter who loves to eat!</h3>
        <p>I made Tiny Bites because I got tired of constantly second-guessing myself about what to feed my baby.</p>
        <p>With all the people offering conflicting advice, and the myriad of random baby food recipes on the internet, I decided to investigate all the details myself. And I thought, there are probably others who could benefit from a concise research project that covers the nutrient needs of babies from 6-12 months.</p>
        <p><i>Please note</i>, I am not a nutritionist, a doctor, or a dietician! I have simply researched this topic and pulled together all the information in one place.</p>
        <p>For expert advice, check out my <Link to="/resources">Resources</Link> page!</p>


    </div>
)

export default About; 