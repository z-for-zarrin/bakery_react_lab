import "./Recipe.css"

const Recipe = ({cakeName, ingredients, price, rating}) => {

    return (
        <div className="recipe">
            <h3>{cakeName}</h3>
            <ul id="ingedients-list">Ingredients: {ingredients.join(", ")}</ul>
            <h5>Price: £{price}</h5>
            <h5>Rating: {rating}</h5>
        </div>
    );
}
 
export default Recipe;