function BattleMessage({gameState, player}) {
    const gameOver = 
        player === 0 
        ? "Mission Failed: Your ship was destroyed" 
        : "Victory! You sucessufully defended your ship";
    const message = 
        gameState === "Active" 
        ? "Engage enemy vessel!" 
        : gameOver;

    return(
        <div>{message}</div>
    )
}

export default BattleMessage;