function ItemAction({ id, handleDelete }) {
    return(
        <button onClick={() => handleDelete(id)}>Remove Item</button>
    )

}

export default ItemAction;