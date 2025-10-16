// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "32066e75aaba4c199f70a793b9d860c9";

const button = document.getElementById('generate-button');
const displayDiv = document.getElementById('display-div');

button.addEventListener("click", function() {
    getRandomRecipe();
})

async function getRandomRecipe() {
    let newDiv = document.createElement("div");
    let h3 = document.createElement("h3");
    let firstH4 = document.createElement("h4");
    let secondH4 = document.createElement("h4");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let img = document.createElement("div");
    
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
        displayDiv.innerHTML = '';
        // set recipe title into the header
        h3.innerHTML = response.data.recipes[0].title;
        displayDiv.appendChild(h3);

        // add image
        img.innerHTML = `<img src="${response.data.recipes[0].image}"/>`;
        displayDiv.appendChild(img);

        // set the recipe summary in the new div
        newDiv.innerHTML = response.data.recipes[0].summary;
        displayDiv.appendChild(newDiv);

        // list ingredients
        firstH4.innerHTML = "Ingredients";
        displayDiv.appendChild(firstH4);
        let count = response.data.recipes[0].extendedIngredients.length;
        let ingredientList = response.data.recipes[0].extendedIngredients
        for (let i = 0; i < count; i++){
            let newLi = document.createElement("li");
            newLi.innerHTML = ingredientList[i].original;
            div2.appendChild(newLi);
        }
        displayDiv.appendChild(div2);

        // print directions
        secondH4.innerHTML = "Instructions";
        displayDiv.appendChild(secondH4);
        div3.innerHTML = response.data.recipes[0].instructions;
        displayDiv.appendChild(div3);

        console.log(response.data.recipes[0]);
    }
    catch (error) {
        displayDiv.innerHTML = '';
        h3.innerHTML = "Error";
        h3.classList.add("error-response");
        displayDiv.appendChild(h3);
        newDiv.innerHTML = error.response.data.message;
        newDiv.classList.add("error-response");
        displayDiv.appendChild(newDiv);
    }
}