const Recipe = ({cakeName, ingredients, price, rating}) => {

    return (
        <>
            <h3>{cakeName}</h3>
            <ul id="ingedients-list">Ingredients: {ingredients.join(", ")}</ul>
            <h5>Price: £{price}</h5>
            <h5>Rating: {rating}</h5>
        </>
    );
}
 
export default Recipe;