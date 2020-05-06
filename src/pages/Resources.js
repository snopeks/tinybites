import React from 'react';
import IGicon from '../icon_IG.svg'; 
import webicon from '../icon_website.svg';

const Resources = () => (
    <div className="content">
        <h2 className="pageTitle">Resources</h2>
        <div className="text">
            <p>The best way to develop confidence in feeding your baby is by learning from the experts.</p>
            <p>Here are just a few of my favorite baby feeding resources.</p>
        </div>
        <div id="resourceContainer" className="container">
            <div>
                <h3>Plant Based Juniors</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://plantbasedjuniors.com/">Plant-Based Juniors</a>
                    <img src={IGicon} alt="ig icon"></img>
                    <a href="https://www.instagram.com/plantbasedjuniors/">@plantbasedjuniors</a>
                </div>

            </div>
            <div>
                <h3>New Ways Nutrition</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://newwaysnutrition.com/">New Ways Nutrition</a>
                    <img src={IGicon} alt="ig icon"></img>
                    <a href="https://www.instagram.com/newwaysnutrition/">@newwaysnutrition</a>
                </div>
            </div>
            <div>
                <h3>Baby Led Weaning Ideas</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://www.babyledweaningideas.com/carrot-kale-cheese-muffins/">Baby Led Weaning Ideas</a>
                </div>
            </div>
            <div>
                <h3>My Little Eater</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://mylittleeater.com/my-top-6-starter-finger-foods-for-baby-led-weaning/">My Little Eater</a>
                </div>
            </div>
            <div>
                <h3>HealthLink BC</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://www.healthlinkbc.ca/healthy-eating/vegetarian-baby-6-12-month">HealthLink BC</a>
                </div>
            </div>
            <div>
                <h3>Healthy Families BC</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://www.healthyfamiliesbc.ca/home/blog/introducing-solids-your-baby-look-baby-led-weaning">Healthy Families BC</a>
                </div>
            </div>
            <div>
                <h3>WebMD - baby allergies</h3>
                <div className="resourceLinks">
                    <img src={webicon} alt="web icon"></img>
                    <a href="https://www.webmd.com/parenting/baby/introducing-new-foods#1">WebMD Baby Allergies</a>
                </div>
            </div>
        </div>
    </div>
)

export default Resources; 