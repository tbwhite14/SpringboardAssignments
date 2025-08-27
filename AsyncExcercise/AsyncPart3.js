const populate = async () => {
    const getData = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=1025');
    const poke = await getData.json();
    console.log(poke);
}

// populate();


const randomPokemon = async () => {
    const num = Math.floor(Math.random()*1025); 
    const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
    const poke = await getData.json();
    console.log(poke);       
}

// randomPokemon();


const randomLinks = async () => {
    for (let n = 1; n <=3; n++) {
        const num = Math.floor(Math.random()*1025); 
        const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        const poke = await getData.json();
        console.log(poke); 
    }       
}

// randomLinks();

const randomPokemonSpecies = async () => {
    for (let n = 1; n <=3; n++) {
        const num = Math.floor(Math.random()*1025); 
        const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        const poke = await getData.json();
        const name = await poke.name;
        const fetchSpecies = await fetch(poke.species['url']);
        const speciesData = await fetchSpecies.json();
        const texts = await speciesData.flavor_text_entries.length;
        console.log(num," Name: ", name);
        for (i = 0; i < texts; i++) {
            const lang = await speciesData.flavor_text_entries[i].language.name;
            if (lang === 'en') {
                console.log(speciesData.flavor_text_entries[i].flavor_text);
                break;
            }
        } 
    }  
}

// randomPokemonSpecies();

async function pokeButton() {
    const button = document.querySelector("button");
    button.addEventListener("click", pokeData);

    async function pokeData() {
        try{
            for (let n = 1; n <=3; n++) {
                const num = Math.floor(Math.random()*1025); 
                const getData = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
                const poke = await getData.json();
                const name = await poke.name;
                const pic = await poke.sprites.front_default;
                const fetchSpecies = await fetch(poke.species['url']);
                const speciesData = await fetchSpecies.json();
                const texts = await speciesData.flavor_text_entries.length;
                for (i = 0; i < texts; i++) {
                    const lang = await speciesData.flavor_text_entries[i].language.name;
                    if (lang === 'en') {
                        const flavorText = await speciesData.flavor_text_entries[i].flavor_text;
                        document.body.insertAdjacentHTML('beforeend',`<p>Name: ${name.toUpperCase()}, Number: ${num}</p>`);
                        document.body.insertAdjacentHTML('beforeend',`<img src=${pic} height=200 width=200 />`);
                        document.body.insertAdjacentHTML('beforeend',`<p>${flavorText}</p>`);
                        break;
                    }
                }  
            }
        }
        catch{
            console.error("Error fetching data:", error);
        }
    }
}

pokeButton();
