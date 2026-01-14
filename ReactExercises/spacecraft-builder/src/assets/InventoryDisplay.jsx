import ItemCard from "./ItemCard";
import ItemAction from "./ItemAction";

function InventoryDisplay({ inventory, handleDelete }) {

    return(
        <div>
            {
                inventory.map((item) => {
                    const { name, quantity, purpose, id } = item;                    
                    return (
                        <div key={id}>
                            <ItemCard name={name} quantity={quantity} purpose={purpose} />
                            <ItemAction id={id} handleDelete={handleDelete} />
                        </div>
                    )
            })}
        </div>
    )
}

export default InventoryDisplay;