import { useState, useEffect, useRef } from "react";
import Card from "./Card";
import Shuffle from "./Shuffle";
import "./Deck.css";

function Deck() {
    const [ deck, setDeck ] = useState();
    const [ cardData, setCardData ] = useState([])
    const [ isShuffling, setIsShuffling ] = useState(false)
    const [ isLoading, setIsLoading ] = useState(false)
    const [ error, setError ] = useState();
    
    const cardsRemaining = useRef(52);
    const offset = useRef(0);

    useEffect(() =>{
        async function getDeck() {
            setIsLoading(true);
            const apiSrc = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
            const newDeck = await axios.get(apiSrc);
            setDeck(newDeck.data);
            setIsLoading(false);
        }
        getDeck()
    }, []);

    if(isLoading) return <div>Loading...</div>
    
    async function drawCard() {
        try{
            const src = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/draw/?count=1`;
            const newCard = await axios.get(src);
            setCardData(cardData => 
                [...cardData, {
                    ...newCard.data.cards[0], 
                    position: {
                        x: offset.current * 25,
                        y: offset.current * 5
                    }
                }]);
            cardsRemaining.current = newCard.data.remaining;
            offset.current++;
            if(cardsRemaining.current === 0) throw new Error("Deck is empty");
        } catch (e) {
            setError(e);
        }
    }

    async function reshuffle() {
        setIsShuffling(true);
        const src = `https://deckofcardsapi.com/api/deck/${deck.deck_id}/shuffle/?count=1`;
        const newShuffle = await axios.get(src);
        setCardData([]);
        cardsRemaining.current = 52;
        offset.current = 0;
        setError();
        setIsShuffling(false);
    }
    
    return(
        <>
            <div id="btn-box">
                <div id="draw-or-error">
                    {
                        error
                            ? <span><b>Deck is empty</b></span>
                            : <button onClick={() => drawCard()}>Draw a Card!</button>
                    }
                </div>
                <div>
                    {
                        !isShuffling
                            ? <Shuffle shuffleDeck={reshuffle}/>
                            : null
                    }
                </div>
            </div>

            <div id="card-box">
                {
                    cardData.map((c) => <Card key={c.code} image={c.image} position={c.position}/>)
                }
            </div>
        </>
    )

}

export default Deck;