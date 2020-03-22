import React from 'react';

const Nutrients = () => (
    <div className="content">
        <div className="text">
            <h2>0-6 months: Babies need milk</h2>
            <p>For the first six months of life, babies should only get <b>breastmilk</b> or <b>infant formula</b> (not cows milk). This liquid diet is highly nutritious, absorbable and rich in fats, perfect for their needs. Starting solid foods too early can interfere with their milk intake, which can cause them to be deficient in calories and nutrients because baby digestive systems aren't usually capable of handling solids effectively yet. </p>
            <h2>6-12 months: Time to add food</h2>
            <p>Babies need breastmilk or infant formula up until 1 year at least, but by 6 months they are ready for the addition of solid food -- Exciting! </p>
            <p>At this time, you should be thinking about the following key nutrients when planning their meals.</p>
            <p>HOWEVER! Keep in mind that by giving your baby a wide variety of foods, you are most likely hitting these targets already! </p>
            <h3>Point being: Don't stress over having a list to check off every meal.</h3>
            <p>To make this even easier, the powerhouse foods section highlights foods that cover at least 3 of these important nutrients!</p>
            <p>For a general goal, the best advice I've read is to provide <br/><b>one iron, fat and fruit/veg source per meal</b>.</p>
        </div>
        <div className="nutrients container">
            <div>
                <h3>Powerhouse foods</h3>
                <p><b>Eggs:</b> iron, protein, B12, Omega3s</p>
                <p><b>Tofu:</b> iron, protein, Omega3s, calcium</p>
                <p><b>Nut butters:</b> iron, protein, fat, zinc</p>
                <p><b>Beans/Peas/Lentils:</b> iron, protein, calcium, zinc</p>
                <p><b>Cheese/Yogurt:</b> protein, fat, B12, calcium, zinc</p>
            </div>
            <div>
                <h3>Iron</h3>
                <ul>
                    <li>fortified cereals</li>
                    <li>beans, peas and lentils</li>
                    <li>tofu</li>
                    <li>eggs</li>
                    <li>thinly spread nut butters</li>
                </ul>
                <p>Combining iron with a vitamin C source increases iron absorption by up to 5x!</p>
                <p>e.g. citrus fruits, sweet potatoes, peppers, melons, kiwi and more.</p>
            </div>
            <div>
                <h3>Protein</h3>
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
                <h3>Fat</h3>
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
                <h3>Omega-3 Fats</h3>
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
                <h3>Vitamin B12</h3>
                <ul>
                    <li>eggs</li>
                    <li>cheese and yogurt</li>
                    <li>infant formula</li>
                </ul>
                <p>Please note that breastmilk may not provide enough B12. </p>
            </div>
            <div>
                <h3>Vitamin D</h3>
                <ul>
                    <li>infant formula</li>
                </ul>
                <p>It is recommended that breastfed babies are given a supplement of 400UI per day.</p>
            </div>
            <div>
                <h3>Calcium</h3>
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
                <h3>Zinc</h3>
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