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
            <h3>Tiny Bites offers feeding tips, easy meals, and expert resources for baby nutrition.</h3>
            <p>All the essential research on important nutrients, tackling allergenic foods, baby lead weaning, food safety tips, and healthy recipes for your baby!</p>
            <p>Check out the links below to explore these tasty tidbits of information.</p>
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