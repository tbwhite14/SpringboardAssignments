function ItemCard({ name, quantity, purpose }) {
    return(
        <div>
            <h3>{name}</h3>
            <p>Quantity: {quantity}</p>
            <p>{purpose}</p>
        </div>
    )

}

export default ItemCard;