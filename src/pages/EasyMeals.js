import React from 'react';

const EasyMeals = () => (
    <div className="content">
        <h2 className="pageTitle">Recipes</h2>
        <div className="easyMealsContainer">
            <div>
                <h2>Basic Meals</h2>
                <h3>Simple go-to options for busy parents</h3>
                <p>Cheesebread and sliced fruits</p>
                <p><a href="#avoToast">Avocado toast</a> and a side of beans</p>
                <p><a href="#chickpeaPorridge">Chickpea porridge</a> and peas</p>
                <p>Iron-fortified baby cereal &amp; banana with nut butter</p>
                <p>Pasta with Mashed Peas &amp; Yogurt sauce</p>
                <p>Chopped avocado with nut butter sauce, tofu pieces, &amp; berries</p>
            </div>
            <div>
                <h2>Toppings and sides</h2>
                <h3>Simple options that give that extra nutritional boost</h3>
                <p>Nutritional Yeast - b-vitamins</p>
                <p>Hemp hearts - omega 3s, protein, iron</p>
                <p>Chia seeds - omega 3s, protein, fiber, calcium</p>
                <p>Flax meal - omega 3s, fiber</p>
                <p>Berries - vitamin C, fiber</p>
                <p>Canned Beans - protein, iron, fiber</p>
            </div>
        </div>
        <div className="mealdiv">
            <h2>Healthy Sauces</h2>
            <div className="container ">
                <div>
                    <h3>Nut butter sauce</h3> 
                    <ul>
                        <li>1-2 tsp of nut butter</li>
                        <li>1-2 tsp oil</li>
                    </ul>   
                    <p>Combine nut butter with oil to thin, then drizzle on whatever foods you are serving. </p>
                </div>
                <div>
                    <h3>Yogurt sauce</h3>
                    <ul>
                        <li>1-2 TBSP high fat yogurt</li>
                        <li>1 TBSP soft tofu</li>
                        <li>1/4 tsp coriander, spices to taste</li>
                    </ul>
                    <p>Combine all ingredients and mix till mostly smooth and enjoy on pasta or vegetables.</p>
                </div>
                <div>
                    <h3>Cheese sauce</h3>
                    <ul>
                        <li>1 TBSP nutritional yeast</li>
                        <li>1/4 cup shredded cheese</li>
                        <li>2 tsp yogurt</li>
                        <li>1 tsp onion powder</li>
                        <li>1 tsp garlic powder</li>
                    </ul>
                    <p>Melt ingredients together and then add to foods. </p>
                </div>
            </div>
        </div>
        <div className="mealdiv">
            <h2>Healthy Recipes in 10-30min</h2>
            <div className="container ">
                <div className="recipe">
                    <div class="recipeImg">
                        <p className="recipeTitle">Baby Pancakes</p>
                    </div>
                    <ul>
                        <li>1/2 cup chickpea flour</li>
                        <li>1/2 cup regular flour</li>
                        <li>1/4 cup flax meal</li>
                        <li>1 tsp baking powder</li>
                        <li>1/2 mashed banana</li>
                        <li>1 cup milk</li>
                    </ul>
                    <p className="recipeDirections">Directions:</p>
                    <p>Combine all ingredients, mix well, pour batter into a pan heated with butter or oil. Let cook until lightly browned and bubbles form on the top, then flip. Serve with nut butter on top.</p>
                </div>
                <div>
                    <p className="recipeTitle">Simple Stirfry</p>
                    <ul>
                        <li>any three veggies</li>
                        <li>1 TBSP oil or butter</li>
                        <li>spices and sauces to taste</li>
                        <li>1/4 cup tofu</li>
                    </ul>
                    <p>Chop veggies into bite sizes and sautee in oil or butter until soft. Add spices like cumin, coriander, or anything savory (not too spicy). You can cook the tofu with the veggies or serve plain on the side. </p>
                </div>
                <div>
                    <p id="avoToast" className="recipeTitle">Avocado Toast</p>
                    <ul>
                        <li>1-2 slices whole wheat bread</li>
                        <li>1/2 avocado</li>
                        <li>1 tsp oil</li>
                        <li>a dash of lemon</li>
                        <li>hemp hearts</li>
                        <li>nutritional yeast</li>
                    </ul>
                    <p>Lightly toast whole wheat bread, mash avocado with a splash of oil, a dash of lemon juice. Spread avocado on toast and sprinkle with hemp hearts and nutritional yeast. Slice into spears and serve.</p>
                </div>
                <div>
                    <p className="recipeTitle">Easy Pasta</p>
                    <ul>
                        <li>1/2 cup pasta (I like to use macaroni)</li>
                        <li>1 TBSP oil or butter</li>
                        <li>handful of frozen peas</li>
                        <li>yogurt sauce or cheese sauce</li>
                    </ul>
                    <p>Boil your choice of pasta until it is very soft. Melt oil or butter into drained noodles, add yogurt sauce and peas and cover until peas are warmed. Serve immediately. </p>
                </div>
                <div>
                    <p className="recipeTitle">Tasty Lentils</p>
                    <ul>
                        <li>1 cup water</li>
                        <li>1/2 cup lentils</li>
                        <li>1/2 large tomato</li>
                        <li>cumin, tumeric, black pepper to taste</li>
                        <li>1 TBSP butter or oil</li>
                    </ul>
                    <p>Combine water with lentils, boil till mushy. Add tomato and cook to soften. Add spices and butter or oil and serve warm. </p>
                </div>
                <div>
                    <p className="recipeTitle">Banana Nut Yogurt</p>
                    <ul>
                        <li>1 banana</li>
                        <li>1-2 tsp hemp hearts</li>
                        <li>1-2 tsp nut sauce</li>
                        <li>1/4 cup yogurt or iron-fortified infant cereal</li>
                    </ul>
                    <p>Cut banana into pieces, sprinkle with hemp hearts and nut sauce. Add to yogurt or infant cereal. Serve fresh.</p>
                </div>
                <div>
                    <p className="recipeTitle">Veggie frittata</p>
                    <ul>
                        <li>1 egg</li>
                        <li>1 handful chopped spinach</li>
                        <li>1 tsp hemp hearts</li>
                        <li>1 TBSP oil or butter</li>
                        <li>spices to taste</li>
                    </ul>
                    <p>Mix the egg, chopped spinach, hemp hearts and spices in a bowl. Pour into a heated, oiled pan and cover on medium heat. Steam the frittata for about 2min, flip when lightly browned. Slice into spears or bites. Serve warm.  </p>
                </div>
                <div>
                    <p className="recipeTitle">Scrambled Tofu</p>
                    <ul>
                        <li>1/4 large onion</li>
                        <li>1 piece celery</li>
                        <li>3 mushrooms</li>
                        <li>1 TBSP oil or butter</li>
                        <li>1/2 cup tofu</li>
                        <li>1 tsp nutritional yeast</li>
                        <li>spices</li>
                    </ul>
                    <p>Chop onion, celery and/or mushroom and sautee in pan till soft. Add tofu, spices and nutritional yeast. Roughly scramble for 2-3min until tofu is mixed well with veggies and spices. Serve warm.  </p>
                </div>
                <div>
                    <p className="recipeTitle">Roasted Veg</p>
                    <ul>
                        <li>1 sweet potato</li>
                        <li>1/2 squash, zuccini or other veg</li>
                        <li>1 onion</li>
                        <li>1 TBSP oil</li>
                        <li>1 tsp basil, rosemary and other spices</li>
                    </ul>
                    <p>Chop sweet potato, squash, onion or other roots or squash into bite sized pieces and toss in oil and spices. Roast in the oven at 350deg for 25-30min. Remove when soft and serve warm. </p>
                </div>
                <div>
                    <p id="chickpeaPorridge" className="recipeTitle">Chickpea Porridge</p>
                    <ul>
                        <li>1/2 can chickpeas</li>
                        <li>1/2-1 cup vegetable stock</li>
                        <li>1/2 TBSP butter</li>
                        <li>1 tsp nutritional yeast</li>
                        <li>1 tsp coriander</li>
                        <li>Pepper to taste</li>
                    </ul>
                    <p>Cook chickpeas with vegetable broth on the stove till softened like porridge. Add butter/oil,nutritional yeast, coriander, and pepper. Mix well and serve warm.</p>
                </div>
            </div>

        </div>
         <p>To read more from the experts, checkout the <a href="/resources">Resources page</a></p>
    </div>
)

export default EasyMeals; 