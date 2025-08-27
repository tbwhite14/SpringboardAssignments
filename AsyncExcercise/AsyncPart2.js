const drawOne = async () => {
    try {
        const getCard = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
        const json1 = await getCard.json();
        const newCard = await json1.cards;
        console.log(newCard[0].value, " of ", newCard[0].suit);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }
}

//  drawOne();

const drawTwo = async () => {
    try {
        const getCard = await fetch(`https://deckofcardsapi.com/api/deck/new/draw/?count=1`);
        const json1 = await getCard.json();
        const cardOne = await json1.cards;
        const deck = await json1.deck_id;
        const getCard2 = await fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
        const json2 = await getCard2.json();
        const cardTwo = await json2.cards;
        console.log("First card: ", cardOne[0].value, " of ", cardOne[0].suit);
        console.log("Second card: ", cardTwo[0].value, " of ", cardTwo[0].suit);
    }
    catch (error) {
        console.error("Error fetching data:", error);
    }

}

// drawTwo();

let deck = null;

const getNewDeck = async () => {
    const newDeck = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    const jsonDeck = await newDeck.json();
    deck = jsonDeck.deck_id;
}

getNewDeck();

async function part3() {
    const button = document.querySelector("button");
    button.addEventListener("click", DrawNewCard);

    async function DrawNewCard () {
        try{
            const getCard = await fetch(`https://deckofcardsapi.com/api/deck/${deck}/draw/?count=1`);
            const json1 = await getCard.json();
            const newCard = await json1.cards;
            document.body.insertAdjacentHTML('beforeend', `<p>${newCard[0].value} of ${newCard[0].suit}</p>`);
        }
        catch (error) {
            console.error("Error fetching data:", error);
        }
    }
}

part3();