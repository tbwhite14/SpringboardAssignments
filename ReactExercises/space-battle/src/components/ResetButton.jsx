function ResetButton({reset}) {
    const buttonStyles = {
        color: "white",
        borderColor: "white"
    }
    
    return(
        <button style={buttonStyles} onClick={() => reset()} className="action-btn">Play Again?</button>
    )
}

export default ResetButton;