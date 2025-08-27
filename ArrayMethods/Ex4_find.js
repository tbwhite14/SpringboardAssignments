const mythicalCreatures = [
	{name: "Dragon", type: "Fire", lastSeen: "Volcano Valley"},
	{name: "Mermaid", type: "Water", lastSeen: "Coral Caves"},
	{name: "Unicorn", type: "Land", lastSeen: "Enchanted Forest"},
	{name: "Griffin", type: "Air", lastSeen: "Highwind Mountains"},
	{name: "Kraken", type: "Water", lastSeen: "Abyssal Depths"}
];

const waterCreature = mythicalCreatures.find((creature)=>{
    return creature.type === "Water";
})

console.log(waterCreature.name);

const grifIndex = mythicalCreatures.findIndex((creature)=>{
    return creature.name === "Griffin";
})

console.log(grifIndex);

const forestSighing = mythicalCreatures.find((creature)=>{
    return creature.lastSeen === "Enchanted Forest";
})

console.log(forestSighing.name);