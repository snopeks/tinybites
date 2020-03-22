import React from 'react';

const changePage = (path) => {
    console.log(path)
    window.location.href = `/${path}`; 
}

const Home = () => (
    <div className="content">
        <div className="babyImage">
            <h2>Feeding your baby just got easier!</h2>
        </div>
        <div className="text">
            <p>We know you want to feed your baby well and ensure they grow up healthy and strong.</p>
            <p>But it can be confusing to know what's best with the endless conflicting advice you get as new parents! </p>
            <h3>This site is for parents who want a quick reference to remember <br/>1) key nutrients, <br/> 2) easy meals, and <br/>3) expert resources for baby nutrition.</h3>
        </div>

        <div className="container">
            <div className="section s1" onClick={() => changePage("nutrients")}>
                <div>
                    <h3>Nutrients</h3>
                </div>
            </div>
            <div className="section s2" onClick={() => changePage("easymeals")}>
                <div>
                    <h3>Meal Ideas</h3>
                </div>
            </div>
            <div className="section s3" onClick={() => changePage("resources")}>
                <div>
                    <h3>Resources</h3>
                </div>
            </div>
        </div>
    </div>

)

export default Home;