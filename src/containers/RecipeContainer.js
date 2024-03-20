import { useState } from "react";
import Recipe from "../components/Recipe";

const RecipeContainer = () => {

    const [victoriaCount, setVictoriaCount] = useState(0);
    const [teaLoafCount, setTeaLoafCount] = useState(0);
    const [carrotCount, setCarrotCount] = useState(0);

    return (
        <>
            <h2>Recipes:</h2>
            <section>
                <Recipe cakeName={"Victoria Sponge"} 
                        ingredients={["eggs", "butter", "sugar", "self-raising flour",
                                    "baking powder", "milk"]}
                        price={5}
                        rating={5}
                        count={victoriaCount}
                        onButtonClick={setVictoriaCount}/>
                <Recipe cakeName={"Tea Loaf"} 
                        ingredients={["eggs", "oil", "dried fruit", "sugar", "self-raising flour",
                                    "strong tea"]}
                        price={2}
                        rating={3}
                        count={teaLoafCount}
                        onButtonClick={setTeaLoafCount}/>
                <Recipe cakeName={"Carrot Cake"} 
                        ingredients={["carrots", "walnuts", "oil", "cream cheese",
                                    "flour", "sugar"]}
                        price={8}
                        rating={5}
                        count={carrotCount}
                        onButtonClick={setCarrotCount}/>
            </section>
            <h2>Total cakes sold: {victoriaCount + teaLoafCount + carrotCount}</h2>
        </>
    );
}
 
export default RecipeContainer;