import "./Recipe.css"

const Recipe = ({recipe, updateSales}) => {

    const handleClick = () => {
        updateSales(recipe.price);
    }

    return (
        <div className="recipe">
            <h3>{recipe.cakeName}</h3>
            <p id="ingedients-list">Ingredients: {recipe.ingredients.join(", ")}</p>
            <h5>Price: £{recipe.price}, Rating: {recipe.rating}</h5>
            {/* <h5>Cakes sold: {recipe.count}</h5> */}
            <button onClick={handleClick}>Sell cake</button>
        </div>
    );
}
 
export default Recipe;