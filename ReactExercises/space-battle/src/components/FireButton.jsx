function FireButton({fire}) {
    const buttonStyles = {
        color: "red",
        borderColor: "red"
    }
    
    return(
        <button style={buttonStyles} onClick={() => fire()} className="action-btn">Fire!</button>
    )
}

export default FireButton;