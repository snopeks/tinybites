import React, { Component } from 'react';

let allRecipes = [
    {
        "title": "Baby Pancakes",
        "ingredients": [
            "1/2 cup chickpea flour",
            "1/2 cup regular flour",
            "1/4 cup flax meal",
            "1 tsp baking powder",
            "1/2 mashed banana",
            "1 cup milk"
        ],
        "directions": "Combine all ingredients, mix well, pour batter into a pan heated with butter or oil. Let cook until lightly browned and bubbles form on the top, then flip. Serve with nut butter on top."
    },
    {
        "title": "Simple Stirfry",
        "ingredients": [
            "any three veggies",
            "1 TBSP oil or butter",
            "spices and sauces to taste",
            "1/4 cup tofu"
        ],
        "directions": "Chop veggies into bite sizes and sautee in oil or butter until soft. Add spices like cumin, coriander, or anything savory (not too spicy). You can cook the tofu with the veggies or serve plain on the side."
    },
    {
        "title": "Avocado Toast",
        "ingredients": [
            "1-2 slices whole wheat bread",
            "1/2 avocado",
            "1 tsp oil",
            "a dash of lemon",
            "hemp hearts",
            "nutritional yeast"
        ],
        "directions": "Lightly toast whole wheat bread, mash avocado with a splash of oil, a dash of lemon juice. Spread avocado on toast and sprinkle with hemp hearts and nutritional yeast. Slice into spears and serve."
    },
    {
        "title": "Easy Pasta",
        "ingredients": [
            "1/2 cup pasta (I like to use macaroni)",
            "1 TBSP oil or butter",
            "handful of frozen peas",
            "yogurt sauce or cheese sauce"
        ],
        "directions": "Boil your choice of pasta until it is very soft. Melt oil or butter into drained noodles, add yogurt sauce and peas and cover until peas are warmed. Serve immediately."
    },
    {
        "title": "Tasty Lentils",
        "ingredients": [
            "1 cup water",
            "1/2 cup lentils",
            "1/2 large tomato",
            "cumin, tumeric, black pepper to taste",
            "1 TBSP butter or oil"
        ],
        "directions": "Combine water with lentils, boil till mushy. Add tomato and cook to soften. Add spices and butter or oil and serve warm."
    },
    {
        "title": "Banana Nut Yogurt",
        "ingredients": [
            "1 banana",
            "1-2 tsp hemp hearts",
            "1-2 tsp nut sauce",
            "1/4 cup yogurt or iron-fortified infant cereal"
        ],
        "directions":"Cut banana into pieces, sprinkle with hemp hearts and nut sauce. Add to yogurt or infant cereal. Serve fresh."
    },
    {
        "title":"Veggie frittata",
        "ingredients": [
            "1 egg",
            "1 handful chopped spinach",
            "1 tsp hemp hearts",
            "1 TBSP oil or butter",
            "spices to taste"
        ],
        "directions": "Mix the egg, chopped spinach, hemp hearts and spices in a bowl. Pour into a heated, oiled pan and cover on medium heat. Steam the frittata for about 2min, flip when lightly browned. Slice into spears or bites. Serve warm. "
    },
    {
        "title": "Scrambled Tofu",
        "ingredients": [
            "1/4 large onion",
            "1 piece celery",
            "3 mushrooms",
            "1 TBSP oil or butter",
            "1/2 cup tofu",
            "1 tsp nutritional yeast",
            "spices"
        ],
        "directions": "Chop onion, celery and/or mushroom and sautee in pan till soft. Add tofu, spices and nutritional yeast. Roughly scramble for 2-3min until tofu is mixed well with veggies and spices. Serve warm."
    },
    {
        "title":"Roasted Veg",
        "ingredients": [
            "1 sweet potato",
            "1/2 squash, zuccini or other veg",
            "1 onion",
            "1 TBSP oil",
            "1 tsp basil, rosemary and other spices",
        ],
        "directions":"Chop sweet potato, squash, onion or other roots or squash into bite sized pieces and toss in oil and spices. Roast in the oven at 350deg for 25-30min. Remove when soft and serve warm."
    },
    {
        "title":"Chickpea Porridge",
        "ingredients": [
            "1/2 can chickpeas",
            "1/2-1 cup vegetable stock",
            "1/2 TBSP butter",
            "1 tsp nutritional yeast",
            "1 tsp coriander",
            "Pepper to taste",
        ],
        "directions":"Cook chickpeas with vegetable broth on the stove till softened like porridge. Add butter/oil,nutritional yeast, coriander, and pepper. Mix well and serve warm."
    }

]


class EasyMeals extends Component {
    GenerateRecipes(recipesData){
        let recipeContent = recipesData.map(recipe => {
            return (
                <div className="recipe">
                    <div className="recipeImg">
                        <h3 className="recipeTitle">{recipe.title}</h3>
                    </div>
                    <p>Ingredients:</p>
                    <ul>
                        {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                    <p className="recipeDirections">Directions:</p>
                    <p>{recipe.directions}</p>
                </div>
            )
                
        });
        return recipeContent
    }
    render() {
        return (

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
                        <h3>Give that extra nutritional boost</h3>
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
                        {this.GenerateRecipes(allRecipes)}
                    </div>

                </div>
                <p>To read more from the experts, checkout the <a href="/resources">Resources page</a></p>
            </div>
        )
    }
}

export default EasyMeals; 