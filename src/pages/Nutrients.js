import React from 'react';

const Nutrients = () => (
    <div className="content">
        <h2>Key Nutrients for babies 6-12 months</h2>
        <p>All humans need certain nutrients to grow and thrive. These are the ones to focus on for young babies.</p>
        <p>HOWEVER! Keep in mind that by giving your baby a wide variety of foods, you are most likely hitting these targets already! Don't stress over having a list to check off every meal. </p>
        <p>To make this even easier, the powerhouse foods section highlights foods that cover at least 3 of these important nutrients!</p>
        <p>For a general goal, the best advice I've read is to provide one iron, fat and fruit/veg source per meal.</p>
        
        <div className="nutrients container">
            <div>
                <h3>Powerhouse foods!</h3>
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
        <div>
            <p>References: <a href="https://www.healthlinkbc.ca/healthy-eating/vegetarian-baby-6-12-month">HealthLink BC</a></p>
        </div>
    </div>
)

export default Nutrients; 