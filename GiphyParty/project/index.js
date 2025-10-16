// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

let displayDiv = document.getElementById("display");
let searchForm = document.getElementById("search-form");
let searchBar = document.getElementById("querie");
let clearButton = document.getElementById("clear");

let gifCount = 0;

searchForm.addEventListener("submit", function(event) {
    event.preventDefault();
    giphySearch(searchBar.value);
});

async function giphySearch(querie) {
    let gifDiv = document.createElement("div");
    gifCount++;
    gifDiv.id=`gif${gifCount}`;

    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${querie}&api_key=${giphyApiKey}`);
        const rand = Math.floor(Math.random()*response.data.data.length);
        let url = response.data.data[rand].images.fixed_width.url;
        gifDiv.innerHTML = `<img src=${url} hight = 300 width = 300/>`;
        displayDiv.appendChild(gifDiv);
    }
    catch (error) {
        console.log(error);
    }
}

clearButton.addEventListener("click", function(){
    for(let i = 1; i <= gifCount; i++){
        let child = document.getElementById(`gif${i}`);
        displayDiv.removeChild(child);
    }
    gifCount = 0;
});