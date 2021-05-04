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
        <div id="homePage" className="text">
            <h2>Welcome to Tiny Bites!</h2>
            <p>Tiny Bites offers feeding tips, easy meals, and expert resources for baby nutrition.</p>
            <p>Here you can find all the essential research on <b>important nutrients</b>, tackling <b>allergenic foods, food safety tips</b>, and <b>healthy recipes</b> for your baby!</p>
            <div>
                <h2>Baby Led Weaning</h2>
                <p>These research is based on a philosophy called <i>baby led weaning</i>. Essentially it means we feed babies whole foods (instead of pureeing them).</p>
                <p>As long as the foods are prepared to an age appropriate texture and size, it is no more likely to be a choking hazard than purees!</p>
            </div>
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
                    <p>A list of nutritionists and government health websites to learn from.</p>
                </div>
            </div>
        </div>
    </div>

)

export default Home;