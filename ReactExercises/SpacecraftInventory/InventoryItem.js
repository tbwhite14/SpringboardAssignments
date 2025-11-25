function InventoryItem (props)
{
	return (
		<div>
			<h2><b>{props.name}</b> ({props.type})</h2>
				<><Message quantity={props.quantity} price={props.price}/></>
		</div>
	);
}
