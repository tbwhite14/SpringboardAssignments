const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const newUsers = users.map(function(user){
    let fullName = `${user.firstName} ${user.lastName}`;
    let membershipStatus = user.points > 100 ? "Premium":"Standard";
    return { fullName, membershipStatus };
})

console.log(newUsers);