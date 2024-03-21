import { useState } from "react";
import Recipe from "../components/Recipe";

const RecipeContainer = () => {

    const [recipes, setRecipes] = useState([
        {
            cakeName: "Victoria Sponge",
            ingredients: [
                "eggs",
                "butter",
                "sugar",
                "self-raising flour",
                "baking powder",
                "milk"
            ],
            price: 5,
            rating: 5,
            count: 0
        },
        {
            cakeName: "Tea Loaf",
            ingredients: [
                "eggs",
                "oil",
                "dried fruit",
                "sugar",
                "self-raising flour",
                "strong tea"
            ],
            price: 2,
            rating: 3,
            count: 0   
        },
        {
            cakeName: "Carrot Cake", 
            ingredients: [
                "carrots",
                "walnuts",
                "oil",
                "cream cheese",
                "flour",
                "sugar"
            ],
            price: 8,
            rating: 5,
            count: 0
        }
    ]);

    const [sales, setSales] = useState(0);

    const updateSales = (price) => {
        setSales(sales + price); 
    };

    const mapRecipes = recipes.map(recipe => {
        return <Recipe recipe={recipe} updateSales={updateSales}/>
    });

    

    return (
        <>
            <h2>Recipes:</h2>
            <section>
                {mapRecipes}
            </section>
            <h2>Total sale value: £{sales}</h2>
        </>
    );
}
 
export default RecipeContainer;