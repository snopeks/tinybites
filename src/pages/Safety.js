import React from 'react';
import dadAndBabyPic from '../dadAndBaby.jpeg';

const Safety = () => (
    <div className="content"> 
        <h2 className="pageTitle">Safety</h2>
        <img id="dadAndBabyPic" src={dadAndBabyPic} alt="dad holding baby"></img>
        <div className="text">
            <h2>Safety First</h2>
            <p>It's important to be alert and aware of hazards while feeding your baby.</p>
            <p>There are two main feeding hazards:</p>
            <ul>
                <li>Choking</li>
                <li>Allergies</li>
            </ul>
            <p>The goal here is to be smart in slowly introducing allergenic foods and recognizing allergic reactions, but not to be overly paranoid. Eating and sharing food with your child is a fun and exciting time!</p>
            <p>If you or your family has a history of certain allergies, I recommend talking with your doctor about how to avoid or minimize your child's possible allergic reactions.</p>
            <div className="infoLeft">
                <h3>Avoiding Choking Hazards</h3>
                <p>Be aware of the shape and firmness of the food you provide. Round and/or firm foods have a higher risk of fully obstructing your child's airway if they choke, so this is why we pay attention to cutting and softening their foods.</p>
                <p>Here are some common choking hazards and how to minimize the risk.</p>
                <ul>
                    <li>Raw apples or carrot sticks</li>
                    <p>These are very common causes of choking and should be steamed, grated or cooked to a soft texture.</p>
                    <li>Peas, grapes or berries</li>
                    <p>Lightly squish or cut soft foods that are naturally rounded to reduce their choking potential.</p>
                    <li>Whole nuts and nut butters</li>
                    <p>Nuts are often rounded and hard, double whammy! Therefore whole nuts should not be served to children younger than four years. Nut butters can be sticky and difficult to swallow so they should be watered down or spread quite thin.</p>
                </ul>
                <p>The best practice is to always be near your child as they eat, that way you are ready to help if they need you.</p>
            </div>
            <div className="infoLeft">
                <h3>Gagging vs Choking: don't be scared!</h3>
                <p>When children are learning to eat solid foods, there will inevitably be moments of gagging. They are learning what it feels like to chew and handle food for the first time. This is a good thing!</p>
                <p>If they are gagging or making other loud noises, this means they are still able to breathe. Encourage them to chew or spit out their food. Try your best to not overreact, as they will pick up on your fear and it can make mealtime scary.</p>
                <p>Choking is generally silent; your child's face will turn blue from lack of oxygen, and this requires immediate intervention.</p>
                <p> <a href="https://readysetfood.com/blogs/community/gagging-vs-choking-during-baby-weaning-how-to-tell-the-difference#:~:text=Gagging%20is%20a%20perfectly%20normal,back%20as%20baby%20gets%20older.)">This blog here</a> is a great guide to differentiate between gagging and choking. However, as a parent it's always a good idea to consider taking a first aid course to learn how to help your child in a medical emergency.</p>
            </div>
            <div>
            <h3>Spears vs Bites</h3>
                <p>When your baby first starts eating, they typically have a <b>"palmer's"</b> grasp and hold food in their entire palm. Cut food into <b>spears for palmer's grasp</b>.</p>
                <p>After a while they learn a <b>"pincer"</b> grasp, which is holding food between the thumb and forefinger. Cut food into <b>small bites for pincer grasp</b>. Around the size of a chickpea to start.</p>
                <p>This may sound complicated, but it's really easy and doesn't take a lot of time to cut food up into spears or small chunks. It's a simple way to support your child in developing their muscles and confidence in handling food.</p>
            </div>
            <div className="infoLeft">
                <h3>Allergies</h3>
                <p>The top allergenic foods are:</p> 
                <ul>
                    <li>eggs</li>
                    <li>peanuts</li>
                    <li>tree nuts</li>
                    <li>dairy</li>
                    <li>soy</li>
                    <li>fish</li>
                    <li>shellfish</li>
                    <li>wheat</li>
                </ul>
                <p><a href="https://www.webmd.com/parenting/baby/introducing-new-foods#3">Modern research</a> tells us that babies should be given allergenic foods <b>early and often</b> to help them avoid developing allergies later in life.</p>
                <p>Serve your baby one allergenic food at a time and wait 3-5 days to determine if it causes a reaction before introducing a different allergenic food.</p>
            </div>
            <div>
                <h3>Recognizing allergic reactions</h3>
                <p>Allergic reactions can show up in the following ways:</p>
                <ul>
                    <li>rashes and hives</li>
                    <li>difficulty breathing</li>
                    <li>swelling in the face or mouth</li>
                    <li>coughing/wheezing</li>
                    <li>in some extreme cases, loss of consciousness.</li>
                </ul>
                <p>It's a good idea to write down anything that concerns you as your child is exposed to more and more foods, this way you have some data to discuss at your child's next doctor visit.</p>
            </div>
            <div className="infoLeft">
                <h3>Watch their growth and confidence soar</h3>
                <p>As you see your child gain skills and confidence in eating, you will start to learn their own unique comfort level with different sized pieces. After a few months of observing my daughter eating, I began trusting her with a wider diversity of food types and sizes. The result: her skills and enjoyment of food has grown tremendously!</p>
                <p>This can be controversial, but it's actually recommended to allow your child to choose how much to eat. Every baby has their own appetite level, and in most cases we can trust them to decide when they are full. I tend to create boundaries around time at the dinner table and ask my child to "taste" things before leaving. This encourages an understanding of shared dinner time and keeping an open mind to new flavors and textures without forcing them to eat a certain amount.</p>
                <p>Don't forget! Eating solids is an exciting developmental milestone and opens the door to new food adventures and experiences with your children. Enjoy this phase and learning process as much as you can while being safe.</p>
            </div>
            <h2 className="centerHighlight">If you have any concerns about your baby's growth, health or safety, please discuss with your health care provider.</h2>
        </div>
    </div>
)

export default Safety; 