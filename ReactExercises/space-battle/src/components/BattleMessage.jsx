import "./BattleMessage.css";

function BattleMessage({gameState, player}) {
    const gameOver = 
        player === 0 
        ? "Mission Failed: Your ship was destroyed" 
        : "Victory! You sucessufully defended your ship";
    const message = 
        gameState === "Active" 
        ? "Your spaceship is under attack.  Engage the enemy vessel!" 
        : gameOver;

    return(
        <div id="game-message">{message}</div>
    )
}

export default BattleMessage;