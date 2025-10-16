const spoonacularAPIKEY = "32066e75aaba4c199f70a793b9d860c9";

// axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`).then((response) => {
//     console.log(response.data.recipes[0]);
// });

// Complex search

axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cusine=italian&diet=vegetarian`).then((response)=>{
    console.log(response);
});