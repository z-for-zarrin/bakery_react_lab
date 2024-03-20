import Recipe from "../components/Recipe";

const RecipeContainer = () => {
    return (
        <>
            <h2>Recipes:</h2>
            <Recipe cakeName={"Victoria Sponge"} 
                    ingredients={["eggs", "butter", "sugar", "self-raising flour",
                                  "baking powder", "milk"]}
                    price={5}
                    rating={5} />
            <Recipe cakeName={"Tea Loaf"} 
                    ingredients={["eggs", "oil", "dried fruit", "sugar", "self-raising flour",
                                  "strong tea"]}
                    price={2}
                    rating={3} />
            <Recipe cakeName={"Carrot Cake"} 
                    ingredients={["carrots", "walnuts", "oil", "cream cheese",
                                  "flour", "sugar"]}
                    price={8}
                    rating={5} />
        </>
    );
}
 
export default RecipeContainer;