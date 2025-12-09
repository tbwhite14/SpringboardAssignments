function FireButton({gameState, click}) {
    const buttonStyles = {
        color: "red",
        borderColor: "red"
    }
    const buttonText = 
        gameState === "Active"
        ? "Fire!"
        : "Play Again?";
    return(
        <button style={buttonStyles} onClick={() => click()}>{buttonText}</button>
    )
}

export default FireButton;