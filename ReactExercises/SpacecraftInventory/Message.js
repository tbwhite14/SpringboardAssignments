function Message (props)
{	
	const quantity = parseInt(props.quantity);
	const price = parseFloat(props.price) * quantity;
	const lowStock = `Low stock! Only ${quantity} remaining.`;
	const highValue = "High value asset! Constider extra protection";
	const stockMessage = quantity < 5 ? lowStock : null;
	const valueMessage = price > 1000 ? highValue : null;
	console.log(quantity, stockMessage);
	console.log(price, valueMessage);
	return (
		<div>
			<>{stockMessage}</>
			<>{valueMessage}</>
		</div>
	);
}
