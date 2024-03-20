import "./Recipe.css"

const Recipe = ({cakeName, ingredients, price, rating, count, onButtonClick}) => {

    const handleClick = () => {
        onButtonClick(count + 1);
    }

    return (
        <div className="recipe">
            <h3>{cakeName}</h3>
            <ul id="ingedients-list">Ingredients: {ingredients.join(", ")}</ul>
            <h5>Price: £{price}, Rating: {rating}</h5>
            <h5>Cakes sold: {count}</h5>
            <button onClick={handleClick}>Sell cake</button>
        </div>
    );
}
 
export default Recipe;