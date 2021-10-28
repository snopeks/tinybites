import React, { Component } from 'react';
import babyEating from '../recipes-page.jpeg';

let allRecipes = [
    {
        "title": "Banana Pancakes",
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
        "title":"Veggie Frittata",
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
let sauceRecipes = [
    {
        "title": "Nut Butter Sauce",
        "ingredients": [
            "1-2 tsp of nut butter",
            "1-2 tsp oil"
        ],
        "directions":"Combine nut butter with oil to thin, then drizzle on whatever foods you are serving."
    },
    {
        "title": "Yogurt sauce",
        "ingredients": [
            "1-2 TBSP high fat yogurt",
            "1 TBSP soft tofu",
            "1/4 tsp coriander",
            "other spices to taste (pepper, cumin, garlic powder are all great"
        ],
        "directions": "Combine all ingredients and mix till mostly smooth and enjoy on pasta or vegetables. Blending in a personal size blender works well."
    },
    {
        "title":"Cheese sauce",
        "ingredients": [
            "1 TBSP butter",
            "2 tsp flour",
            "1/4 cup shredded cheese",
            "1 TBSP nutritional yeast",
            "1 tsp onion powder",
            "1 tsp garlic powder"
        ],
        "directions": "In a pot on medium heat, melt butter and whisk in flour to create a simple roux. Stir the butter and flour until all lumps are gone, then add cheese and spices, stir until everything is blended and enjoy!"
    }
]

class Recipes extends Component {
    GenerateRecipes(recipesData){
        let recipeContent = recipesData.map((recipe, key) => {
            return (
                <div key={key} className="recipe">
                    <div className="recipeImg">
                        <h3 className="recipeTitle">{recipe.title}</h3>
                    </div>
                    <p className="recipeHeader">Ingredients:</p>
                    <ul>
                        {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                    <p className="recipeHeader recipeDirections">Directions:</p>
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
                <img id="recipesPagePic" alt="baby eating food with mother" src={babyEating}></img>
                <div className="easyMealsContainer">
                    <div>
                        <h2>Easy and Satisfying Meals</h2>
                        <h3>Simple go-to options for busy parents</h3>
                        <ul>
                            <li>Cheesebread and sliced fruits</li>
                            <li><a href="#avoToast">Avocado toast</a> and a side of beans</li>
                            <li>Oatmeal with raisins and strawberries</li>
                            <li>Iron-fortified baby cereal &amp; banana with nut butter</li>
                            <li>Pasta with Mashed Peas &amp; Yogurt sauce</li>
                            <li>Chopped avocado with nut butter sauce, tofu pieces, &amp; berries</li>
                        </ul>
                    </div>
                    <div>
                        <h2>Toppings and sides</h2>
                        <h3>Give that extra nutritional boost</h3>
                        <ul>
                            <li>Nutritional Yeast - b-vitamins</li>
                            <li>Hemp hearts - omega 3s, protein, iron</li>
                            <li>Chia seeds - omega 3s, protein, fiber, calcium</li>
                            <li>Flax meal - omega 3s, fiber</li>
                            <li>Berries - vitamin C, fiber</li>
                            <li>Canned Beans - protein, iron, fiber</li>
                        </ul>
                    </div>
                </div>
                <div className="mealdiv">
                    <h2>Healthy Sauces</h2>
                    <div className="container ">
                        {this.GenerateRecipes(sauceRecipes)}
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

export default Recipes; 