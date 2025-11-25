function InventoryItem ({name, type, quantity = 0, price = 0})
{
	const lowStock = 5;
	const highValue = 500;
	const value = quantity * price;
	return (
		<div>
			<h2>{name} ({type})</h2>
			{
				quantity < lowStock 
				&& 
				<Message><p>Low stock! Only {quantity} remaining.</p></Message>
			}
			{
				value > highValue 
				&& 
				<Message><p>High value asset! Consider extra protection!</p></Message>
			}
		</div>
	);
}
