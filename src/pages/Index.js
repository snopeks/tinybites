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
            <h2>Welcome to Tiny Bites!</h2>
            <p>Tiny Bites offers feeding tips, easy meals, and expert resources for baby nutrition.</p>
            <p>Here you can find all the essential research on <b>important nutrients</b>, tackling <b>allergenic foods, baby lead weaning, food safety tips</b>, and <b>healthy recipes</b> for your baby!</p>
            <h3>Check out the links below to explore these tasty tidbits of information.</h3>
        </div>

        <div className="container">
            <div className="section" onClick={() => changePage("nutrition")}>
                <div className="s1"></div>
                <div>
                    <h3>Nutrition</h3>
                    <p>Everything you need to know about what nutrients your baby needs and when.</p>
                </div>
            </div>
            <div className="section" onClick={() => changePage("easymeals")}>
                <div className="s2"></div>
                <div>
                    <h3>Meals</h3>
                    <p>Learn how to feed your baby safely, plus some easy recipes for parents on-the-go.</p>
                </div>
            </div>
            <div className="section" onClick={() => changePage("resources")}>
                <div className="s3"></div>
                <div>
                    <h3>Resources</h3>
                    <p>A list of nutritionists' websites and social media accounts so you can read and validate the research.</p>
                </div>
            </div>
        </div>
    </div>

)

export default Home;