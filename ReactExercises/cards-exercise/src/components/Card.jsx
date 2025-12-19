function Card({ image, position }) {
    const cardStyles = {
        position: "absolute",
        left: position.x,
        top: position.y
    }
    return(
        <img
            src={image}
            style={cardStyles}
        ></img>
    )
}

export default Card;