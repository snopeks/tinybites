import React from 'react';

const EasyMeals = () => (
    <div className="content">
        <h2>Meal Ideas</h2>
        <p>These meals are based on a philosophy called <i>baby led feeding</i>. Essentially it means we feed babies whole foods (aka not pureeing them).</p>
        <p>As long as the foods are prepared to an age appropriate texture and size, it is no more likely to be a choking hazard than purees!</p>
        <p>An important part of baby led feeding is allowing your child to choose how much to eat. Every baby has their own appetite level, and in most cases we can trust them to decide when they are full.</p>
        <p><i>If you have any concerns about your baby's growth or nutrition, please discuss with your health care provider!</i></p>
        <div className="mealdiv">
            <h3>Meal basics</h3>
            <h4>Simple go-to options for busy parents</h4>
            <p>Iron-fortified baby cereal &amp; banana with nut butter</p>
            <p>Pasta with Peas &amp; Yogurt sauce (legume-based pasta for added iron)</p>
            <p>Butter or oil-sauteed vegetables &amp; nut butter toast</p>
            <p>Chopped avocado with nut butter sauce, tofu pieces, &amp; raspberries (or any berry on hand, slightly mushed)</p>
        </div>
        <div className="mealdiv">
            <h3>Nutrition-boosting Toppings</h3>
            <div className="container ">
                <p>Nutritional Yeast (b vitamins)</p>
                <p>Hemp hearts (omega 3s, protein, iron)</p>
                <p>Chia seeds (omega 3s, protein, fiber, calcium)</p>
                <p>Flax meal (omega 3s, fiber)</p>
            </div>
        </div>
        <div className="mealdiv">
            <h3>Healthy Sauces</h3>
            <div className="container ">
                <div>
                    <h4>Nut butter sauce</h4>    
                    <p>Combine 1-2 tsp of nut butter with 1-2 tsp of oil to thin, then drizzle on whatever foods you are serving! </p>
                </div>
                <div>
                    <h4>Yogurt sauce</h4>
                    <p>Combine 1-2 TBSP of 4%+ M.F. yogurt with 1 TBSP soft tofu, mix till mostly smooth and enjoy on pasta or vegetables!</p>
                </div>
                <div>
                    <h4>Cheeze sauce</h4>
                    <p>Mix 1 TBSP nutritional yeast with 1 TBSP plain yogurt, 1 tsp onion powder, 1 tsp garlic powder, 1/4 tsp tumeric. Let sit for 5-10min to marinate then add to foods. </p>
                </div>
            </div>
        </div>
        <div className="mealdiv">
            <h3>Quick and Easy Recipes</h3>
            <h4>Healthy meals in ~30min</h4>
            <div className="container ">
                <div>
                    <p>Baby Pancakes</p>
                </div>
                <div>
                    <p>Simple Stirfry</p>
                </div>
                <div>
                    <p>Superfood Combo</p>
                </div>
                <div>
                    <p>Fruity &amp; Delicious</p>
                </div>
                <div>
                    <p>Tasty Lentils</p>
                </div>
                <div>
                    <p>Veggie Muffins</p>
                </div>
                <div>
                    <p>Eggs'n'Things</p>
                </div>
                <div>
                    <p>Mashed Potatoes</p>
                </div>
                <div>
                    <p>Roasty Veg</p>
                </div>
            </div>

        </div>
    </div>
)

export default EasyMeals; 