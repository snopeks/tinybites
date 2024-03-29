import React from 'react';
import nursingImg from '../nursing-photo.jpeg';
import babyEatingImg from '../baby-eating.jpeg';
const Nutrients = () => (
    <div className="content">
        <h2 className="pageTitle">Nutrition</h2>
        <h1>When to feed what?</h1>
        <div className="smallcontainer">
            <img src={nursingImg} className="eatingImg" alt="baby nursing"></img>
            <div className="text">
                <h2>0-6 months: Babies need milk</h2>
                <p>For the first six months of life, babies should only get <b>breastmilk</b> or <b>infant formula</b> (not cows milk). This liquid diet is highly nutritious, absorbable and rich in fats, perfect for their needs.</p>
                <p>Starting solid foods too early can interfere with their milk intake, which can cause them to be deficient in calories and nutrients because baby digestive systems usually aren't  capable of handling solids effectively yet.</p>
            </div>
        </div>
        <div className="smallcontainer">
            <img src={babyEatingImg} className="eatingImg" alt="baby eating"></img>
            <div className="text">
                <h2>6-12 months: Time to add food</h2>
                <p>Babies need breastmilk or infant formula up until 1 year at least, but by 6 months they are ready for the addition of solid food -- Exciting! </p>
                <p>At this time, you should be prioritizing iron and several other key nutrients when planning their meals.</p>
            </div>
        </div>
        <div id="feedingTips">
            <h2>Don't stress over every meal. Focus on food diversity!</h2>
            <p>To make this even easier, the powerhouse foods section highlights foods that cover at least 3 of these important nutrients! For a general goal, the best advice I've read is to provide <b>one iron, fat and fruit/veg source per meal</b></p>
            <p>Keep in mind that by giving your baby a wide variety of foods, you are most likely hitting these targets already! </p>
        </div>
        <h2>Powerhouse foods</h2>
        <div className="powerhouseContainer">
            <div className="header"></div>
            <div className="header" id="food1"><h3>Eggs</h3></div>
            <div className="header" id="food2"><h3>Tofu</h3></div>
            <div className="header" id="food3"><h3>Nut Butters</h3></div>
            <div className="header" id="food4"><h3>Beans, Peas, Lentils</h3></div>
            <div className="header" id="food5"><h3>Cheese &amp; Yogurt</h3></div>
            <div className="header" id="nut1"><h3>Iron</h3></div>
            <div className="header" id="nut2"><h3>Protein</h3></div>
            <div className="header" id="nut3"><h3>B12</h3></div>
            <div className="header" id="nut4"><h3>Omega-3 fats</h3></div>
            <div className="header" id="nut5"><h3>Calcium</h3></div>
            <div className="header" id="nut6"><h3>Fat</h3></div>
            <div className="header" id="nut7"><h3>Zinc</h3></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>

            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>
            <div></div>
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
            
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>
            <div></div>
            <div></div>
            
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div><p className="checkmark">&#x2714;</p></div>
            
            <div></div>
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
            
            

            
            <div><p className="checkmark">&#x2714;</p></div>
            <div></div>
            <div></div>
            <div></div>
            <div><p className="checkmark">&#x2714;</p></div>
        </div>
        <h2>Key Nutrients</h2>
        <div className="nutrients container">
            <div>
                <h3 className="nutrientHeader">Iron</h3>
                <ul>
                    <li>fortified cereals</li>
                    <li>beans, peas and lentils</li>
                    <li>tofu</li>
                    <li>eggs</li>
                    <li>thinly spread nut butters</li>
                </ul>
                <p>Combining iron with a vitamin C source (e.g. citrus fruits) increases iron absorption by up to 5x!</p>
            </div>
            <div>
                <h3 className="nutrientHeader">Protein</h3>
                <ul>
                    <li>breastmilk</li>
                    <li>infant formula</li>
                    <li>eggs</li>
                    <li>cheese and yogurt</li>
                    <li>tofu</li>
                    <li>beans, peas and lentils</li>
                    <li>fortified soy yogurt</li>
                    <li>thinly spread nut butters</li>
                </ul>
            </div>
            <div>
                <h3 className="nutrientHeader">Fat</h3>
                <ul>
                    <li>breastmilk</li>
                    <li>infant formula</li>
                    <li>pasteurized cheese</li>
                    <li>yogurt (4% M.F. or higher)</li>
                    <li>oil and soft non-hydrogenated margarines</li>
                    <li>avocado</li>
                    <li>thinly spread nut butters</li>
                </ul>
            </div>
            <div>
                <h3 className="nutrientHeader">Omega-3 Fats</h3>
                <ul>
                    <li>breastmilk</li>
                    <li>infant formula</li>
                    <li>omega-3 enriched eggs</li>
                    <li>ground walnuts</li>
                    <li>tofu</li>
                    <li>canola oil, soy oil, soybeans</li>
                </ul>
            </div>
            <div>
                <h3 className="nutrientHeader">Vitamin B12</h3>
                <ul>
                    <li>eggs</li>
                    <li>cheese and yogurt</li>
                    <li>infant formula</li>
                </ul>
                <p>Please note that breastmilk may not provide enough B12. </p>
            </div>
            <div>
                <h3 className="nutrientHeader">Vitamin D</h3>
                <ul>
                    <li>infant formula</li>
                </ul>
                <p>It is recommended that breastfed babies are given a supplement of 400UI per day.</p>
            </div>
            <div>
                <h3 className="nutrientHeader">Calcium</h3>
                <ul>
                    <li>breastmilk</li>
                    <li>infant formula</li>
                    <li>cheese and yogurt</li>
                    <li>beans, peas and lentils</li>
                    <li>fortified soy yogurt</li>
                    <li>calcium-fortified tofu</li>
                </ul>
            </div>
            <div>
                <h3 className="nutrientHeader">Zinc</h3>
                <ul>
                    <li>breastmilk</li>
                    <li>infant formula</li>
                    <li>thinly spread nut butters</li>
                    <li>beans, peas and lentils</li>
                    <li>cheese and yogurt</li>
                </ul>
            </div>
        </div>
        <p>Check out these <a href="/easymeals">easy meals</a> for some super simple and healthy food combos.</p>
        <div>
            <p>References: <a href="https://www.healthlinkbc.ca/healthy-eating/vegetarian-baby-6-12-month">HealthLink BC</a></p>
        </div>
    </div>
)

export default Nutrients; 