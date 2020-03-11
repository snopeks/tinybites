import React from 'react';


const Home = () => (
    <div className="content">
        <h2>Feeding your baby just got easier!</h2>
        <p>We know you want to feed your baby well and ensure they grow up healthy and strong.</p>
        <p>But it can be confusing to know what's best with the endless conflicting advice you get as new parents! </p>
        <h3>This site is for parents who want a quick and easy resource to remember key nutrients, easy ingredients, and recommended resources for your baby's meals.</h3>

        <div className="container">
            <div className="section">
                <a href="/nutrients">
                    <div>
                        <h3>Nutrients!</h3>
                    </div>
                </a>
            </div>
            <div className="section">
                <a href="/easymeals">
                    <div>
                        <h3>Meal Ideas!</h3>
                    </div>
                </a>
            </div>
            <div className="section">
                <a href="/resources">
                    <div>
                        <h3>Resources!</h3>
                    </div>
                </a>
            </div>
        </div>
    </div>

)

export default Home;