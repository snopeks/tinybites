import React from 'react';
import { Link } from 'react-router-dom';


const Safety = () => (
    <div className="content"> 
        <h2 className="pageTitle">Safety</h2>
        <div>
            <div className="text">
                <p>Safety Information</p>
                <p>Please note, <b>this is not medical advice!</b> I am not a nutritionist, a doctor, or a dietician! I have simply researched this topic and pulled together the essentials about feeding babies in the first six months. Always consult your healthcare provider for medical advice.</p>
                <p>For expert advice, check out my <Link to="/resources">Resources</Link> page!</p>
            </div>
        </div>
    </div>
)

export default Safety; 